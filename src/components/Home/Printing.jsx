

const Printing = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-4xl font-bold">Art & Craft Store</h1>
                <p className="mt-4">An arts and crafts business involves creating and selling handmade items with an artistic or decorative purpose. <br /> These products reflect the artisans and the products individuality.</p>
                <p></p>
            </div>
            <div className="flex gap-24 mt-20">
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold text-green-600"> Painting and Drawing</h2>
                        <p>Whereas drawing is predominately practiced with dry media such as pencil, charcoal,  wood, or a copper surface.</p>
                    </div>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold text-green-600"> Sculpture and Modeling</h2>
                        <p>Modeling: Modeled sculptures are created when a soft or malleable material is built up and shaped to create a form.</p>
                    </div>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold text-green-600">Textile Arts</h2>
                        <p>Textile art is the creation of fabric designs by hand. It includes embroidery, knitting, beadwork, and needlepoint.</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-24 mt-20">
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold text-green-600">Paper Crafts & Glass Art</h2>
                        <p>Paper craft is a collection of crafts using paper or card as the primary artistic medium for the creation of two or three-dimensional objects.</p>
                    </div>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold text-green-600">Ceramics and Pottery</h2>
                        <p>Pottery and ceramics are one and the same. The word ceramic derives from Greek which translates.</p>
                    </div>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold text-green-600">Jute & wooden Crafts</h2>
                        <p>Jute is extracted from the bark of the white jute plant and to a lesser extent from tossa jute.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Printing;