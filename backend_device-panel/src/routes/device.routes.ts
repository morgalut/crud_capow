import express from 'express';
import Device from '../models/device.model';

const router = express.Router();

// Get all devices
router.get('/devices', async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
});

// Add a new device
router.post('/devices', async (req, res) => {
  const { deviceName, serialNumber } = req.body;
  const newDevice = new Device({ deviceName, serialNumber });

  try {
    const savedDevice = await newDevice.save();
    res.status(201).json(savedDevice);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).json({ message: errorMessage });
  }
});

// Edit a device
router.put('/devices/:id', async (req, res) => {
  const { id } = req.params;
  const { deviceName, serialNumber } = req.body;

  try {
    const updatedDevice = await Device.findByIdAndUpdate(
      id,
      { deviceName, serialNumber },
      { new: true }
    );
    res.json(updatedDevice);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).json({ message: errorMessage });
  }
});

// Delete a device
router.delete('/devices/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Device.findByIdAndDelete(id);
    res.json({ message: 'Device deleted' });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ message: errorMessage });
  }
});

export default router;
