# Kinova Gen3 Lite: ROS Pick & Place and Kinematics Modeling 

## Overview
This repository contains the source code for the Lab tasks and the Final Project of the **Robot Motion and Control** course. 

The project is built on **ROS (Robot Operating System)** and focuses on the modeling, motion planning, and control of the **Kinova gen_3_lite** robotic arm. It includes both theoretical kinematics modeling and practical automated pick-and-place implementations.

## Project Structure & Core Files

### 1. Robot Control 
* **`pick_and_place.py`**
  This is the main execution script. It interfaces with the ROS network to control the `gen_3_lite` robot arm, executing a complete, automated picking and placing task (including trajectory planning and gripper control).

### 2. Robot Modeling (Kinematics) 
These files contain the underlying mathematical models of the robot arm:
* **`DH.py`**
  Implements the **Forward Kinematics** based on the Denavit-Hartenberg (DH) parameters specific to the Kinova gen_3_lite 6-DOF arm.
* **`jacobian.py`**
  Calculates the **Jacobian Matrix** for the robot. This is essential for velocity kinematics, mapping joint velocities to end-effector velocities, and singularity analysis.

## Environment & Dependencies
* **OS:** Ubuntu 20.04 (Recommended)
* **Framework:** ROS Noetic
* **Hardware/Simulation:** Kinova `gen_3_lite` robot arm
* **Core Dependency:** [ros_kortex package](https://github.com/Kinovarobotics/ros_kortex/tree/noetic-devel)

## How to Run
*Ensure you have launched the Kinova robot driver or Gazebo simulation before running the scripts.*

1. Launch the robot base environment (using `ros_kortex`):
   ```bash
   roslaunch kortex_driver kortex_driver.launch arm:=gen3_lite ...
