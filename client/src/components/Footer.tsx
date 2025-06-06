import { Link } from "react-router";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="bottom-0 fixed left-0 w-full bg-gray-700 text-center mt-2 py-2 text-gray-200 z-50">
      © {date.getFullYear()} . Made with love by{" "}
      <Link
        to="https://www.google.com/"
        target="_blank"
        className="text-yellow-500 font-semibold text-lg active:scale-90 hover:underline duration-300"
      >
        ZHH
      </Link>
    </footer>
  );
};

export default Footer;
