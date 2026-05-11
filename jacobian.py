#import library file
import math
import numpy as np
# import rospy
# from sensor_msgs.msg import JointState
# from geometry_msgs.msg import Point
import numpy as np


#define a class for individual robot link
class Link:
    #define initialization function
    def __init__(self, dh_params):
        self.dh_params_ = dh_params

    #define transformation matrix function based on DH parameters
    def transformation_matrix(self, theta):
        alpha = self.dh_params_[0] # parameter α
        a = self.dh_params_[1] # parameter a
        d = self.dh_params_[2] # parameter d
        theta = theta+self.dh_params_[3]# parameter offset θ
        st = math.sin(theta) # sin(θ)
        ct = math.cos(theta) # cos(θ)
        sa = math.sin(alpha) # sin(α)
        ca = math.cos(alpha) # cos(α)
        #transformation matrix calculation
        trans = np.array([[ct, -st, 0, a],
                          [st*ca, ct * ca, - sa, -sa * d],
                          [st*sa, ct * sa,   ca,  ca * d],
                          [0, 0, 0, 1]])
        return trans

    @staticmethod# declare a static method
    #define basic jacobian function for a specific link
    def basic_jacobian(trans, ee_pos):
        pos = np.array(
            [trans[0, 3], trans[1, 3], trans[2, 3]]) # extract position from matrix
        z_axis = np.array(
            [trans[0, 2], trans[1, 2], trans[2, 2]]) # extract z-axis from matrix

        # calculate jacobian column: [z x (p_ee - p_i); z]
        basic_jacobian = np.hstack(
            (np.cross(z_axis, ee_pos - pos), z_axis))
        return basic_jacobian

#define robot arm class containing multiple links
class NLinkArm:

    #initialize list of links by storing dh parameters for each joint
    def __init__(self, dh_params_list) -> None:
        self.link_list = []
        for i in range(len(dh_params_list)):
            self.link_list.append(Link(dh_params_list[i]))

    #calculate full kinematic chain transformation from base to end-effector
    def transformation_matrix(self, thetas):
        trans = np.identity(4)# start with identity matrix
        for i in range(len(self.link_list)):
            # accumulate individual link transformations (T = T0_1 * T1_2 * ... * Tn-1_n)
            trans = np.dot(
                trans, self.link_list[i].transformation_matrix(thetas[i]))
        return trans

    #calculate end effector position and orientation
    def forward_kinematics(self, thetas):
        trans = self.transformation_matrix(thetas)
        x = trans[0, 3] # ee x-coordinate
        y = trans[1, 3] # ee y-coordinate
        z = trans[2, 3] # ee z-coordinate
        
        alpha, beta, gamma = self.euler_angle(thetas) # calculate Euler angles
        return [x, y, z, alpha, beta, gamma]

    #calculate Euler angles from transformation matrix (ZY Z-convention)
    def euler_angle(self, thetas):
        trans = self.transformation_matrix(thetas)

        alpha = math.atan2(trans[1][2], trans[0][2]) # alpha angle
        # handle Euler angle discontinuity/multi-solution range for alpha
        if not (-math.pi / 2 <= alpha <= math.pi / 2):
            alpha = math.atan2(trans[1][2], trans[0][2]) + math.pi
        if not (-math.pi / 2 <= alpha <= math.pi / 2):
            alpha = math.atan2(trans[1][2], trans[0][2]) - math.pi
        beta = math.atan2(
            trans[0][2] * math.cos(alpha) + trans[1][2] * math.sin(alpha),
            trans[2][2]) # beta angle
        gamma = math.atan2(
            -trans[0][0] * math.sin(alpha) + trans[1][0] * math.cos(alpha),
            -trans[0][1] * math.sin(alpha) + trans[1][1] * math.cos(alpha)) # gamma angle

        return alpha, beta, gamma

    #calculate inverse kinematics using Jacobian pseudo-inverse
    def inverse_kinematics(self, ref_ee_pose):
        thetas = [0, 0, 0, 0, 0, 0] # initial joint guess
        for cnt in range(500): # iterative loop
            ee_pose = self.forward_kinematics(thetas)
            diff_pose = np.array(ref_ee_pose) - ee_pose # pose error

            basic_jacobian_mat = self.basic_jacobian(thetas)
            alpha, beta, gamma = self.euler_angle(thetas)

            # Jacobian conversion matrix for ZYZ Euler angles
            # construct the analytical Jacobian to geometric Jacobian conversion matrix (K)
            # this maps the angular velocity of Euler angles to the angular velocity of the end-effector
            K_zyz = np.array(
                [[0, -math.sin(alpha), math.cos(alpha) * math.sin(beta)],
                 [0, math.cos(alpha), math.sin(alpha) * math.sin(beta)],
                 [1, 0, math.cos(beta)]])
            K_alpha = np.identity(6) # 6x6 identity matrix for full task space (pos + ori)
            K_alpha[3:, 3:] = K_zyz# map the rotation part using ZYZ transformation

            # update joint angles based on Jacobian inverse
            # compute joint velocity updates using pseudo-inverse of Jacobian (Damped Least Squares approach)
            # theta_dot = J_pinv * K * pose_error
            theta_dot = np.dot(
                np.dot(np.linalg.pinv(basic_jacobian_mat), K_alpha),
                np.array(diff_pose))
            thetas = thetas + theta_dot / 100.# apply incremental update with a scaling factor (step size)
        return thetas
    
    # calculate the full geometric Jacobian matrix (6xN)
    def basic_jacobian(self, thetas):
        ee_pos = self.forward_kinematics(thetas)[0:3] # target end-effector position
        basic_jacobian_mat = []
        trans = np.identity(4)
        for i in range(len(self.link_list)):
            # compute current joint position transformation relative to base
            trans = np.dot(
                trans, self.link_list[i].transformation_matrix(thetas[i]))
            # compute individual column of Jacobian and append to the list
            basic_jacobian_mat.append(
                self.link_list[i].basic_jacobian(trans, ee_pos))
        return np.array(basic_jacobian_mat).T # return transpose of column stack

#main execution block
if __name__ == "__main__":
    # rospy.init_node("jacobian_test") # initialize ros node
    # #define publishers
    # tool_pose_pub = rospy.Publisher("/tool_pose_cartesian",Point,queue_size=1)
    # tool_velocity_pub = rospy.Publisher("/tool_velocity_cartesian",Point,queue_size=1)
    # tool_force_pub = rospy.Publisher("/tool_force_cartesian",Point,queue_size=1)

    # #define DH parameters for robot
    # dh_params_list = np.array([[0, 0, 243.3/1000, 0],
    #                            [math.pi/2, 0, 10/1000, 0+math.pi/2],
    #                            [math.pi, 280/1000, 0, 0+math.pi/2],
    #                            [math.pi/2, 0, 245/1000, 0+math.pi/2],
    #                            [math.pi/2, 0, 57/1000, 0],
    #                            [-math.pi/2, 0, 235/1000, 0-math.pi/2]])
    # gen3_lite = NLinkArm(dh_params_list) # create robot instance
    # print(gen3_lite.forward_kinematics([0,0,0,0,0,0]))

    # #ros control loop
    # while not rospy.is_shutdown():
    #     feedback = rospy.wait_for_message("/my_gen3_lite/joint_states", JointState)
    #     thetas = feedback.position[0:6] # current joint positions
    #     velocities = feedback.velocity[0:6] # current joint velocities
    #     torques = feedback.effort[0:6] # current joint torques

    #     tool_pose = gen3_lite.forward_kinematics(thetas) # calc tool position
    #     J = gen3_lite.basic_jacobian(thetas) # calc jacobian
    #     tool_velocity = J.dot(velocities) # map joint velocity to cartesian
    #     tool_force = np.linalg.pinv(J.T).dot(torques) # map torque to cartesian force

    #     #package data into ROS messages
    #     tool_pose_msg = Point()
    #     tool_pose_msg.x, tool_pose_msg.y, tool_pose_msg.z = tool_pose[0:3]

    #     tool_velocity_msg = Point()
    #     tool_velocity_msg.x, tool_velocity_msg.y, tool_velocity_msg.z = tool_velocity[0:3]

    #     tool_force_msg = Point()
    #     tool_force_msg.x, tool_force_msg.y, tool_force_msg.z = tool_force[0:3]

    #     #publish messages
    #     tool_pose_pub.publish(tool_pose_msg)
    #     tool_velocity_pub.publish(tool_velocity_msg)
    #     tool_force_pub.publish(tool_force_msg)

    #     #print results
    #     print(f"joint position: {thetas}")
    #     print(f"joint velocity: {velocities}")
    #     print(f"joint torque: {torques}")

    #     print(f"tool position: {tool_pose}")
    #     print(f"tool velocity: {tool_velocity}")
    #     print(f"tool torque: {tool_force}")
    from jacobian import NLinkArm  # 假设你的类在 jacobian.py 中
    # 1. 定义与你 Lab5 一致的 DH 参数 (注意单位统一为米)
    dh_params_list = np.array([
        [0, 0, 0.2433, 0],
        [math.pi/2, 0, 0.01, math.pi/2],
        [math.pi, 0.28, 0, math.pi/2],
        [math.pi/2, 0, 0.245, math.pi/2],
        [math.pi/2, 0, 0.057, 0],
        [-math.pi/2, 0, 0.235, -math.pi/2]
    ])

    # 2. 初始化
    robot = NLinkArm(dh_params_list)

    # 3. 验证正运动学 (使用 zero_thetas)
    # 注意：你的 Lab5 代码中 t2, t3, t4 有 +90 度偏移，请确保 jacobian.py 里的 dh_params 包含了这些偏移
    test_thetas = [0, 0, 0, 0, 0, 0]
    pos = robot.forward_kinematics(test_thetas)
    print(f"End-effector position (mm): {np.array(pos[0:3]) * 1000}")

    # 4. 验证雅可比矩阵
    J = robot.basic_jacobian(test_thetas)
    print("Jacobian Matrix shape:", J.shape)
    print("Jacobian Matrix:\n", J)