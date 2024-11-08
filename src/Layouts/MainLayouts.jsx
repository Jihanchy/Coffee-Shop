import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayouts = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar />
            {/* dynamic section */}
            <div className="w-10/12 mx-auto py-5">
                <Outlet />
            </div>
            {/* footer */}
            <Footer />
        </div>
    );
};

export default MainLayouts;