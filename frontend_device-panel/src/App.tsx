// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import DeviceList from './components/DeviceList';
import AddDeviceForm from './components/AddDeviceForm';

const App: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<{ _id?: string; deviceName: string; serialNumber: string } | null>(null);

  const handleEditDevice = (device: { _id: string; deviceName: string; serialNumber: string }) => {
    setSelectedDevice(device);
  };

  const handleUpdateComplete = () => {
    setSelectedDevice(null); // Reset the form after updating
  };

  return (
    <div className="App">
      <h1>Device Management Panel</h1>
      <AddDeviceForm selectedDevice={selectedDevice} onUpdateComplete={handleUpdateComplete} />
      <DeviceList onEditDevice={handleEditDevice} />
    </div>
  );
};

export default App;
