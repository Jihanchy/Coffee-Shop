import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import detailImg from '../assets/nutrition.png'
const CoffeeDetails = () => {
    const { idx } = useParams()
    const data = useLoaderData()
    const [coffee, setCoffee] = useState({})
    useEffect(() => {
        const details = [...data].find(coffee => coffee.id === parseInt(idx))
        setCoffee(details)

    }, [data, idx])
    const { image, name, category, origin,ingredients,nutrition_info,making_process, type, rating, popularity, description } = coffee || {}

    return (
        <div className="my-12">
            {/* description */}
            <h3 className="text-2xl md:text-4xl font-thin mb-6">{description}</h3>
            <div className="w-full h-full md:h-[500px] object-cover overflow-hidden rounded-xl shadow-xl">
                <img className="w-full h-full" src={image} alt="" />
            </div>
            <div className="flex justify-between items-center my-6">
                <div>
                    <h2 className="text-2xl md:text-3xl font-thin">{name}</h2>
                    <p>Popularity : {popularity}</p>
                    <p>Rating : {rating}</p>
                </div>
                <div>
                    <button className="btn btn-warning">Add favorite</button>
                </div>
            </div>
            <div className="my-6">
                <h1 className="text-2xl font-thin">Making Process</h1>
                <p className="text-base ">{making_process}</p>
            </div>
            <div className="my-6 flex justify-between items-center">
                <div className="flex-1">
                    <div className="flex flex-col justify-center gap-6">
                        <h1 className="text-2xl font-thin ">Ingredients :</h1>
                        <ul className="text-xl ml-12">
                            {
                                ingredients && 
                                ingredients.map(i => (
                                    <li key={i} className="list-disc">{i}</li>
                                ))
                            }
                        </ul>
                        <h1 className="text-2xl font-thin ">Nutrition :</h1>
                        <ul className="text-xl ml-12">
                            {
                                nutrition_info && 
                                Object.keys(nutrition_info).map(n => (
                                    <li key={nutrition_info[n]} className="list-disc">
                                        {n} : {nutrition_info[n]}
                                        </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex-1">
                    <img src={detailImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;