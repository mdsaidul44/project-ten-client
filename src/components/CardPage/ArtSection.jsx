import { Link, useLoaderData } from "react-router-dom";

 

const ArtSection = () => {
    const craft = useLoaderData()  
    return (
        <div className="grid grid-cols-3 gap-16 my-20">
            {
                craft.map(item=> <div className="card w-96 bg-base-100 shadow-xl image-full" key={item._id} >
                <figure className="h-[250px]"><img className="w-full " src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold text-teal-400">{item.subcategory_name}</h2>
                  <p className="text-slate-300">{item.short_description.slice(0,80)}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/craftdetails/${item._id}`}><button className="btn btn-primary">Details</button></Link>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default ArtSection;