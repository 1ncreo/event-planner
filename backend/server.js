const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("./config/db");
const authRoutes = require("./routes/auth");
const eventRoutes = require("./routes/events");
const { Server } = require("socket.io");
const http = require("http");

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

// WebSocket setup
io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => console.log("A user disconnected"));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
