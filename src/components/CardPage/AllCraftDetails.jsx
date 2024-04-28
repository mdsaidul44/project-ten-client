import { useLoaderData, useParams } from "react-router-dom";

 

const AllCraftDetails = () => {
    const allArt = useLoaderData()
    const { id } = useParams()
    const artDetails = allArt.find(art => art._id == id)
    const { subcategory_name, item_name, user_email, short_description, price, rating, customization, processing_time, stockStatus, user_name, image, } = artDetails
    console.log(artDetails)
    return (
        <div>
            <h1>this is details</h1>
        </div>
    );
};

export default AllCraftDetails;