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
    
    # We only have to move this joint because all others are mimic!
    gripper_joint = self.robot.get_joint(self.gripper_joint_name)
    gripper_max_absolute_pos = gripper_joint.max_bound()
    gripper_min_absolute_pos = gripper_joint.min_bound()
    try:
      val = gripper_joint.move(relative_position * (gripper_max_absolute_pos - gripper_min_absolute_pos) + gripper_min_absolute_pos, True)
      return val
    except:
      return False 

  def reach_cartesian_pose(self, pose):
    """移动到笛卡尔位姿"""
    self.arm_group.set_pose_target(pose)
    return self.arm_group.go(wait=True)

  def create_pose(self, x, y, z, roll, pitch, yaw):
    """从欧拉角创建 Pose 消息"""
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
  # 注意：z=0.02 非常接近桌面，仿真中请小心。
  pick_x, pick_y, pick_z = 0.4, 0.0, 0.02
  place_x, place_y, place_z = 0.35, 0.2, 0.01

  success = True

  # 1. 归位并打开夹爪
  rospy.loginfo("Step 1: Going Home and Opening Gripper")
  task.arm_group.set_named_target("home")
  success &= task.arm_group.go(wait=True)
  success &= task.reach_gripper_position(1.0) 

  # 2. 移动到抓取位上方 (竖直姿态)
  rospy.loginfo("Step 2: Moving to Pre-Pick position")
  pre_pick_pose = task.create_pose(pick_x, pick_y, pick_z + 0.1, pi, 0, 0)
  success &= task.reach_cartesian_pose(pre_pick_pose)

  # 3. 下降并抓取
  rospy.loginfo("Step 3: Vertical Picking")
  pick_pose = task.create_pose(pick_x, pick_y, pick_z, pi, 0, 0)
  success &= task.reach_cartesian_pose(pick_pose)
  time.sleep(0.5)
  success &= task.reach_gripper_position(0.25) # 闭合抓取

  # 4. 提升
  rospy.loginfo("Step 4: Lifting")
  success &= task.reach_cartesian_pose(pre_pick_pose)

  # 5. 移动到放置位上方 (依然保持竖直姿态移动，确保安全)
  rospy.loginfo("Step 5: Moving to Place position (Vertical)")
  pre_place_vertical = task.create_pose(place_x, place_y, place_z + 0.15, pi, 0, 0)
  success &= task.reach_cartesian_pose(pre_place_vertical)

  # --- 新增步骤：在空中变换姿态为水平 ---
  rospy.loginfo("Step 5.5: Re-orienting gripper to HORIZONTAL")
  # 将 Roll 从 pi 改为 pi/2，夹爪就会侧过来变成水平
  pre_place_horizontal = task.create_pose(place_x, place_y, place_z + 0.15, pi/2, 0, pi/4)
  success &= task.reach_cartesian_pose(pre_place_horizontal)

  # 6. 以水平姿态下降并放置
  rospy.loginfo("Step 6: Horizontal Placing")
  place_pose_horiz = task.create_pose(place_x, place_y, place_z, pi/2, 0, pi/4)
  success &= task.reach_cartesian_pose(place_pose_horiz)
  
  # 释放物体
  success &= task.reach_gripper_position(1.0) 
  time.sleep(0.5)

  # 7. 撤离
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