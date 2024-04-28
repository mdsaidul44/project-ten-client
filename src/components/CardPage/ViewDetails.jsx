import { useLoaderData, useParams } from "react-router-dom";



const ViewDetails = () => {
    const detailsArt = useLoaderData()
    const { id } = useParams()
    const details = detailsArt.find(detail => detail._id === id)
    const { subcategory_name, item_name, user_email, short_description, price, rating, customization, processing_time, stockStatus, user_name, image, } = details


    return ( 
              <div className="my-20">
            <div className="hero  h-[400px] bg-base-200 rounded-xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="max-w-sm rounded-lg  shadow-2xl" />
                    <div>
                        <h1 className="text-5xl text-teal-400 font-bold">{subcategory_name}</h1>
                        <h1 className="text-2xl mt-4 font-semibold">{item_name}</h1>
                        <p className="py-6">{short_description}</p> 
                    <div className="flex justify-between mr-52">
                        <div>
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

export default ViewDetails;