import { useLoaderData, useParams } from "react-router-dom";



const AllCraftDetails = () => {
    const allArt = useLoaderData()
    console.log(allArt)
    const { id } = useParams()
    console.log(id)
    const artDetails = allArt.find(art => art._id == id)
    console.log(artDetails)
    const { subcategory_name, item_name, user_email, short_description, price, rating, customization, processing_time, stockStatus, user_name, image, } = artDetails

    return (
        <div className="my-20  ">
            <div className="hero  h-[500px]" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content   text-neutral-content">
                    <div className="text-gray-200 "> 
                            <div className="text-center">
                            <h1 className="mb-5 text-teal-400 text-4xl font-bold">{subcategory_name}</h1>
                            <h1 className="mb-5 text-2xl font-bold">{item_name}</h1>
                            <p className="mb-5 mx-36">{short_description}</p> 
                            </div>
                           <div className="flex justify-between mx-40">
                           <div className="">
                                <h1 className="text-xl font-semibold mb-2 ">Name : {user_name}</h1>
                                <h1 className="  ">Stock Status : {stockStatus}</h1>
                                <h1 className="  ">Customization : {customization}</h1>
                            </div>
                            <div>
                                <h1>Processing : {processing_time}</h1>
                                <h1>Price : ${price}</h1>
                                <h1>Rating : {rating}</h1>
                                <h1 className="underline">Email : {user_email}</h1>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div> 
    );
};

export default AllCraftDetails;