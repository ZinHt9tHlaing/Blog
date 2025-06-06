import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex md:w-3/4 mx-auto items-center justify-between px-7 py-2 mb-10">
      <Link to={"/"}>
        <h1 className="text-4xl text-teal-600 font-bold uppercase active:scale-95 hover:scale-105 hover:-rotate-1 duration-300">
          Blog.io
        </h1>
      </Link>
      <div className="flex items-center gap-2">
        <Link
          to={"/auth?mode=login"}
          className="px-3 py-1 rounded font-medium border-2 border-gray-800 active:scale-90 duration-200"
        >
          Login
        </Link>
        <Link
          to={"/auth?mode=register"}
          className="px-3 py-1 rounded font-medium border-2 border-gray-800 bg-gray-800 text-white active:scale-90 duration-200"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
