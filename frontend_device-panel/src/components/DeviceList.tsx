// src/components/DeviceList.tsx
import React, { useEffect, useState } from 'react';
import { fetchDevices, deleteDevice } from '../api/api';

interface Device {
  _id: string;
  deviceName: string;
  serialNumber: string;
  creationDate: string;
}

interface DeviceListProps {
  onEditDevice: (device: Device) => void;
}

const DeviceList: React.FC<DeviceListProps> = ({ onEditDevice }) => {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    const loadDevices = async () => {
      const fetchedDevices = await fetchDevices();
      setDevices(fetchedDevices);
    };
    loadDevices();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteDevice(id);
    setDevices(devices.filter(device => device._id !== id));
  };

  return (
    <div>
      <h1>Device List</h1>
      <table>
        <thead>
          <tr>
            <th>Device Name</th>
            <th>Serial Number</th>
            <th>Creation Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {devices.map(device => (
            <tr key={device._id}>
              <td>{device.deviceName}</td>
              <td>{device.serialNumber}</td>
              <td>{new Date(device.creationDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => onEditDevice(device)}>Edit</button>
                <button onClick={() => handleDelete(device._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceList;
