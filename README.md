# 🖥️ Electron SvelteKit App

A simple **Electron** application built with **SvelteKit** for the frontend and **Express.js** for the backend.

---

## 🚀 Features
- **Electron** for desktop application
- **SvelteKit** for frontend (SPA mode)
- **Express.js** for backend API
- **Built-in routing & state management**
- **Simple Ping API test (`/api/ping`)**
- This project only ensures testing in a **Windows environment**

---

## 📦 Installation

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/onyx-ken/electron_svelt_express_build_demo.git
cd electron_svelt_express_build_demo
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run in Development Mode

```sh
npm run start:dev
```
- This command starts the frontend (SvelteKit), backend (Express.js), and Electron application simultaneously.
- The Electron app window should open automatically.


### 4️⃣ Build for Production

```sh
npm run build
```

- After the build is complete, the executable file (.exe) will be located in the dist_electron/ folder.
- Run the .exe file to launch the application.

## 📌 API Test

### You can test the backend API using:

```sh
curl http://localhost:4000/api/ping
```

### Expected Response:

```json
{
    "message": "pong",
    "timestamp": "2025-02-11T12:34:56.789Z"
}
```

## 📜 License
### This project is licensed under the MIT License.
