import { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { useSocket } from "../hooks/useSocket";
import { MOVE } from "../pages/Home";

const Chessboard = ({ board }: {
  board: ({
    square: Square,
    type: PieceSymbol,
    color: Color
  } | null)[][]
}) => {

  const socket = useSocket();
  const [from, setFrom] = useState<Square | null>(null);
  const [to, setTo] = useState<Square | null>(null);

  return (
    <div className="flex justify-center items-center h-fit bg-gray-800">
      <div className="grid grid-cols-8 grid-rows-8 size-96">
        {board.map((row, rowIndex) =>
          row.map((col, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-full h-full flex items-center justify-center ${((rowIndex + colIndex) % 2 === 0) ? 'bg-[#779556]' : 'bg-[#EBECD0]'}`}
              onClick={() => {
                if (!from) {
                  setFrom(col?.square!);
                } else {
                  setTo(col?.square!);
                  socket?.send(JSON.stringify({ type: MOVE, move: { from: from, to: to } }));
                }
              }}
            >
              {col ? col.type : ""}
            </div>
          )))}
      </div>
    </div>
  );
};

export default Chessboard;
