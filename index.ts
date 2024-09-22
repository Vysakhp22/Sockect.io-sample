import { createServer } from "http";
import express from 'express';
import path from "path";

const app = express();
export = app;
const server = createServer(app);

app.use(express.static(path.resolve('./public')));

app.get('/', (req, res) => {
    res.sendFile(`/public/index.html`, (err) => {
        if (err) {
            console.log(err);
        }
    });
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});