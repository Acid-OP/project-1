import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface WebSocketMessage {
  type: "joinRoom" | "move" | "chat" | "gameStart";
  roomId?: string;
  username?: string;
  moveData?: {
    from: string;
    to: string;
  };
  message?: string;
}

type Room = {
  players: WebSocket[];
};

function broadcast(roomId: string, message: WebSocketMessage) {
  if (rooms[roomId]) {
    rooms[roomId].players.forEach((player) => {
      player.send(JSON.stringify(message));
    });
  }
}

const rooms: Record<string, Room> = {};

wss.on("connection", (ws: WebSocket) => {
  console.log("🔌 New WebSocket connection");

  ws.on("message", (message: string) => {
    try {
      const data: WebSocketMessage = JSON.parse(message);

      if (data.type === "joinRoom" && data.roomId) {
        const { roomId } = data;

        if (!rooms[roomId]) {
          rooms[roomId] = { players: [] };
        }

        if (rooms[roomId].players.length < 2) {
          rooms[roomId].players.push(ws);
          console.log(`👤 Player joined room: ${roomId}`);

          if (rooms[roomId].players.length === 2) {
            broadcast(roomId, { type: "gameStart", message: "Game is starting!" });
          }
        } else {
          ws.send(JSON.stringify({ type: "roomFull", message: "Room is full!" }));
        }
      }
    } catch (err) {
      console.error("Error parsing message:", err);
    }
  });

  ws.on("close", () => {
    console.log("❌ WebSocket disconnected");

    for (const roomId in rooms) {
      rooms[roomId].players = rooms[roomId].players.filter((player) => player !== ws);

      if (rooms[roomId].players.length === 0) {
        delete rooms[roomId];
      }
    }
  });
});
