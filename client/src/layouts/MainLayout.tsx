import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <main className="px-3 max-w-[80rem] mx-auto">
      <Navbar />
      <section className="w-[80%] md:w-2/4 mx-auto">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default MainLayout;
