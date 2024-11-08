import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";
import { useState } from "react";

const Coffees = () => {
    const data = useLoaderData()
    const [coffees, setCoffees] = useState(data)
    const handleSort = (sortBy) => {
        if(sortBy === 'popularity'){
            const sortedByPopularity = [...data].sort((a,b)=> a.popularity - b.popularity)
            setCoffees(sortedByPopularity)
        }else if(sortBy === 'rating'){
            const sortedByRating = [...data].sort((a,b)=> a.rating - b.rating)
            setCoffees(sortedByRating)
        }
    }
    return (
        <>

            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-3xl font-thin">Sort coffee&apos;s By Rating & Popularity-&gt;</h3>
                </div>
                <div className="flex items-center gap-5">
                    <button onClick={()=>handleSort('popularity')} className="btn-warning btn font-bold">Sort by rating</button>
                    <button onClick={()=>handleSort('rating')} className="btn-warning btn  font-bold">Sort by popularity</button>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    coffees.map((coffee, idx) => <Card key={idx} coffee={coffee}></Card>)
                }
            </div>
        </>
    );
};

export default Coffees;