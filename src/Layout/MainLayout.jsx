import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            {/* navbar */}
            <Navbar></Navbar>

            {/* outlets */}
            <Outlet></Outlet>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;