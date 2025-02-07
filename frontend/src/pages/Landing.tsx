import { Chessboard } from 'react-chessboard';
import { Sidebar } from '../components/Sidebar';


export function Landing() {
    const customStyles = {
        a1: { backgroundColor: '#f3f4f6' },  // Light square
        h8: { backgroundColor: '#374151' },  // Dark square
        // You can apply more squares similarly
      };
      const customPieceStyles = {
        wP: ({ size, ...props }) => (
          <div
            style={{
              color: 'black',
              fontSize: `${size}px`, // Default size for pieces
              transform: 'scale(4)', // Double the size of the pieces
              transformOrigin: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}
            {...props}
          >
            ♙
          </div>
        ),
        bP: ({ size, ...props }) => (
          <div
            style={{
              color: 'black',
              fontSize: `${size}px`, // Default size for pieces
              transform: 'scale(3)', // Double the size of the pieces
              transformOrigin: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}
            {...props}
          >
            ♟
          </div>
        ),
        wN: ({ size, ...props }) => (
          <div
            style={{
              color: 'white',
              fontSize: `${size}px`, // Default size for pieces
              transform: 'scale(4)', // Double the size of the pieces
              transformOrigin: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}
            {...props}
          >
            ♘
          </div>
        ),
        bN: ({ size, ...props }) => (
          <div
            style={{
              color: 'black',
              fontSize: `${size}px`, // Default size for pieces
              transform: 'scale(4)', // Double the size of the pieces
              transformOrigin: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}
            {...props}
          >
            ♞
          </div>
        ),
      };
      
      
      
    return (
        <div className="bg-[#302e2b] h-screen flex">
            <Sidebar/>
            <div className="flex justify-center items-center min-h-screen">
      <div className="w-[200px] h-[500px]">
        <Chessboard      position="start"   pieceSize={80} // Standard piece size
        customSquareStyles={customStyles}
        customPieces={customPieceStyles}/>
      </div>
    </div>
    </div>

    )
}