# 📡 Walkie-Talkie Over Web (Python + Socket.IO)

A browser-based real-time voice communication system that works like a walkie-talkie — built with **Flask**, **Socket.IO**, and **JavaScript MediaRecorder API**.

> 🎤 Press and hold to talk — your voice gets streamed to others in the room instantly.

---

## 🚀 Features

- Join virtual rooms with a unique name
- Push-to-talk (Hold mic button to speak)
- Real-time voice broadcasting via WebSockets
- No install or Bluetooth needed — works over internet
- Clean, mobile-friendly UI

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python Flask + Flask-SocketIO
- **Real-Time:** WebSockets via `socket.io`
- **Audio Handling:** MediaRecorder API (Web)

---

## 📂 Project Structure

```
walkie-talkie-app/
│
├── app.py                  # Flask backend
├── requirements.txt        # Dependencies
├── templates/
│   └── index.html          # Frontend UI
├── static/
│   ├── style.css           # Custom styles
│   └── script.js           # Client-side logic
```

---

## ⚙️ Setup Instructions

### ✅ 1. Clone the repo

```bash
git clone https://github.com/yourusername/walkie-talkie-app.git
cd walkie-talkie-app
```

### ✅ 2. Create a virtual environment

```bash
python -m venv venv
source venv\Scripts\activate     
```

### ✅ 3. Install dependencies

```bash
pip install -r requirements.txt
```

> `requirements.txt` should contain:
```txt
flask
flask-socketio
eventlet
```

### ✅ 4. Run the server

```bash
python app.py
```

> Server will start at: [http://localhost:5000](http://localhost:5000)

---

## 🧪 How to Use

1. Open the app in **two or more browser windows or devices**
2. Enter your **name** and a **common room ID** (e.g., `room101`)
3. Click **Join Room**
4. Press and hold the 🎤 button to send voice
5. Others in the room will hear your audio in real-time

---

## 🔒 Notes

- Microphone access is required.
- Works best on **modern Chrome/Edge/Firefox**.
- Audio quality depends on your internet speed.