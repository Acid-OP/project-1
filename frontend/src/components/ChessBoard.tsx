import { Chessboard } from "react-chessboard";
import { PlayerIcon, Icon, Playername } from "./PlayerIcon";
import icon from "../Icons/icon.png";

export function ChessBoard() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Opponent */}
      <div className="flex justify-center">
        <PlayerIcon
          startIcon={<Icon src={icon} />}
          playername={<Playername text="Opponent" />}
          variant="opponent"
        />
      </div>

      {/* Chessboard */}
      <Chessboard />

      {/* Player */}
      <div className="flex justify-center">
        <PlayerIcon
          startIcon={<Icon src={icon} />}
          playername={<Playername text="Player1" />}
          variant="player"
        />
      </div>
    </div>
  );
}
