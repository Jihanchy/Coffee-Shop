import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import CoffeeCards from "../Components/CoffeeCards";
import CoffeeDetails from "../Components/CoffeeDetails";

const routes = createBrowserRouter([

    {
        path: '/',
        element: <MainLayouts/>,
        children: [
            {
                path:'/',
                element:<Home/>,
                loader: ()=>fetch('/categories.json'),
                children: [
                    {
                        path: '/',
                        element: <CoffeeCards/>,
                        loader: ()=>fetch('/coffees.json')
                    },
                    {
                        path: '/category/:category',
                        element: <CoffeeCards/>,
                        loader: ()=>fetch('/coffees.json')
                    }
                ]
            },
            {
                path:'/coffees',
                element:<Coffees/>,
                loader: ()=>fetch('/coffees.json')

            },
            {
                path:'/coffeeDetails/:idx',
                element:<CoffeeDetails/>,
                loader: ()=>fetch('/coffees.json')

            },
            {
                path: '/dashboard',
                element:<Dashboard/>
            }
        ]
    }
])
export default routes;