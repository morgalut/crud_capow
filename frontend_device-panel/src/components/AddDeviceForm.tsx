// src/components/AddDeviceForm.tsx
import React, { useState, useEffect } from 'react';
import { addDevice, updateDevice } from '../api/api';

interface AddDeviceFormProps {
  selectedDevice: {
    _id?: string;
    deviceName: string;
    serialNumber: string;
  } | null;
  onUpdateComplete: () => void;
}

const AddDeviceForm: React.FC<AddDeviceFormProps> = ({ selectedDevice, onUpdateComplete }) => {
  const [deviceName, setDeviceName] = useState('');
  const [serialNumber, setSerialNumber] = useState('');

  useEffect(() => {
    if (selectedDevice) {
      setDeviceName(selectedDevice.deviceName);
      setSerialNumber(selectedDevice.serialNumber);
    }
  }, [selectedDevice]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (deviceName && serialNumber) {
      if (selectedDevice && selectedDevice._id) {
        await updateDevice(selectedDevice._id, { deviceName, serialNumber });
      } else {
        await addDevice({ deviceName, serialNumber });
      }
      setDeviceName('');
      setSerialNumber('');
      onUpdateComplete(); // Refresh the device list
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Device Name:</label>
        <input value={deviceName} onChange={(e) => setDeviceName(e.target.value)} />
      </div>
      <div>
        <label>Serial Number:</label>
        <input value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} />
      </div>
      <button type="submit">{selectedDevice ? 'Update Device' : 'Add Device'}</button>
    </form>
  );
};

export default AddDeviceForm;
