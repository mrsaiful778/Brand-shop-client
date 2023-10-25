

const Banner = () => {
    return (
        <div className=''>
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/7C0rgbb/ip14-pro-rtb-desktop-1.png" className="w-full h-[550px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/g6TDrp2/Apple-Watch-Evolution-2016-2020.jpg" className="w-full h-[550px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/qyvvzDN/240-BOSS-OUD-1200x500-PX-WEB-BANNER.jpg" className="w-full h-[550px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/m6kYvcS/sony-a7iii-astrophotography-review-title.jpg" className="w-full h-[550px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;