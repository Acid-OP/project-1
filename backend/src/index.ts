import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface ExtendedWebSocket extends WebSocket {
  roomId?: string;
  username?: string;
}

interface User {
  socket: ExtendedWebSocket;
  roomId: string;
  username: string;
}

let rooms: { [roomId: string]: User[] } = {};

wss.on("connection", (socket: ExtendedWebSocket) => {
  socket.on("message", (message: string) => {
    const data = JSON.parse(message);
    const { type, payload } = data;

    if (type === "join") {
      const { roomId, username } = payload;

      if (!rooms[roomId]) {
        rooms[roomId] = [];
      }

      socket.roomId = roomId;
      socket.username = username;
      rooms[roomId].push({ socket, roomId, username });

      console.log(`${username} joined room: ${roomId}`);
    }

    if (type === "chat") {
      const { message: chatMessage } = payload;
      const room = rooms[socket.roomId || ""];

      if (room) {
        const sender = room.find((user) => user.socket === socket);
        const senderName = sender ? sender.username : "Unknown";

        room.forEach((user) => {
          user.socket.send(
            JSON.stringify({ username: senderName, message: chatMessage })
          );
        });
      }
    }
  });
});
