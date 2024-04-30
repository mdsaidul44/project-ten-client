import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyArt = () => {
    const art = useLoaderData()
    const [arts ,setArts] =useState(art)
    console.log(art)


    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/art/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = art.filter(cof => cof.id !== id)
                            setArts(remaining)
                        }
                    })
            }
        });

    }


return (
    <div className="grid grid-cols-3 gap-16 my-20">
        {
            arts.map(data => <div key={data._id} className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-60" src={data.image} alt="Shoes" /></figure>
                <div className="card-body text-gray-300">
                    <h2 className="card-title">
                        {data.subcategory_name}
                        <div className="badge badge-secondary">{data.customization}</div>
                    </h2>
                    <h1>{data.item_name}</h1>
                    <p>{data.short_description.slice(0, 100)}</p>
                    <div>
                        <h1>Stock : {data.stockStatus}</h1>
                        <h1>Price : ${data.price}</h1>
                        <h1>Rating : {data.rating}</h1>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/update/${data._id}`}><button className="btn mr-10 btn-secondary">Update</button></Link>
                        <Link><button onClick={() => handleDelete(data._id)} className="btn btn-secondary">Delete</button></Link>
                    </div>
                </div>
            </div>)
        }
    </div>
);
};

export default MyArt;