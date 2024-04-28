import { Link } from "react-router-dom";



const CardCategory = ({ art}) => {
    const {_id, subcategory_name,   short_description, image, } = art

    return (
        <div className="">
            <div className="card  w-full lg:card-side bg-base-300 shadow-xl ">
                <figure><img className="h-52 w-80" src={image}alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-teal-400">{subcategory_name}</h2>
                    {
                       short_description.length > 150 ? <p>{short_description.slice(0, 100)} <Link to={`/details/${_id}`} className="text-green-800 font-bold">Read more...</Link></p> : <p>{short_description}</p>
                    }
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCategory;