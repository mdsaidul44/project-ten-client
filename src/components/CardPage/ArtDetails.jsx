import { useLoaderData, useParams } from "react-router-dom";



const ArtDetails = () => {
    const craftDetails = useLoaderData()
    const { id } = useParams()
    const crafts = craftDetails.find(item => item._id === id)
    console.log(crafts)
    const { subcategory_name, item_name,short_description, price, rating,processing_time, image } = crafts

    return (
        <div className="my-16">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="h-60" src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-emerald-600 text-3xl">{subcategory_name}</h2>
                    <p>{item_name}</p> 
                </div>
                <div className="p-10">
                    <h1 className="mb-2">{short_description}</h1> 
                    <h1 className="font-semibold">Processing Time : {processing_time}</h1>
                    <h1>Price : {price}</h1>
                    <h1>Rating : {rating}</h1> 
                </div>
            </div>
        </div>
    );
};

export default ArtDetails;