

const Banner = () => {
    return (
        <div>  
            <div className="carousel h-96 w-full rounded-xl">
                <div id="item1" className="carousel-item w-full"> 
                    <div className="hero  h-full" style={{ backgroundImage: 'url(https://i.ibb.co/Npnhm7x/wilderness-waterfall-c-steele.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl font-bold">Landscape Painting</h1>
                                <p className="mb-5">Landscape painting, also known as landscape art, is the depiction of natural scenery such as mountains..</p>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    {/* <img src="https://i.ibb.co/pLrs9J5/maxresdefault.jpg" className="w-full" /> */}
                    <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/pLrs9J5/maxresdefault.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl font-bold">Watercolour Painting</h1>
                                <p className="mb-5">At its most basic the word watercolour describes a medium in which dry pigment is then with water. </p>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    {/* <img src="https://i.ibb.co/48qrQbt/images-18.jpg" className="w-full" /> */}
                    <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/48qrQbt/images-18.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl font-bold">Oil Painting</h1>
                                <p className="mb-5">Oil painting is a painting method involving the procedure of painting with pigments with a medium.</p>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    {/* <img src="https://i.ibb.co/H2BqYLQ/maxresdefault-1.jpg" className="w-full" /> */}
                    <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/H2BqYLQ/maxresdefault-1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl font-bold">Charcoal Sketching</h1>
                                <p className="mb-5">A drawing technique that employs an implement of charred wood, charcoal drawing is a staple of any artists study. </p>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;