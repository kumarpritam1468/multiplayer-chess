import { FaChess } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSocket } from "../hooks/useSocket";

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

const Home = () => {
  const socket = useSocket();
  return (
    <section className=" bg1 h-svh px-16 flex items-center justify-start">
        <div className=" flex flex-col gap-6 w-2/5 max-md:w-full">
          <h1 className="text-5xl font-bold">Play Chess Online</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum aspernatur voluptas totam dolore maxime amet quis tempora iure omnis distinctio.</p>


          <Link 
          to="/game" 
          className=" rounded-full bg-black px-6 py-2 text-white w-fit hover:bg-white hover:text-black border border-transparent hover:border-black transition-all duration-300 flex items-center gap-4 text-lg"
          onClick={() => socket?.send(JSON.stringify({ type: INIT_GAME }))}
          >
            <FaChess />
            Play now
          </Link>

        </div>
    </section>
  )
}

export default Home