import { useState, useEffect } from "react";

const UseDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({});

  useEffect(() => {
    setDeviceInfo({
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      colorDepth: window.screen.colorDepth,
    });
  }, []);

  return deviceInfo;
};

const DeviceInfo = () => {
  const deviceInfo = UseDeviceInfo();

  return (
    <div>
      <h2>Device Information</h2>
      <pre>{JSON.stringify(deviceInfo, null, 2)}</pre>
    </div>
  );
};

export default DeviceInfo;
