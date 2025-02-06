import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";



const AllArtAndCraft = () => {
    const [allCraft, setAllCraft] = useState([])
  
    useEffect(() => {
        fetch('https://my-assignment-ten.onrender.com/art')
            .then(res => res.json())
            .then(data => {
                setAllCraft(data)
                console.log(allCraft)
            })
    })

    return (
        <div className="my-20"> 
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="underline ">
                            <th></th>
                            <th>Category Name</th>
                            <th>Customization</th> 
                            <th>Stock Status</th>
                            <th>Price </th> 
                            <th >Button</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            allCraft.map((all,index )=> <tr key={all._id} className="">
                                <th>{index+1}</th>
                                <td>{all.subcategory_name}</td>
                                <td>{all.customization}</td>
                                <td>{all.stockStatus}</td>
                                <td>${all.price}</td> 
                               <Link to={`/artdetails/${all._id}`}> <button className="btn mt-2 ">Details</button></Link>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArtAndCraft;