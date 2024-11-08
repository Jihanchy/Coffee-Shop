import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Heading from "../Components/Heading";

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            {/* banner */}
            <Banner/>
            {/* heading */}
            <Heading title="Browse coffees by category" subtitle="choose your most delicious and favorite coffee that fits in your taste and enjoy this moment"/>
            {/* categories */}
            <Categories categories={categories}/>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;