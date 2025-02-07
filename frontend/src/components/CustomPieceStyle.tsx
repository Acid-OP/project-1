export const customPieceStyles = {
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