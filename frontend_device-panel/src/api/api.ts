// src/api/api.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';  // Update with the backend URL

export const addDevice = async (device: { deviceName: string; serialNumber: string }) => {
  return await axios.post(`${API_BASE_URL}/devices`, device);
};

export const updateDevice = async (id: string, device: { deviceName: string; serialNumber: string }) => {
  return await axios.put(`${API_BASE_URL}/devices/${id}`, device);
};

export const fetchDevices = async () => {
  const response = await axios.get(`${API_BASE_URL}/devices`);
  return response.data;
};

export const deleteDevice = async (id: string) => {
  return await axios.delete(`${API_BASE_URL}/devices/${id}`);
};
