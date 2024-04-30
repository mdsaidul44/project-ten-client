

const ArtPrint = () => {
    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold text-center text-gray-300 mb-16">Artist</h1>
            </div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src="https://i.ibb.co/7zvQkVs/images-28.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="mr-60">
                        <h1 className="text-4xl font-bold">Think Different And Art Make Different</h1>
                        <p className="py-6">art, a visual object or experience consciously created through an expression of skill or imagination. <br />The term art encompasses diverse media such as painting, sculpture, printmaking,<br /> drawing, decorative arts, photography, and installation.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtPrint;