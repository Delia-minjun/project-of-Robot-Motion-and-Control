# #!/usr/bin/env python3

import sys
import time
import rospy
import moveit_commander
import moveit_msgs.msg
import geometry_msgs.msg
from math import pi
from tf.transformations import quaternion_from_euler

class PickAndPlaceTask(object):
  def __init__(self):
    super(PickAndPlaceTask, self).__init__()
    moveit_commander.roscpp_initialize(sys.argv)
    rospy.init_node('pick_and_place_task')

    try:
      self.ns = rospy.get_namespace()
      self.robot = moveit_commander.RobotCommander(robot_description=self.ns + "robot_description", ns=self.ns)
      self.scene = moveit_commander.PlanningSceneInterface(ns=self.ns)
      
      arm_group_name = "arm"
      self.arm_group = moveit_commander.MoveGroupCommander(arm_group_name, robot_description=self.ns + "robot_description", ns=self.ns)
      
      self.is_gripper_present = rospy.get_param(self.ns + "is_gripper_present", True)
      if self.is_gripper_present:
        gripper_group_name = "gripper"
        self.gripper_group = moveit_commander.MoveGroupCommander(gripper_group_name, robot_description=self.ns + "robot_description", ns=self.ns)
        gripper_joint_names = rospy.get_param(self.ns + "gripper_joint_names", ["finger_joint"])
        self.gripper_joint_name = gripper_joint_names[0]

      rospy.loginfo("Pick and Place Task Initialized Successfully")
    except Exception as e:
      rospy.logerr("Initialization failed: " + str(e))
      self.is_init_success = False
    else:
      self.is_init_success = True

  def reach_gripper_position(self, relative_position):
    gripper_group = self.gripper_group
    
    gripper_joint = self.robot.get_joint(self.gripper_joint_name)
    gripper_max_absolute_pos = gripper_joint.max_bound()
    gripper_min_absolute_pos = gripper_joint.min_bound()
    try:
      val = gripper_joint.move(relative_position * (gripper_max_absolute_pos - gripper_min_absolute_pos) + gripper_min_absolute_pos, True)
      return val
    except:
      return False 

  def reach_cartesian_pose(self, pose):
    self.arm_group.set_pose_target(pose)
    return self.arm_group.go(wait=True)

  def create_pose(self, x, y, z, roll, pitch, yaw):
    pose = geometry_msgs.msg.Pose()
    pose.position.x = x
    pose.position.y = y
    pose.position.z = z
    q = quaternion_from_euler(roll, pitch, yaw)
    pose.orientation.x = q[0]
    pose.orientation.y = q[1]
    pose.orientation.z = q[2]
    pose.orientation.w = q[3]
    return pose

def main():
  task = PickAndPlaceTask()
  if not task.is_init_success:
    return

  # --- 坐标定义 ---
  pick_x, pick_y, pick_z = 0.4, 0.0, 0.02
  place_x, place_y, place_z = 0.35, 0.2, 0.01

  success = True

  rospy.loginfo("Step 1: Going Home and Opening Gripper")
  task.arm_group.set_named_target("home")
  success &= task.arm_group.go(wait=True)
  success &= task.reach_gripper_position(1.0) 

  rospy.loginfo("Step 2: Moving to Pre-Pick position")
  pre_pick_pose = task.create_pose(pick_x, pick_y, pick_z + 0.1, pi, 0, 0)
  success &= task.reach_cartesian_pose(pre_pick_pose)

  rospy.loginfo("Step 3: Vertical Picking")
  pick_pose = task.create_pose(pick_x, pick_y, pick_z, pi, 0, 0)
  success &= task.reach_cartesian_pose(pick_pose)
  time.sleep(0.5)
  success &= task.reach_gripper_position(0.25) # 闭合抓取

  rospy.loginfo("Step 4: Lifting")
  success &= task.reach_cartesian_pose(pre_pick_pose)

  rospy.loginfo("Step 5: Moving to Place position (Vertical)")
  pre_place_vertical = task.create_pose(place_x, place_y, place_z + 0.15, pi, 0, 0)
  success &= task.reach_cartesian_pose(pre_place_vertical)

  rospy.loginfo("Step 5.5: Re-orienting gripper to HORIZONTAL")
  pre_place_horizontal = task.create_pose(place_x, place_y, place_z + 0.15, pi/2, 0, pi/4)
  success &= task.reach_cartesian_pose(pre_place_horizontal)

  rospy.loginfo("Step 6: Horizontal Placing")
  place_pose_horiz = task.create_pose(place_x, place_y, place_z, pi/2, 0, pi/4)
  success &= task.reach_cartesian_pose(place_pose_horiz)
  
  success &= task.reach_gripper_position(1.0) 
  time.sleep(0.5)

  rospy.loginfo("Step 7: Retracting")
  success &= task.reach_cartesian_pose(pre_place_horizontal)
  task.arm_group.set_named_target("home")
  task.arm_group.go(wait=True)

  if success:
    rospy.loginfo("--- ALL TASKS COMPLETED SUCCESSFULLY ---")
  else:
    rospy.logerr("--- TASK ENCOUNTERED ERRORS ---")

if __name__ == '__main__':
  main()