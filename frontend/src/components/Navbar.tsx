import { SiLichess } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=' fixed px-6 lg:px-10 xl:px-16 z-10 w-full h-16 bg-black/50 backdrop-blur-md flex items-center justify-between'>
      <h1 className="text-2xl font-bold text-white flex items-center gap-4">
        <span >
          <SiLichess />
        </span>
        Chess by Pritam
      </h1>

      <div className=" flex items-center gap-12 text-xl font-bold text-white mr-10">
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
      </div>
    </nav>
  )
}

export default Navbar