import { useEffect, useState } from "react";
import Chessboard from "../components/ChessBoard"
import { useSocket } from "../hooks/useSocket";
import { GAME_OVER, INIT_GAME, MOVE } from "./Home";
import { Chess } from "chess.js";

const Game = () => {
  const socket = useSocket();
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (e) => {
      const message = JSON.parse(e.data);
      switch (e.data) {
        case INIT_GAME:
          setChess(new Chess());
          setBoard(chess.board());
          break;
        case MOVE:
          const move = message.payload;
          chess.move(move);
          break;
        case GAME_OVER:
          break;
        default:
          break;
      }
    };
  }, [socket]);

  return (
    <div className=" h-svh bg-[#DDD0BB] px-6 lg:px-16 flex items-center justify-center gap-20">
      <Chessboard board={board} />
    </div>
  )
}

export default Game