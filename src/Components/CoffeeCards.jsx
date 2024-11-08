import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCards = () => {
    const data = useLoaderData()
    const { category } = useParams()
    const [coffees, setCoffees] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        if (category) {
            const filterByCategory = [...data].filter(coffee => coffee.category == category)
            setCoffees(filterByCategory)
        } else {
            setCoffees(data.slice(0, 6))
        }
    }, [data, category])

    return (
        <>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                coffees.map((coffee, idx) => <Card key={idx} coffee={coffee}></Card>)
            }

        </div>
        <div className="my-4">
        <button onClick={()=>navigate('/coffees')} className="btn btn-warning font-semibold text-white">View all</button>
        </div>
        </>
    );
};

export default CoffeeCards;