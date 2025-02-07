import { Chessboard } from 'react-chessboard';
import { Sidebar } from '../components/Sidebar';
import { customStyles } from '../components/customStyles';
import { customPieceStyles } from '../components/CustomPieceStyle';
import { PlayerIcon } from '../components/PlayerIcon1';
import { ChessCardcomponent } from '../components/ChessCardcomponent';

export function Landing() {
  return (
    <div className=" h-screen flex flex-col justify-center"> 
    <Sidebar/>
    <ChessCardcomponent/>
    </div>
  );
}
