 

const AddCraftItem = () => {

    const handleAddCraft = event =>{
        event.preventDefault()
        const form =event.target;
        const subcategory_name =form.subcategory_name.value;
        const item_name =form.item_name.value;
        const user_email =form.user_email.value;
        const short_description =form.short_description.value;
        const price =form.price.value;
        const rating =form.rating.value;
        const customization =form.customization.value;
        const processing_time =form.processing_time.value;
        const stockStatus =form.stockStatus.value;
        const user_name =form.user_name.value;
        const image =form.image.value;
        const newArt = {subcategory_name,item_name,user_email,short_description,price,rating,customization,processing_time,stockStatus,user_name,image,}
        console.log(newArt)


        // send data to the server
        fetch('http://localhost:5000/art',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newArt)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className="bg-slate-800 rounded-xl my-20 p-10">
            <form onSubmit={handleAddCraft}>
                <div className="flex justify-between">
                    <div>
                        <div className="mb-4">
                            <p className="mb-2">Subcategory Name</p>
                            <input className="w-[620px] p-3 rounded bg-slate-600 " type="text" name="subcategory_name" placeholder="Subcategory Name" id="" />
                        </div>
                        <div className="mb-4">
                            <p className="mb-2">User Email</p>
                            <input className="w-[620px] p-3 rounded bg-slate-600" type="text" name="user_email" placeholder="User Email" id="" />
                        </div>
                        <div className="mb-4">
                            <p className="mb-2">Price</p>
                            <input className="w-[620px] p-3 rounded bg-slate-600" type="text" name="price" placeholder="Price" id="" />
                        </div>
                        <div className="mb-4">
                            <p className="mb-2">Customization</p>
                            <input className="w-[620px] p-3 rounded bg-slate-600" type="text" name="customization" placeholder="Customization" id="" />
                        </div>
                        <div className="mb-4">
                            <p className="mb-2">StockStatus</p>
                            <input className="w-[620px] p-3 rounded bg-slate-600" type="text" name="stockStatus" placeholder="StockStatus" id="" />
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <p className="mb-2">Item Name</p>
                            <input className="w-[620px] p-3 rounded bg-slate-600" type="text" name="item_name" placeholder="Item Name" id="" />
                        </div>
                        <div className="mb-4">
                            <p className="mb-2">Short Description</p>
                            <input className="w-[620px] p-3 rounded bg-slate-600" type="text" name="short_description" placeholder="Short Description" id="" />
                        </div>
                        <div className="mb-4">
                            <p className="mb-2">Rating</p>
                            <input className="w-[620px] p-3 rounded bg-slate-600" type="text" name="rating" placeholder="rating" id="" />
                        </div>
                        <div className="mb-4">
                            <p className="mb-2">Processing Time</p>
                            <input className="w-[620px] p-3 rounded bg-slate-600" type="text" name="processing_time" placeholder="Processing Time" id="" />
                        </div>
                        <div className="mb-4">
                            <p className="mb-2">User Name</p>
                            <input className="w-[620px] p-3 rounded bg-slate-600" type="text" name="user_name" placeholder="User Name" id="" />
                        </div>
                    </div>
                </div>
                
                <div className="mb-4">
                            <p className="mb-2">Image</p>
                            <input className="w-full p-3 rounded bg-slate-600" type="text" name="image" placeholder="Photo URL" id="" />
                        </div>
                        <div className="mb-4">
                            <input className="w-full mt-4 btn btn-primary font-bold" type="submit" value='Add' />
                        </div>
            </form>
        </div>
    );
};

export default AddCraftItem;