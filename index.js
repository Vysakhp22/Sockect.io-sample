"use strict";
var http_1 = require("http");
var express = require("express");
var app = express();
var server = (0, http_1.createServer)(app);
app.use(express.static('/public'));
server.listen(3000, function () {
    console.log("Server is running on port 3000");
});
module.exports = app;
