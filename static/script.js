let socket;
let mediaRecorder;

function joinRoom() {
    const username = document.getElementById("username").value;
    const room = document.getElementById("room").value;
    socket = io();

    socket.emit("join", { username, room });

    // Receive audio from other users
    socket.on("voice", (data) => {
        console.log("Received audio:", data);
        const audioBlob = new Blob([new Uint8Array(data)], { type: 'audio/webm;codecs=opus' });
        const audio = new Audio(URL.createObjectURL(audioBlob));
        audio.play();
    });

    // Ask for mic permission
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm;codecs=opus' });

        mediaRecorder.ondataavailable = async e => {
            const arrayBuffer = await e.data.arrayBuffer();
            socket.emit("voice", { room: room, audio: Array.from(new Uint8Array(arrayBuffer)) });
        };

        const btn = document.getElementById("pttBtn");
        btn.disabled = false;

        // Desktop events
        btn.onmousedown = () => mediaRecorder.start();
        btn.onmouseup = () => mediaRecorder.stop();

        // Mobile events
        btn.ontouchstart = (e) => {
            e.preventDefault(); // prevent accidental scrolling
            mediaRecorder.start();
        };
        btn.ontouchend = (e) => {
            e.preventDefault();
            mediaRecorder.stop();
        };

    }).catch(err => {
        alert("Mic permission denied or not supported.");
        console.error("getUserMedia error:", err);
    });
}
