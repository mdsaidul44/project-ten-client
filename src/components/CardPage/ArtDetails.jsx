import { useLoaderData, useParams } from "react-router-dom";

 

const ArtDetails = () => { 
    const craftDetails = useLoaderData()
    const { id } = useParams()
    const crafts = craftDetails.find(item => item._id === id)
    console.log(crafts)

    return (
        <div>
            <h1>art details: {crafts.price}</h1>
        </div>
    );
};

export default ArtDetails;