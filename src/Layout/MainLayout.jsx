import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../utils/ThemeProvider";

const MainLayout = () => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    if (!theme) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [theme]);

  return (
    <div className="dark:bg-gray-800 dark:text-gray-200">
    <div className="max-w-7xl mx-auto">
      {/* navbar */}
      <Navbar></Navbar>

      {/* outlets */}
      <Outlet></Outlet>

      {/* footer */}
      <Footer></Footer>
    </div>
    </div>
  );
};

export default MainLayout;
