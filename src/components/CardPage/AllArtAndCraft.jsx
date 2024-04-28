import { useEffect, useState } from "react"; 



const AllArtAndCraft = () => {
    const [allCraft, setAllCraft] = useState([])

    const { subcategory_name, item_name, user_email, short_description, price, rating, customization, processing_time, stockStatus, user_name, image, } = allCraft

    useEffect(() => {
        fetch('http://localhost:5000/art')
            .then(res => res.json())
            .then(data => {
                setAllCraft(data)
                console.log(allCraft)
            })
    })

    return (
        <div className="my-20"> 
            <div className="overflow-x-auto">
                <table className="table table-xs">
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
                            allCraft.map(all => <tr key={all._id} className="">
                                <th></th>
                                <td>{all.subcategory_name}</td>
                                <td>{all.customization}</td>
                                <td>{all.stockStatus}</td>
                                <td>${all.price}</td> 
                                <button className="btn mt-2 ">Details</button>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArtAndCraft;