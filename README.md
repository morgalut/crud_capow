Here’s a simple, detailed explanation of your project and instructions on how to test only the server, in a README.md format:


# Device Management Backend Panel

This is a simple Node.js backend project for managing devices. It uses **Express** for routing and **MongoDB** for storing device data. You can perform basic CRUD (Create, Read, Update, Delete) operations on devices.

## Features:
- **Get all devices**: Retrieve a list of all devices.
- **Add a new device**: Add a device by providing a name and serial number.
- **Update a device**: Update the name or serial number of an existing device.
- **Delete a device**: Remove a device by its ID.

## Prerequisites
Before running this project, make sure you have:
- **Node.js** installed (version 16.x or later).
- **MongoDB** installed locally or running in Docker.

## How to run the project

### 1. Clone the project
```bash
git clone [https://github.com/yourusername/backend_device-panel.git](https://github.com/morgalut/crud_capow.git)
cd backend_device-panel
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
npm run dev
```
This command will start the server on **http://localhost:5000**. You should see a message in the terminal saying:
```
Server running on port 5000
Connected to MongoDB
```

### How to test the server

You can use `curl` commands to interact with the API. Here are some simple examples:

### 1. Get all devices
To get the list of devices:
```bash
curl -X GET http://localhost:5000/api/devices
```

### 2. Add a new device
To add a new device, you can use the following command. Make sure to replace the device name and serial number with your desired values:
```bash
curl -X POST http://localhost:5000/api/devices ^
     -H "Content-Type: application/json" ^
     -d "{\"deviceName\": \"Device 1\", \"serialNumber\": \"12345\"}"
```

### 3. Update a device
To update an existing device (replace `<device_id>` with the ID of the device you want to update):
```bash
curl -X PUT http://localhost:5000/api/devices/<device_id> ^
     -H "Content-Type: application/json" ^
     -d "{\"deviceName\": \"Updated Device\", \"serialNumber\": \"54321\"}"
```

### 4. Delete a device
To delete a device (replace `<device_id>` with the ID of the device you want to delete):
```bash
curl -X DELETE http://localhost:5000/api/devices/<device_id>
```

### How to Test in Simple Terms
1. **Get Devices**: This shows you a list of all devices currently in the database.
2. **Add Device**: This lets you create a new device by specifying a name and serial number.
3. **Update Device**: This allows you to change a device’s name or serial number by its ID.
4. **Delete Device**: This removes a device from the database using its ID.

## Project Structure
```
backend_device-panel/
├── src/
│   ├── app.ts           # Main entry point of the server
│   ├── routes/
│   │   └── device.routes.ts   # Routes for handling device CRUD operations
│   └── models/
│       └── device.model.ts    # Device model schema for MongoDB
├── package.json         # Node.js dependencies and scripts
├── Dockerfile           # Docker setup for the app
├── docker-compose.yml   # Docker Compose setup for app and MongoDB
└── readme.md            # This readme file
```

## Docker Setup
If you prefer using Docker, the project also includes a `Dockerfile` and `docker-compose.yml` to easily set up the app along with a MongoDB container.

### Run with Docker:
1. **Build and run the Docker containers:**
   ```bash
   docker-compose up --build
   ```

2. The server will be running at `http://localhost:5000` and MongoDB will be accessible at `mongodb://localhost:27017/Copaw`.

## Conclusion
This project provides a simple backend for managing devices. Feel free to extend it with additional features or integrate it with a frontend interface.
