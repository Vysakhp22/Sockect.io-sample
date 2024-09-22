import { createServer } from "http";
import express from 'express';
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);

const io = new Server(server);

app.use(express.static(path.resolve('./public')));

app.get('/', (req, res) => {
    res.sendFile(`/public/index.html`, (err) => {
        if (err) {
            console.log(err);
        }
    });
});

// Socket.io
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
       io.emit('message', msg);
    });
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});