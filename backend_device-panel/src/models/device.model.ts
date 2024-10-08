import mongoose, { Schema, Document } from 'mongoose';

interface IDevice extends Document {
  deviceName: string;
  serialNumber: string;
  creationDate: Date;
}

const DeviceSchema: Schema = new Schema({
  deviceName: { type: String, required: true },
  serialNumber: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
});

export default mongoose.model<IDevice>('Device', DeviceSchema);
