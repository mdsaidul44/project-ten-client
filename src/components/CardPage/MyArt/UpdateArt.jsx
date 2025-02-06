 
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

 

const UpdateArt = () => {

    const arts =useLoaderData()
    console.log(arts)
    const {id} = useParams()
    const art = arts.find(item=> item._id === id)
    console.log(art)
    const {_id, subcategory_name, item_name, user_email, short_description, price, rating, customization, processing_time, stockStatus, user_name, image, } = art
    

    const handleUpdate = (event)=>{
        event.preventDefault()
        const form = event.target;
        const subcategory_name = form.subcategory_name.value;
        const item_name = form.item_name.value; 
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value; 
        const image = form.image.value;
        const updateArt = {subcategory_name, item_name, user_email, short_description, price, rating, customization, processing_time, stockStatus, user_name, image, }
        console.log(updateArt)


        // send data to the server
        fetch(`https://my-assignment-ten.onrender.com/art/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateArt)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Success',
                        text: 'Update Art Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })
    }


    return (
        <div className="my-20">
             <div className="bg-slate-800 rounded-xl my-10 p-10">
                <h1 className="text-center font-bold text-3xl mb-10 text-emerald-600">Update My Art</h1>
                <form onSubmit={handleUpdate}> 
                    <div className="flex justify-between">
                        <div>
                            <div className="mb-4">
                                <p className="mb-2">Subcategory Name</p>
                                <input className="w-[620px] p-3 rounded bg-slate-600  " type="text" defaultValue={subcategory_name} name="subcategory_name" placeholder="Subcategory Name" id="" />
                            </div> 
                            <div className="mb-4">
                                <p className="mb-2">Price</p>
                                <input className="w-[620px] p-3 rounded bg-slate-600" type="text" name="price" defaultValue={price} placeholder="Price" id="" />
                            </div>
                            <div className="mb-4">
                                <p className="mb-2">Customization</p>
                                <input className="w-[620px] p-3 rounded bg-slate-600" type="text" defaultValue={customization} name="customization" placeholder="Customization" id="" />
                            </div>
                            <div className="mb-4">
                                <p className="mb-2">StockStatus</p>
                                <input className="w-[620px] p-3 rounded bg-slate-600" type="text" defaultValue={stockStatus} name="stockStatus" placeholder="StockStatus" id="" />
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <p className="mb-2">Item Name</p>
                                <input className="w-[620px] p-3 rounded bg-slate-600" type="text" defaultValue={item_name} name="item_name" placeholder="Item Name" id="" />
                            </div>
                            <div className="mb-4">
                                <p className="mb-2">Short Description</p>
                                <input className="w-[620px] p-3 rounded bg-slate-600" type="text" name="short_description" defaultValue={short_description} placeholder="Short Description" id="" />
                            </div>
                            <div className="mb-4">
                                <p className="mb-2">Rating</p>
                                <input className="w-[620px] p-3 rounded bg-slate-600" type="text" defaultValue={rating} name="rating" placeholder="rating" id="" />
                            </div>
                            <div className="mb-4">
                                <p className="mb-2">Processing Time</p>
                                <input className="w-[620px] p-3 rounded bg-slate-600" type="text" defaultValue={processing_time} name="processing_time" placeholder="Processing Time" id="" />
                            </div> 
                        </div>
                    </div>

                    <div className="mb-4">
                        <p className="mb-2">Image</p>
                        <input className="w-full p-3 rounded bg-slate-600" type="text" name="image" defaultValue={image} placeholder="Photo URL" id="" />
                    </div>
                    <div className="mb-4">
                        <input className="w-full mt-4 btn btn-primary font-bold" type="submit" value='Update' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateArt;