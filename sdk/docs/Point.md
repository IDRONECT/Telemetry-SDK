# TelemetryApi.Point

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lat** | **Number** | Latitude in floating decimals (e.g. 51.04433141367766) | 
**lng** | **Number** | Longitude in floating decimals (e.g. 3.7520202689333257) | 
**alt** | **Number** | WGS84 height | 
**aSpeed** | **Number** | Airspeed in m/s | [optional] 
**gSpeed** | **Number** | GroupSpeed in m/s | [optional] 
**ySpeed** | **Number** | Vertical (climb/descent) in m/s. Value should be negative for descent | [optional] 
**sats** | **Number** | Amount of satellites currently connected | [optional] 
**time** | **Number** | Epoch timestamp in ms. If not provided the timestamp will be the time of arrival of the data on the server | [optional] 
**yaw** | **Number** | Device yaw in degrees (-180 degrees &lt;&#x3D; yaw &lt;&#x3D; 180 degrees) | [optional] 
**pitch** | **Number** | Device pitch in degrees (-90 degrees &lt;&#x3D; pitch &lt;&#x3D; 90 degrees) | [optional] 
**roll** | **Number** | Device roll in degrees (-180 degrees &lt;&#x3D; roll &lt;&#x3D; 180 degrees) | [optional] 
**bearing** | **Number** | Bearing (0 degrees &lt;&#x3D; bearing &lt;&#x3D; 360 degrees) | [optional] 
**batt** | **Number** | Battery in % left | [optional] 
**hAcc** | **Number** | Horizontal accuracy of the device in meters | [optional] 
**vAcc** | **Number** | Vertical accuracy of the device in meters | [optional] 
**temp** | **Number** | Registered temperature in degrees Celcius of the battery or device in general | [optional] 
**volt** | **Number** | Current battery voltage of the battery/device | [optional] 
**metadata** | **Object** |  | [optional] 


