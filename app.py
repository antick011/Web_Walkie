import eventlet
eventlet.monkey_patch()

from flask import Flask, render_template
from flask_socketio import SocketIO, emit, join_room

# Set up Flask app with static and template folders
app = Flask(__name__, static_folder="static", template_folder="templates")

# Initialize SocketIO with eventlet support
socketio = SocketIO(app, cors_allowed_origins="*", async_mode='eventlet')

# Serve the homepage
@app.route("/")
def index():
    return render_template("index.html")

# Handle user joining a room
@socketio.on("join")
def on_join(data):
    username = data["username"]
    room = data["room"]
    join_room(room)
    print(f"{username} joined {room}")

# Handle voice data being sent to the room
@socketio.on("voice")
def handle_voice(data):
    room = data["room"]
    audio_list = data["audio"]  # Received as list of integers
    audio_bytes = bytes(audio_list)  # Convert to actual bytes

    # Emit audio to everyone in the room except the sender
    emit("voice", audio_bytes, room=room, include_self=False)

# Run the app
if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=5000, debug=True)
