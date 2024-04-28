
import { useState } from "react";
import Banner from "../Page/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import CardCategory from "../CardPage/CardCategory";
import Category from "../CardPage/Category"; 





const Home = () => {
    const artCraft = useLoaderData()
    const [arts, setArt] = useState(artCraft)

    return (
        <div className="mt-10">
            <Banner />
            <div>
                <Category/>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 my-10 lg:my-32"> 
                {
                    arts.map(art =>
                        <CardCategory
                            key={art._id}
                            art={art}
                            setArt={setArt}
                        ></CardCategory>)
                }
            </div> 
        </div>
    );
};

export default Home;