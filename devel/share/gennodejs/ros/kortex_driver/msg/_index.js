
"use strict";

let KortexError = require('./KortexError.js');
let ApiOptions = require('./ApiOptions.js');
let SubErrorCodes = require('./SubErrorCodes.js');
let ErrorCodes = require('./ErrorCodes.js');
let CustomDataSelection = require('./CustomDataSelection.js');
let AxisPosition = require('./AxisPosition.js');
let CoggingFeedforwardModeInformation = require('./CoggingFeedforwardModeInformation.js');
let PositionCommand = require('./PositionCommand.js');
let TorqueOffset = require('./TorqueOffset.js');
let LoopSelection = require('./LoopSelection.js');
let StepResponse = require('./StepResponse.js');
let RampResponse = require('./RampResponse.js');
let FrequencyResponse = require('./FrequencyResponse.js');
let ActuatorConfig_ControlModeInformation = require('./ActuatorConfig_ControlModeInformation.js');
let ControlLoopSelection = require('./ControlLoopSelection.js');
let CoggingFeedforwardMode = require('./CoggingFeedforwardMode.js');
let ControlLoop = require('./ControlLoop.js');
let ActuatorConfig_SafetyLimitType = require('./ActuatorConfig_SafetyLimitType.js');
let ActuatorConfig_ServiceVersion = require('./ActuatorConfig_ServiceVersion.js');
let VectorDriveParameters = require('./VectorDriveParameters.js');
let AxisOffsets = require('./AxisOffsets.js');
let CommandMode = require('./CommandMode.js');
let ActuatorConfig_ControlMode = require('./ActuatorConfig_ControlMode.js');
let Servoing = require('./Servoing.js');
let CustomDataIndex = require('./CustomDataIndex.js');
let CommandModeInformation = require('./CommandModeInformation.js');
let EncoderDerivativeParameters = require('./EncoderDerivativeParameters.js');
let TorqueCalibration = require('./TorqueCalibration.js');
let ControlLoopParameters = require('./ControlLoopParameters.js');
let SafetyIdentifierBankA = require('./SafetyIdentifierBankA.js');
let ActuatorCyclic_MessageId = require('./ActuatorCyclic_MessageId.js');
let ActuatorCyclic_CustomData = require('./ActuatorCyclic_CustomData.js');
let ActuatorCyclic_Feedback = require('./ActuatorCyclic_Feedback.js');
let CommandFlags = require('./CommandFlags.js');
let ActuatorCyclic_ServiceVersion = require('./ActuatorCyclic_ServiceVersion.js');
let ActuatorCyclic_Command = require('./ActuatorCyclic_Command.js');
let StatusFlags = require('./StatusFlags.js');
let OperatingModeInformation = require('./OperatingModeInformation.js');
let MapGroupList = require('./MapGroupList.js');
let FactoryNotification = require('./FactoryNotification.js');
let SequenceList = require('./SequenceList.js');
let AngularWaypoint = require('./AngularWaypoint.js');
let CommunicationInterfaceConfiguration = require('./CommunicationInterfaceConfiguration.js');
let IPv4Information = require('./IPv4Information.js');
let AppendActionInformation = require('./AppendActionInformation.js');
let WristDigitalInputIdentifier = require('./WristDigitalInputIdentifier.js');
let SequenceTaskConfiguration = require('./SequenceTaskConfiguration.js');
let MapList = require('./MapList.js');
let ControllerList = require('./ControllerList.js');
let JointNavigationDirection = require('./JointNavigationDirection.js');
let TrajectoryErrorType = require('./TrajectoryErrorType.js');
let Base_RotationMatrix = require('./Base_RotationMatrix.js');
let Twist = require('./Twist.js');
let Base_ServiceVersion = require('./Base_ServiceVersion.js');
let TrajectoryErrorIdentifier = require('./TrajectoryErrorIdentifier.js');
let JointTrajectoryConstraintType = require('./JointTrajectoryConstraintType.js');
let AdvancedSequenceHandle = require('./AdvancedSequenceHandle.js');
let Timeout = require('./Timeout.js');
let BridgeResult = require('./BridgeResult.js');
let WifiConfiguration = require('./WifiConfiguration.js');
let BluetoothEnableState = require('./BluetoothEnableState.js');
let SequenceTasksRange = require('./SequenceTasksRange.js');
let GripperCommand = require('./GripperCommand.js');
let GpioBehavior = require('./GpioBehavior.js');
let WifiInformationList = require('./WifiInformationList.js');
let Base_RotationMatrixRow = require('./Base_RotationMatrixRow.js');
let WifiConfigurationList = require('./WifiConfigurationList.js');
let SystemTime = require('./SystemTime.js');
let GpioPinPropertyFlags = require('./GpioPinPropertyFlags.js');
let ConfigurationChangeNotification = require('./ConfigurationChangeNotification.js');
let UserEvent = require('./UserEvent.js');
let Base_JointSpeeds = require('./Base_JointSpeeds.js');
let ProtectionZoneHandle = require('./ProtectionZoneHandle.js');
let ActionEvent = require('./ActionEvent.js');
let ControllerBehavior = require('./ControllerBehavior.js');
let Map = require('./Map.js');
let SequenceTasksPair = require('./SequenceTasksPair.js');
let MapGroupHandle = require('./MapGroupHandle.js');
let GpioAction = require('./GpioAction.js');
let SwitchControlMapping = require('./SwitchControlMapping.js');
let PreComputedJointTrajectoryElement = require('./PreComputedJointTrajectoryElement.js');
let TrajectoryInfo = require('./TrajectoryInfo.js');
let OperatingMode = require('./OperatingMode.js');
let Xbox360DigitalInputIdentifier = require('./Xbox360DigitalInputIdentifier.js');
let RobotEvent = require('./RobotEvent.js');
let SequenceTasksConfiguration = require('./SequenceTasksConfiguration.js');
let Point = require('./Point.js');
let Action = require('./Action.js');
let BridgeIdentifier = require('./BridgeIdentifier.js');
let BridgeList = require('./BridgeList.js');
let Base_ControlModeInformation = require('./Base_ControlModeInformation.js');
let Admittance = require('./Admittance.js');
let NetworkNotification = require('./NetworkNotification.js');
let UserProfileList = require('./UserProfileList.js');
let ConstrainedJointAngle = require('./ConstrainedJointAngle.js');
let BackupEvent = require('./BackupEvent.js');
let TrajectoryInfoType = require('./TrajectoryInfoType.js');
let JointsLimitationsList = require('./JointsLimitationsList.js');
let Base_CapSenseConfig = require('./Base_CapSenseConfig.js');
let ControllerConfigurationList = require('./ControllerConfigurationList.js');
let CartesianWaypoint = require('./CartesianWaypoint.js');
let JointLimitation = require('./JointLimitation.js');
let AdmittanceMode = require('./AdmittanceMode.js');
let NavigationDirection = require('./NavigationDirection.js');
let Base_CapSenseMode = require('./Base_CapSenseMode.js');
let LimitationType = require('./LimitationType.js');
let KinematicTrajectoryConstraints = require('./KinematicTrajectoryConstraints.js');
let MappingHandle = require('./MappingHandle.js');
let GpioPinConfiguration = require('./GpioPinConfiguration.js');
let ControllerState = require('./ControllerState.js');
let JointAngle = require('./JointAngle.js');
let GripperRequest = require('./GripperRequest.js');
let TwistLimitation = require('./TwistLimitation.js');
let ChangeTwist = require('./ChangeTwist.js');
let ConstrainedOrientation = require('./ConstrainedOrientation.js');
let ProtectionZoneNotification = require('./ProtectionZoneNotification.js');
let NetworkType = require('./NetworkType.js');
let Base_GpioConfiguration = require('./Base_GpioConfiguration.js');
let SequenceHandle = require('./SequenceHandle.js');
let JointTorque = require('./JointTorque.js');
let EmergencyStop = require('./EmergencyStop.js');
let MapGroup = require('./MapGroup.js');
let ActuatorInformation = require('./ActuatorInformation.js');
let WifiSecurityType = require('./WifiSecurityType.js');
let RobotEventNotificationList = require('./RobotEventNotificationList.js');
let UserProfile = require('./UserProfile.js');
let FirmwareComponentVersion = require('./FirmwareComponentVersion.js');
let Mapping = require('./Mapping.js');
let WaypointValidationReport = require('./WaypointValidationReport.js');
let ControllerEventType = require('./ControllerEventType.js');
let CartesianSpeed = require('./CartesianSpeed.js');
let WrenchMode = require('./WrenchMode.js');
let PreComputedJointTrajectory = require('./PreComputedJointTrajectory.js');
let ServoingModeNotification = require('./ServoingModeNotification.js');
let ProtectionZone = require('./ProtectionZone.js');
let Faults = require('./Faults.js');
let Wrench = require('./Wrench.js');
let CartesianTrajectoryConstraint_type = require('./CartesianTrajectoryConstraint_type.js');
let MapEvent_events = require('./MapEvent_events.js');
let MappingInfoNotificationList = require('./MappingInfoNotificationList.js');
let Base_SafetyIdentifier = require('./Base_SafetyIdentifier.js');
let SequenceInformation = require('./SequenceInformation.js');
let TrajectoryContinuityMode = require('./TrajectoryContinuityMode.js');
let TrajectoryErrorReport = require('./TrajectoryErrorReport.js');
let BridgeStatus = require('./BridgeStatus.js');
let ShapeType = require('./ShapeType.js');
let WrenchCommand = require('./WrenchCommand.js');
let ConfigurationChangeNotificationList = require('./ConfigurationChangeNotificationList.js');
let ControllerNotificationList = require('./ControllerNotificationList.js');
let ServoingMode = require('./ServoingMode.js');
let TransformationMatrix = require('./TransformationMatrix.js');
let Delay = require('./Delay.js');
let BridgeType = require('./BridgeType.js');
let SignalQuality = require('./SignalQuality.js');
let ActionList = require('./ActionList.js');
let SequenceInfoNotification = require('./SequenceInfoNotification.js');
let ActivateMapHandle = require('./ActivateMapHandle.js');
let UserList = require('./UserList.js');
let ControllerConfiguration = require('./ControllerConfiguration.js');
let SoundType = require('./SoundType.js');
let TransformationRow = require('./TransformationRow.js');
let LedState = require('./LedState.js');
let TrajectoryErrorElement = require('./TrajectoryErrorElement.js');
let Gen3GpioPinId = require('./Gen3GpioPinId.js');
let FirmwareBundleVersions = require('./FirmwareBundleVersions.js');
let ControllerEvent = require('./ControllerEvent.js');
let ControllerElementHandle_identifier = require('./ControllerElementHandle_identifier.js');
let ControllerNotification_state = require('./ControllerNotification_state.js');
let ConstrainedPosition = require('./ConstrainedPosition.js');
let ConstrainedPose = require('./ConstrainedPose.js');
let CartesianLimitationList = require('./CartesianLimitationList.js');
let ChangeWrench = require('./ChangeWrench.js');
let JointAngles = require('./JointAngles.js');
let CartesianLimitation = require('./CartesianLimitation.js');
let NetworkEvent = require('./NetworkEvent.js');
let EventIdSequenceInfoNotification = require('./EventIdSequenceInfoNotification.js');
let RequestedActionType = require('./RequestedActionType.js');
let CartesianTrajectoryConstraint = require('./CartesianTrajectoryConstraint.js');
let IKData = require('./IKData.js');
let ConfigurationChangeNotification_configuration_change = require('./ConfigurationChangeNotification_configuration_change.js');
let ControllerType = require('./ControllerType.js');
let Action_action_parameters = require('./Action_action_parameters.js');
let ControllerInputType = require('./ControllerInputType.js');
let GripperMode = require('./GripperMode.js');
let ActionType = require('./ActionType.js');
let SequenceTaskHandle = require('./SequenceTaskHandle.js');
let PasswordChange = require('./PasswordChange.js');
let Gripper = require('./Gripper.js');
let RFConfiguration = require('./RFConfiguration.js');
let SnapshotType = require('./SnapshotType.js');
let UserNotificationList = require('./UserNotificationList.js');
let Base_Stop = require('./Base_Stop.js');
let RobotEventNotification = require('./RobotEventNotification.js');
let ProtectionZoneList = require('./ProtectionZoneList.js');
let ArmStateNotification = require('./ArmStateNotification.js');
let IPv4Configuration = require('./IPv4Configuration.js');
let Pose = require('./Pose.js');
let SafetyEvent = require('./SafetyEvent.js');
let SequenceInfoNotificationList = require('./SequenceInfoNotificationList.js');
let WrenchLimitation = require('./WrenchLimitation.js');
let FullIPv4Configuration = require('./FullIPv4Configuration.js');
let JointSpeed = require('./JointSpeed.js');
let SequenceTask = require('./SequenceTask.js');
let BridgeConfig = require('./BridgeConfig.js');
let WifiInformation = require('./WifiInformation.js');
let ConstrainedJointAngles = require('./ConstrainedJointAngles.js');
let ControllerElementHandle = require('./ControllerElementHandle.js');
let GpioConfigurationList = require('./GpioConfigurationList.js');
let JointTrajectoryConstraint = require('./JointTrajectoryConstraint.js');
let MappingInfoNotification = require('./MappingInfoNotification.js');
let FullUserProfile = require('./FullUserProfile.js');
let GpioEvent = require('./GpioEvent.js');
let MapElement = require('./MapElement.js');
let BridgePortConfig = require('./BridgePortConfig.js');
let OperatingModeNotificationList = require('./OperatingModeNotificationList.js');
let MapEvent = require('./MapEvent.js');
let WaypointList = require('./WaypointList.js');
let ActionNotification = require('./ActionNotification.js');
let Base_ControlMode = require('./Base_ControlMode.js');
let FactoryEvent = require('./FactoryEvent.js');
let ControllerHandle = require('./ControllerHandle.js');
let WifiEnableState = require('./WifiEnableState.js');
let ActionNotificationList = require('./ActionNotificationList.js');
let ServoingModeInformation = require('./ServoingModeInformation.js');
let JointTorques = require('./JointTorques.js');
let Orientation = require('./Orientation.js');
let Snapshot = require('./Snapshot.js');
let TwistCommand = require('./TwistCommand.js');
let ControllerElementEventType = require('./ControllerElementEventType.js');
let ActionHandle = require('./ActionHandle.js');
let NetworkNotificationList = require('./NetworkNotificationList.js');
let Xbox360AnalogInputIdentifier = require('./Xbox360AnalogInputIdentifier.js');
let ControllerConfigurationMode = require('./ControllerConfigurationMode.js');
let ControlModeNotificationList = require('./ControlModeNotificationList.js');
let ProtectionZoneInformation = require('./ProtectionZoneInformation.js');
let UserNotification = require('./UserNotification.js');
let Sequence = require('./Sequence.js');
let GpioCommand = require('./GpioCommand.js');
let ProtectionZoneNotificationList = require('./ProtectionZoneNotificationList.js');
let Waypoint_type_of_waypoint = require('./Waypoint_type_of_waypoint.js');
let Base_ControlModeNotification = require('./Base_ControlModeNotification.js');
let SequenceTasks = require('./SequenceTasks.js');
let Base_Position = require('./Base_Position.js');
let ProtectionZoneEvent = require('./ProtectionZoneEvent.js');
let ChangeJointSpeeds = require('./ChangeJointSpeeds.js');
let Query = require('./Query.js');
let SafetyNotificationList = require('./SafetyNotificationList.js');
let ControllerNotification = require('./ControllerNotification.js');
let MappingList = require('./MappingList.js');
let Waypoint = require('./Waypoint.js');
let ConfigurationNotificationEvent = require('./ConfigurationNotificationEvent.js');
let Ssid = require('./Ssid.js');
let MapHandle = require('./MapHandle.js');
let Finger = require('./Finger.js');
let ActionExecutionState = require('./ActionExecutionState.js');
let ZoneShape = require('./ZoneShape.js');
let NetworkHandle = require('./NetworkHandle.js');
let ControllerElementState = require('./ControllerElementState.js');
let WifiEncryptionType = require('./WifiEncryptionType.js');
let OperatingModeNotification = require('./OperatingModeNotification.js');
let ArmStateInformation = require('./ArmStateInformation.js');
let ServoingModeNotificationList = require('./ServoingModeNotificationList.js');
let ActuatorCommand = require('./ActuatorCommand.js');
let BaseCyclic_CustomData = require('./BaseCyclic_CustomData.js');
let BaseCyclic_Command = require('./BaseCyclic_Command.js');
let ActuatorCustomData = require('./ActuatorCustomData.js');
let ActuatorFeedback = require('./ActuatorFeedback.js');
let BaseCyclic_ServiceVersion = require('./BaseCyclic_ServiceVersion.js');
let BaseFeedback = require('./BaseFeedback.js');
let BaseCyclic_Feedback = require('./BaseCyclic_Feedback.js');
let ArmState = require('./ArmState.js');
let DeviceHandle = require('./DeviceHandle.js');
let NotificationHandle = require('./NotificationHandle.js');
let CartesianReferenceFrame = require('./CartesianReferenceFrame.js');
let CountryCodeIdentifier = require('./CountryCodeIdentifier.js');
let Empty = require('./Empty.js');
let UARTSpeed = require('./UARTSpeed.js');
let NotificationOptions = require('./NotificationOptions.js');
let UARTDeviceIdentification = require('./UARTDeviceIdentification.js');
let NotificationType = require('./NotificationType.js');
let SafetyStatusValue = require('./SafetyStatusValue.js');
let Connection = require('./Connection.js');
let Unit = require('./Unit.js');
let SafetyHandle = require('./SafetyHandle.js');
let UserProfileHandle = require('./UserProfileHandle.js');
let SafetyNotification = require('./SafetyNotification.js');
let CountryCode = require('./CountryCode.js');
let DeviceTypes = require('./DeviceTypes.js');
let Permission = require('./Permission.js');
let UARTParity = require('./UARTParity.js');
let UARTStopBits = require('./UARTStopBits.js');
let Timestamp = require('./Timestamp.js');
let UARTWordLength = require('./UARTWordLength.js');
let UARTConfiguration = require('./UARTConfiguration.js');
let LinearTwist = require('./LinearTwist.js');
let DesiredSpeeds = require('./DesiredSpeeds.js');
let CartesianTransform = require('./CartesianTransform.js');
let ToolConfiguration = require('./ToolConfiguration.js');
let ControlConfig_JointSpeeds = require('./ControlConfig_JointSpeeds.js');
let GravityVector = require('./GravityVector.js');
let ControlConfig_ControlMode = require('./ControlConfig_ControlMode.js');
let ControlConfig_Position = require('./ControlConfig_Position.js');
let JointAccelerationSoftLimits = require('./JointAccelerationSoftLimits.js');
let ControlConfig_ServiceVersion = require('./ControlConfig_ServiceVersion.js');
let KinematicLimitsList = require('./KinematicLimitsList.js');
let JointSpeedSoftLimits = require('./JointSpeedSoftLimits.js');
let CartesianReferenceFrameInfo = require('./CartesianReferenceFrameInfo.js');
let TwistAngularSoftLimit = require('./TwistAngularSoftLimit.js');
let ControlConfigurationEvent = require('./ControlConfigurationEvent.js');
let ControlConfig_ControlModeInformation = require('./ControlConfig_ControlModeInformation.js');
let KinematicLimits = require('./KinematicLimits.js');
let ControlConfigurationNotification = require('./ControlConfigurationNotification.js');
let TwistLinearSoftLimit = require('./TwistLinearSoftLimit.js');
let ControlConfig_ControlModeNotification = require('./ControlConfig_ControlModeNotification.js');
let PayloadInformation = require('./PayloadInformation.js');
let AngularTwist = require('./AngularTwist.js');
let SafetyThreshold = require('./SafetyThreshold.js');
let SafetyConfiguration = require('./SafetyConfiguration.js');
let CalibrationResult = require('./CalibrationResult.js');
let DeviceConfig_CapSenseMode = require('./DeviceConfig_CapSenseMode.js');
let PartNumber = require('./PartNumber.js');
let DeviceConfig_SafetyLimitType = require('./DeviceConfig_SafetyLimitType.js');
let DeviceType = require('./DeviceType.js');
let DeviceConfig_ServiceVersion = require('./DeviceConfig_ServiceVersion.js');
let BootloaderVersion = require('./BootloaderVersion.js');
let CalibrationStatus = require('./CalibrationStatus.js');
let SafetyStatus = require('./SafetyStatus.js');
let SerialNumber = require('./SerialNumber.js');
let CalibrationParameter_value = require('./CalibrationParameter_value.js');
let PowerOnSelfTestResult = require('./PowerOnSelfTestResult.js');
let CalibrationElement = require('./CalibrationElement.js');
let PartNumberRevision = require('./PartNumberRevision.js');
let SafetyConfigurationList = require('./SafetyConfigurationList.js');
let ModelNumber = require('./ModelNumber.js');
let RunModes = require('./RunModes.js');
let CalibrationParameter = require('./CalibrationParameter.js');
let SafetyInformationList = require('./SafetyInformationList.js');
let MACAddress = require('./MACAddress.js');
let CapSenseRegister = require('./CapSenseRegister.js');
let RebootRqst = require('./RebootRqst.js');
let DeviceConfig_CapSenseConfig = require('./DeviceConfig_CapSenseConfig.js');
let RunMode = require('./RunMode.js');
let SafetyInformation = require('./SafetyInformation.js');
let Calibration = require('./Calibration.js');
let FirmwareVersion = require('./FirmwareVersion.js');
let SafetyEnable = require('./SafetyEnable.js');
let CalibrationItem = require('./CalibrationItem.js');
let IPv4Settings = require('./IPv4Settings.js');
let DeviceHandles = require('./DeviceHandles.js');
let DeviceManager_ServiceVersion = require('./DeviceManager_ServiceVersion.js');
let GripperConfig_SafetyIdentifier = require('./GripperConfig_SafetyIdentifier.js');
let RobotiqGripperStatusFlags = require('./RobotiqGripperStatusFlags.js');
let MotorFeedback = require('./MotorFeedback.js');
let CustomDataUnit = require('./CustomDataUnit.js');
let GripperCyclic_CustomData = require('./GripperCyclic_CustomData.js');
let GripperCyclic_ServiceVersion = require('./GripperCyclic_ServiceVersion.js');
let GripperCyclic_Command = require('./GripperCyclic_Command.js');
let GripperCyclic_MessageId = require('./GripperCyclic_MessageId.js');
let MotorCommand = require('./MotorCommand.js');
let GripperCyclic_Feedback = require('./GripperCyclic_Feedback.js');
let I2CData = require('./I2CData.js');
let I2CConfiguration = require('./I2CConfiguration.js');
let UARTPortId = require('./UARTPortId.js');
let GPIOMode = require('./GPIOMode.js');
let I2CDevice = require('./I2CDevice.js');
let I2CDeviceAddressing = require('./I2CDeviceAddressing.js');
let I2CReadRegisterParameter = require('./I2CReadRegisterParameter.js');
let I2CDeviceIdentification = require('./I2CDeviceIdentification.js');
let GPIOState = require('./GPIOState.js');
let InterconnectConfig_ServiceVersion = require('./InterconnectConfig_ServiceVersion.js');
let InterconnectConfig_GPIOConfiguration = require('./InterconnectConfig_GPIOConfiguration.js');
let GPIOPull = require('./GPIOPull.js');
let GPIOValue = require('./GPIOValue.js');
let I2CRegisterAddressSize = require('./I2CRegisterAddressSize.js');
let GPIOIdentifier = require('./GPIOIdentifier.js');
let I2CMode = require('./I2CMode.js');
let EthernetDuplex = require('./EthernetDuplex.js');
let InterconnectConfig_SafetyIdentifier = require('./InterconnectConfig_SafetyIdentifier.js');
let GPIOIdentification = require('./GPIOIdentification.js');
let EthernetDevice = require('./EthernetDevice.js');
let I2CWriteRegisterParameter = require('./I2CWriteRegisterParameter.js');
let I2CReadParameter = require('./I2CReadParameter.js');
let EthernetSpeed = require('./EthernetSpeed.js');
let I2CWriteParameter = require('./I2CWriteParameter.js');
let EthernetDeviceIdentification = require('./EthernetDeviceIdentification.js');
let EthernetConfiguration = require('./EthernetConfiguration.js');
let InterconnectCyclic_CustomData_tool_customData = require('./InterconnectCyclic_CustomData_tool_customData.js');
let InterconnectCyclic_Command_tool_command = require('./InterconnectCyclic_Command_tool_command.js');
let InterconnectCyclic_Feedback_tool_feedback = require('./InterconnectCyclic_Feedback_tool_feedback.js');
let InterconnectCyclic_Command = require('./InterconnectCyclic_Command.js');
let InterconnectCyclic_MessageId = require('./InterconnectCyclic_MessageId.js');
let InterconnectCyclic_Feedback = require('./InterconnectCyclic_Feedback.js');
let InterconnectCyclic_CustomData = require('./InterconnectCyclic_CustomData.js');
let InterconnectCyclic_ServiceVersion = require('./InterconnectCyclic_ServiceVersion.js');
let CompleteProductConfiguration = require('./CompleteProductConfiguration.js');
let VisionModuleType = require('./VisionModuleType.js');
let BaseType = require('./BaseType.js');
let ArmLaterality = require('./ArmLaterality.js');
let EndEffectorType = require('./EndEffectorType.js');
let BrakeType = require('./BrakeType.js');
let ModelId = require('./ModelId.js');
let InterfaceModuleType = require('./InterfaceModuleType.js');
let WristType = require('./WristType.js');
let ProductConfigurationEndEffectorType = require('./ProductConfigurationEndEffectorType.js');
let Option = require('./Option.js');
let VisionConfig_ServiceVersion = require('./VisionConfig_ServiceVersion.js');
let OptionInformation = require('./OptionInformation.js');
let VisionConfig_RotationMatrix = require('./VisionConfig_RotationMatrix.js');
let FocusAction = require('./FocusAction.js');
let VisionNotification = require('./VisionNotification.js');
let TranslationVector = require('./TranslationVector.js');
let OptionIdentifier = require('./OptionIdentifier.js');
let DistortionCoefficients = require('./DistortionCoefficients.js');
let Sensor = require('./Sensor.js');
let SensorFocusAction = require('./SensorFocusAction.js');
let ManualFocus = require('./ManualFocus.js');
let SensorFocusAction_action_parameters = require('./SensorFocusAction_action_parameters.js');
let FrameRate = require('./FrameRate.js');
let ExtrinsicParameters = require('./ExtrinsicParameters.js');
let SensorIdentifier = require('./SensorIdentifier.js');
let BitRate = require('./BitRate.js');
let Resolution = require('./Resolution.js');
let IntrinsicProfileIdentifier = require('./IntrinsicProfileIdentifier.js');
let IntrinsicParameters = require('./IntrinsicParameters.js');
let VisionEvent = require('./VisionEvent.js');
let OptionValue = require('./OptionValue.js');
let VisionConfig_RotationMatrixRow = require('./VisionConfig_RotationMatrixRow.js');
let FocusPoint = require('./FocusPoint.js');
let SensorSettings = require('./SensorSettings.js');
let FollowCartesianTrajectoryFeedback = require('./FollowCartesianTrajectoryFeedback.js');
let FollowCartesianTrajectoryAction = require('./FollowCartesianTrajectoryAction.js');
let FollowCartesianTrajectoryActionFeedback = require('./FollowCartesianTrajectoryActionFeedback.js');
let FollowCartesianTrajectoryActionResult = require('./FollowCartesianTrajectoryActionResult.js');
let FollowCartesianTrajectoryActionGoal = require('./FollowCartesianTrajectoryActionGoal.js');
let FollowCartesianTrajectoryResult = require('./FollowCartesianTrajectoryResult.js');
let FollowCartesianTrajectoryGoal = require('./FollowCartesianTrajectoryGoal.js');

module.exports = {
  KortexError: KortexError,
  ApiOptions: ApiOptions,
  SubErrorCodes: SubErrorCodes,
  ErrorCodes: ErrorCodes,
  CustomDataSelection: CustomDataSelection,
  AxisPosition: AxisPosition,
  CoggingFeedforwardModeInformation: CoggingFeedforwardModeInformation,
  PositionCommand: PositionCommand,
  TorqueOffset: TorqueOffset,
  LoopSelection: LoopSelection,
  StepResponse: StepResponse,
  RampResponse: RampResponse,
  FrequencyResponse: FrequencyResponse,
  ActuatorConfig_ControlModeInformation: ActuatorConfig_ControlModeInformation,
  ControlLoopSelection: ControlLoopSelection,
  CoggingFeedforwardMode: CoggingFeedforwardMode,
  ControlLoop: ControlLoop,
  ActuatorConfig_SafetyLimitType: ActuatorConfig_SafetyLimitType,
  ActuatorConfig_ServiceVersion: ActuatorConfig_ServiceVersion,
  VectorDriveParameters: VectorDriveParameters,
  AxisOffsets: AxisOffsets,
  CommandMode: CommandMode,
  ActuatorConfig_ControlMode: ActuatorConfig_ControlMode,
  Servoing: Servoing,
  CustomDataIndex: CustomDataIndex,
  CommandModeInformation: CommandModeInformation,
  EncoderDerivativeParameters: EncoderDerivativeParameters,
  TorqueCalibration: TorqueCalibration,
  ControlLoopParameters: ControlLoopParameters,
  SafetyIdentifierBankA: SafetyIdentifierBankA,
  ActuatorCyclic_MessageId: ActuatorCyclic_MessageId,
  ActuatorCyclic_CustomData: ActuatorCyclic_CustomData,
  ActuatorCyclic_Feedback: ActuatorCyclic_Feedback,
  CommandFlags: CommandFlags,
  ActuatorCyclic_ServiceVersion: ActuatorCyclic_ServiceVersion,
  ActuatorCyclic_Command: ActuatorCyclic_Command,
  StatusFlags: StatusFlags,
  OperatingModeInformation: OperatingModeInformation,
  MapGroupList: MapGroupList,
  FactoryNotification: FactoryNotification,
  SequenceList: SequenceList,
  AngularWaypoint: AngularWaypoint,
  CommunicationInterfaceConfiguration: CommunicationInterfaceConfiguration,
  IPv4Information: IPv4Information,
  AppendActionInformation: AppendActionInformation,
  WristDigitalInputIdentifier: WristDigitalInputIdentifier,
  SequenceTaskConfiguration: SequenceTaskConfiguration,
  MapList: MapList,
  ControllerList: ControllerList,
  JointNavigationDirection: JointNavigationDirection,
  TrajectoryErrorType: TrajectoryErrorType,
  Base_RotationMatrix: Base_RotationMatrix,
  Twist: Twist,
  Base_ServiceVersion: Base_ServiceVersion,
  TrajectoryErrorIdentifier: TrajectoryErrorIdentifier,
  JointTrajectoryConstraintType: JointTrajectoryConstraintType,
  AdvancedSequenceHandle: AdvancedSequenceHandle,
  Timeout: Timeout,
  BridgeResult: BridgeResult,
  WifiConfiguration: WifiConfiguration,
  BluetoothEnableState: BluetoothEnableState,
  SequenceTasksRange: SequenceTasksRange,
  GripperCommand: GripperCommand,
  GpioBehavior: GpioBehavior,
  WifiInformationList: WifiInformationList,
  Base_RotationMatrixRow: Base_RotationMatrixRow,
  WifiConfigurationList: WifiConfigurationList,
  SystemTime: SystemTime,
  GpioPinPropertyFlags: GpioPinPropertyFlags,
  ConfigurationChangeNotification: ConfigurationChangeNotification,
  UserEvent: UserEvent,
  Base_JointSpeeds: Base_JointSpeeds,
  ProtectionZoneHandle: ProtectionZoneHandle,
  ActionEvent: ActionEvent,
  ControllerBehavior: ControllerBehavior,
  Map: Map,
  SequenceTasksPair: SequenceTasksPair,
  MapGroupHandle: MapGroupHandle,
  GpioAction: GpioAction,
  SwitchControlMapping: SwitchControlMapping,
  PreComputedJointTrajectoryElement: PreComputedJointTrajectoryElement,
  TrajectoryInfo: TrajectoryInfo,
  OperatingMode: OperatingMode,
  Xbox360DigitalInputIdentifier: Xbox360DigitalInputIdentifier,
  RobotEvent: RobotEvent,
  SequenceTasksConfiguration: SequenceTasksConfiguration,
  Point: Point,
  Action: Action,
  BridgeIdentifier: BridgeIdentifier,
  BridgeList: BridgeList,
  Base_ControlModeInformation: Base_ControlModeInformation,
  Admittance: Admittance,
  NetworkNotification: NetworkNotification,
  UserProfileList: UserProfileList,
  ConstrainedJointAngle: ConstrainedJointAngle,
  BackupEvent: BackupEvent,
  TrajectoryInfoType: TrajectoryInfoType,
  JointsLimitationsList: JointsLimitationsList,
  Base_CapSenseConfig: Base_CapSenseConfig,
  ControllerConfigurationList: ControllerConfigurationList,
  CartesianWaypoint: CartesianWaypoint,
  JointLimitation: JointLimitation,
  AdmittanceMode: AdmittanceMode,
  NavigationDirection: NavigationDirection,
  Base_CapSenseMode: Base_CapSenseMode,
  LimitationType: LimitationType,
  KinematicTrajectoryConstraints: KinematicTrajectoryConstraints,
  MappingHandle: MappingHandle,
  GpioPinConfiguration: GpioPinConfiguration,
  ControllerState: ControllerState,
  JointAngle: JointAngle,
  GripperRequest: GripperRequest,
  TwistLimitation: TwistLimitation,
  ChangeTwist: ChangeTwist,
  ConstrainedOrientation: ConstrainedOrientation,
  ProtectionZoneNotification: ProtectionZoneNotification,
  NetworkType: NetworkType,
  Base_GpioConfiguration: Base_GpioConfiguration,
  SequenceHandle: SequenceHandle,
  JointTorque: JointTorque,
  EmergencyStop: EmergencyStop,
  MapGroup: MapGroup,
  ActuatorInformation: ActuatorInformation,
  WifiSecurityType: WifiSecurityType,
  RobotEventNotificationList: RobotEventNotificationList,
  UserProfile: UserProfile,
  FirmwareComponentVersion: FirmwareComponentVersion,
  Mapping: Mapping,
  WaypointValidationReport: WaypointValidationReport,
  ControllerEventType: ControllerEventType,
  CartesianSpeed: CartesianSpeed,
  WrenchMode: WrenchMode,
  PreComputedJointTrajectory: PreComputedJointTrajectory,
  ServoingModeNotification: ServoingModeNotification,
  ProtectionZone: ProtectionZone,
  Faults: Faults,
  Wrench: Wrench,
  CartesianTrajectoryConstraint_type: CartesianTrajectoryConstraint_type,
  MapEvent_events: MapEvent_events,
  MappingInfoNotificationList: MappingInfoNotificationList,
  Base_SafetyIdentifier: Base_SafetyIdentifier,
  SequenceInformation: SequenceInformation,
  TrajectoryContinuityMode: TrajectoryContinuityMode,
  TrajectoryErrorReport: TrajectoryErrorReport,
  BridgeStatus: BridgeStatus,
  ShapeType: ShapeType,
  WrenchCommand: WrenchCommand,
  ConfigurationChangeNotificationList: ConfigurationChangeNotificationList,
  ControllerNotificationList: ControllerNotificationList,
  ServoingMode: ServoingMode,
  TransformationMatrix: TransformationMatrix,
  Delay: Delay,
  BridgeType: BridgeType,
  SignalQuality: SignalQuality,
  ActionList: ActionList,
  SequenceInfoNotification: SequenceInfoNotification,
  ActivateMapHandle: ActivateMapHandle,
  UserList: UserList,
  ControllerConfiguration: ControllerConfiguration,
  SoundType: SoundType,
  TransformationRow: TransformationRow,
  LedState: LedState,
  TrajectoryErrorElement: TrajectoryErrorElement,
  Gen3GpioPinId: Gen3GpioPinId,
  FirmwareBundleVersions: FirmwareBundleVersions,
  ControllerEvent: ControllerEvent,
  ControllerElementHandle_identifier: ControllerElementHandle_identifier,
  ControllerNotification_state: ControllerNotification_state,
  ConstrainedPosition: ConstrainedPosition,
  ConstrainedPose: ConstrainedPose,
  CartesianLimitationList: CartesianLimitationList,
  ChangeWrench: ChangeWrench,
  JointAngles: JointAngles,
  CartesianLimitation: CartesianLimitation,
  NetworkEvent: NetworkEvent,
  EventIdSequenceInfoNotification: EventIdSequenceInfoNotification,
  RequestedActionType: RequestedActionType,
  CartesianTrajectoryConstraint: CartesianTrajectoryConstraint,
  IKData: IKData,
  ConfigurationChangeNotification_configuration_change: ConfigurationChangeNotification_configuration_change,
  ControllerType: ControllerType,
  Action_action_parameters: Action_action_parameters,
  ControllerInputType: ControllerInputType,
  GripperMode: GripperMode,
  ActionType: ActionType,
  SequenceTaskHandle: SequenceTaskHandle,
  PasswordChange: PasswordChange,
  Gripper: Gripper,
  RFConfiguration: RFConfiguration,
  SnapshotType: SnapshotType,
  UserNotificationList: UserNotificationList,
  Base_Stop: Base_Stop,
  RobotEventNotification: RobotEventNotification,
  ProtectionZoneList: ProtectionZoneList,
  ArmStateNotification: ArmStateNotification,
  IPv4Configuration: IPv4Configuration,
  Pose: Pose,
  SafetyEvent: SafetyEvent,
  SequenceInfoNotificationList: SequenceInfoNotificationList,
  WrenchLimitation: WrenchLimitation,
  FullIPv4Configuration: FullIPv4Configuration,
  JointSpeed: JointSpeed,
  SequenceTask: SequenceTask,
  BridgeConfig: BridgeConfig,
  WifiInformation: WifiInformation,
  ConstrainedJointAngles: ConstrainedJointAngles,
  ControllerElementHandle: ControllerElementHandle,
  GpioConfigurationList: GpioConfigurationList,
  JointTrajectoryConstraint: JointTrajectoryConstraint,
  MappingInfoNotification: MappingInfoNotification,
  FullUserProfile: FullUserProfile,
  GpioEvent: GpioEvent,
  MapElement: MapElement,
  BridgePortConfig: BridgePortConfig,
  OperatingModeNotificationList: OperatingModeNotificationList,
  MapEvent: MapEvent,
  WaypointList: WaypointList,
  ActionNotification: ActionNotification,
  Base_ControlMode: Base_ControlMode,
  FactoryEvent: FactoryEvent,
  ControllerHandle: ControllerHandle,
  WifiEnableState: WifiEnableState,
  ActionNotificationList: ActionNotificationList,
  ServoingModeInformation: ServoingModeInformation,
  JointTorques: JointTorques,
  Orientation: Orientation,
  Snapshot: Snapshot,
  TwistCommand: TwistCommand,
  ControllerElementEventType: ControllerElementEventType,
  ActionHandle: ActionHandle,
  NetworkNotificationList: NetworkNotificationList,
  Xbox360AnalogInputIdentifier: Xbox360AnalogInputIdentifier,
  ControllerConfigurationMode: ControllerConfigurationMode,
  ControlModeNotificationList: ControlModeNotificationList,
  ProtectionZoneInformation: ProtectionZoneInformation,
  UserNotification: UserNotification,
  Sequence: Sequence,
  GpioCommand: GpioCommand,
  ProtectionZoneNotificationList: ProtectionZoneNotificationList,
  Waypoint_type_of_waypoint: Waypoint_type_of_waypoint,
  Base_ControlModeNotification: Base_ControlModeNotification,
  SequenceTasks: SequenceTasks,
  Base_Position: Base_Position,
  ProtectionZoneEvent: ProtectionZoneEvent,
  ChangeJointSpeeds: ChangeJointSpeeds,
  Query: Query,
  SafetyNotificationList: SafetyNotificationList,
  ControllerNotification: ControllerNotification,
  MappingList: MappingList,
  Waypoint: Waypoint,
  ConfigurationNotificationEvent: ConfigurationNotificationEvent,
  Ssid: Ssid,
  MapHandle: MapHandle,
  Finger: Finger,
  ActionExecutionState: ActionExecutionState,
  ZoneShape: ZoneShape,
  NetworkHandle: NetworkHandle,
  ControllerElementState: ControllerElementState,
  WifiEncryptionType: WifiEncryptionType,
  OperatingModeNotification: OperatingModeNotification,
  ArmStateInformation: ArmStateInformation,
  ServoingModeNotificationList: ServoingModeNotificationList,
  ActuatorCommand: ActuatorCommand,
  BaseCyclic_CustomData: BaseCyclic_CustomData,
  BaseCyclic_Command: BaseCyclic_Command,
  ActuatorCustomData: ActuatorCustomData,
  ActuatorFeedback: ActuatorFeedback,
  BaseCyclic_ServiceVersion: BaseCyclic_ServiceVersion,
  BaseFeedback: BaseFeedback,
  BaseCyclic_Feedback: BaseCyclic_Feedback,
  ArmState: ArmState,
  DeviceHandle: DeviceHandle,
  NotificationHandle: NotificationHandle,
  CartesianReferenceFrame: CartesianReferenceFrame,
  CountryCodeIdentifier: CountryCodeIdentifier,
  Empty: Empty,
  UARTSpeed: UARTSpeed,
  NotificationOptions: NotificationOptions,
  UARTDeviceIdentification: UARTDeviceIdentification,
  NotificationType: NotificationType,
  SafetyStatusValue: SafetyStatusValue,
  Connection: Connection,
  Unit: Unit,
  SafetyHandle: SafetyHandle,
  UserProfileHandle: UserProfileHandle,
  SafetyNotification: SafetyNotification,
  CountryCode: CountryCode,
  DeviceTypes: DeviceTypes,
  Permission: Permission,
  UARTParity: UARTParity,
  UARTStopBits: UARTStopBits,
  Timestamp: Timestamp,
  UARTWordLength: UARTWordLength,
  UARTConfiguration: UARTConfiguration,
  LinearTwist: LinearTwist,
  DesiredSpeeds: DesiredSpeeds,
  CartesianTransform: CartesianTransform,
  ToolConfiguration: ToolConfiguration,
  ControlConfig_JointSpeeds: ControlConfig_JointSpeeds,
  GravityVector: GravityVector,
  ControlConfig_ControlMode: ControlConfig_ControlMode,
  ControlConfig_Position: ControlConfig_Position,
  JointAccelerationSoftLimits: JointAccelerationSoftLimits,
  ControlConfig_ServiceVersion: ControlConfig_ServiceVersion,
  KinematicLimitsList: KinematicLimitsList,
  JointSpeedSoftLimits: JointSpeedSoftLimits,
  CartesianReferenceFrameInfo: CartesianReferenceFrameInfo,
  TwistAngularSoftLimit: TwistAngularSoftLimit,
  ControlConfigurationEvent: ControlConfigurationEvent,
  ControlConfig_ControlModeInformation: ControlConfig_ControlModeInformation,
  KinematicLimits: KinematicLimits,
  ControlConfigurationNotification: ControlConfigurationNotification,
  TwistLinearSoftLimit: TwistLinearSoftLimit,
  ControlConfig_ControlModeNotification: ControlConfig_ControlModeNotification,
  PayloadInformation: PayloadInformation,
  AngularTwist: AngularTwist,
  SafetyThreshold: SafetyThreshold,
  SafetyConfiguration: SafetyConfiguration,
  CalibrationResult: CalibrationResult,
  DeviceConfig_CapSenseMode: DeviceConfig_CapSenseMode,
  PartNumber: PartNumber,
  DeviceConfig_SafetyLimitType: DeviceConfig_SafetyLimitType,
  DeviceType: DeviceType,
  DeviceConfig_ServiceVersion: DeviceConfig_ServiceVersion,
  BootloaderVersion: BootloaderVersion,
  CalibrationStatus: CalibrationStatus,
  SafetyStatus: SafetyStatus,
  SerialNumber: SerialNumber,
  CalibrationParameter_value: CalibrationParameter_value,
  PowerOnSelfTestResult: PowerOnSelfTestResult,
  CalibrationElement: CalibrationElement,
  PartNumberRevision: PartNumberRevision,
  SafetyConfigurationList: SafetyConfigurationList,
  ModelNumber: ModelNumber,
  RunModes: RunModes,
  CalibrationParameter: CalibrationParameter,
  SafetyInformationList: SafetyInformationList,
  MACAddress: MACAddress,
  CapSenseRegister: CapSenseRegister,
  RebootRqst: RebootRqst,
  DeviceConfig_CapSenseConfig: DeviceConfig_CapSenseConfig,
  RunMode: RunMode,
  SafetyInformation: SafetyInformation,
  Calibration: Calibration,
  FirmwareVersion: FirmwareVersion,
  SafetyEnable: SafetyEnable,
  CalibrationItem: CalibrationItem,
  IPv4Settings: IPv4Settings,
  DeviceHandles: DeviceHandles,
  DeviceManager_ServiceVersion: DeviceManager_ServiceVersion,
  GripperConfig_SafetyIdentifier: GripperConfig_SafetyIdentifier,
  RobotiqGripperStatusFlags: RobotiqGripperStatusFlags,
  MotorFeedback: MotorFeedback,
  CustomDataUnit: CustomDataUnit,
  GripperCyclic_CustomData: GripperCyclic_CustomData,
  GripperCyclic_ServiceVersion: GripperCyclic_ServiceVersion,
  GripperCyclic_Command: GripperCyclic_Command,
  GripperCyclic_MessageId: GripperCyclic_MessageId,
  MotorCommand: MotorCommand,
  GripperCyclic_Feedback: GripperCyclic_Feedback,
  I2CData: I2CData,
  I2CConfiguration: I2CConfiguration,
  UARTPortId: UARTPortId,
  GPIOMode: GPIOMode,
  I2CDevice: I2CDevice,
  I2CDeviceAddressing: I2CDeviceAddressing,
  I2CReadRegisterParameter: I2CReadRegisterParameter,
  I2CDeviceIdentification: I2CDeviceIdentification,
  GPIOState: GPIOState,
  InterconnectConfig_ServiceVersion: InterconnectConfig_ServiceVersion,
  InterconnectConfig_GPIOConfiguration: InterconnectConfig_GPIOConfiguration,
  GPIOPull: GPIOPull,
  GPIOValue: GPIOValue,
  I2CRegisterAddressSize: I2CRegisterAddressSize,
  GPIOIdentifier: GPIOIdentifier,
  I2CMode: I2CMode,
  EthernetDuplex: EthernetDuplex,
  InterconnectConfig_SafetyIdentifier: InterconnectConfig_SafetyIdentifier,
  GPIOIdentification: GPIOIdentification,
  EthernetDevice: EthernetDevice,
  I2CWriteRegisterParameter: I2CWriteRegisterParameter,
  I2CReadParameter: I2CReadParameter,
  EthernetSpeed: EthernetSpeed,
  I2CWriteParameter: I2CWriteParameter,
  EthernetDeviceIdentification: EthernetDeviceIdentification,
  EthernetConfiguration: EthernetConfiguration,
  InterconnectCyclic_CustomData_tool_customData: InterconnectCyclic_CustomData_tool_customData,
  InterconnectCyclic_Command_tool_command: InterconnectCyclic_Command_tool_command,
  InterconnectCyclic_Feedback_tool_feedback: InterconnectCyclic_Feedback_tool_feedback,
  InterconnectCyclic_Command: InterconnectCyclic_Command,
  InterconnectCyclic_MessageId: InterconnectCyclic_MessageId,
  InterconnectCyclic_Feedback: InterconnectCyclic_Feedback,
  InterconnectCyclic_CustomData: InterconnectCyclic_CustomData,
  InterconnectCyclic_ServiceVersion: InterconnectCyclic_ServiceVersion,
  CompleteProductConfiguration: CompleteProductConfiguration,
  VisionModuleType: VisionModuleType,
  BaseType: BaseType,
  ArmLaterality: ArmLaterality,
  EndEffectorType: EndEffectorType,
  BrakeType: BrakeType,
  ModelId: ModelId,
  InterfaceModuleType: InterfaceModuleType,
  WristType: WristType,
  ProductConfigurationEndEffectorType: ProductConfigurationEndEffectorType,
  Option: Option,
  VisionConfig_ServiceVersion: VisionConfig_ServiceVersion,
  OptionInformation: OptionInformation,
  VisionConfig_RotationMatrix: VisionConfig_RotationMatrix,
  FocusAction: FocusAction,
  VisionNotification: VisionNotification,
  TranslationVector: TranslationVector,
  OptionIdentifier: OptionIdentifier,
  DistortionCoefficients: DistortionCoefficients,
  Sensor: Sensor,
  SensorFocusAction: SensorFocusAction,
  ManualFocus: ManualFocus,
  SensorFocusAction_action_parameters: SensorFocusAction_action_parameters,
  FrameRate: FrameRate,
  ExtrinsicParameters: ExtrinsicParameters,
  SensorIdentifier: SensorIdentifier,
  BitRate: BitRate,
  Resolution: Resolution,
  IntrinsicProfileIdentifier: IntrinsicProfileIdentifier,
  IntrinsicParameters: IntrinsicParameters,
  VisionEvent: VisionEvent,
  OptionValue: OptionValue,
  VisionConfig_RotationMatrixRow: VisionConfig_RotationMatrixRow,
  FocusPoint: FocusPoint,
  SensorSettings: SensorSettings,
  FollowCartesianTrajectoryFeedback: FollowCartesianTrajectoryFeedback,
  FollowCartesianTrajectoryAction: FollowCartesianTrajectoryAction,
  FollowCartesianTrajectoryActionFeedback: FollowCartesianTrajectoryActionFeedback,
  FollowCartesianTrajectoryActionResult: FollowCartesianTrajectoryActionResult,
  FollowCartesianTrajectoryActionGoal: FollowCartesianTrajectoryActionGoal,
  FollowCartesianTrajectoryResult: FollowCartesianTrajectoryResult,
  FollowCartesianTrajectoryGoal: FollowCartesianTrajectoryGoal,
};
