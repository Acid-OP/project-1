import { Chessboard } from 'react-chessboard';
import { Sidebar } from '../components/Sidebar';
import { customStyles } from '../components/customStyles';
import { customPieceStyles } from '../components/CustomPieceStyle';

export function Landing() {
  return (
    <div className="bg-[#302e2b] h-screen flex flex-col justify-center"> 
    <div className="w-0.5 h-0.5 bg-white">
    </div>
        <div className="flex items-start p-32 ml-32">
      <Sidebar />
          <Chessboard
            position="start"
            pieceSize={80}
            customSquareStyles={customStyles}
            customPieces={customPieceStyles}
          />
        </div>
    </div>
  );
}
