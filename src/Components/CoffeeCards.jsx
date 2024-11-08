import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CoffeeCards = () => {
    const data = useLoaderData()
    const {category} = useParams()
    const [coffees, setCoffees] = useState([])
    useEffect(()=>{
        const filterByCategory = [...data].filter(coffee => coffee.category == category)
        setCoffees(filterByCategory)
        
    },[data])
    console.log(coffees)
    return (
        <div className="mt-5">
            
        </div>
    );
};

export default CoffeeCards;