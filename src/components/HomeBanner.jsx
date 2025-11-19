import bannerImg1 from "../assets/BannerImg1.jpg"
import bannerImg2 from "../assets/BannerImg2.jpg"
import bannerImg3 from "../assets/bannerImg3.png"
import bannerImg4 from "../assets/BannerImg4.jpg"

const HomeBanner = () => {
	return (
		<div className="w-[95%] mx-auto my-10">
			<div className="carousel h-[200px] md:h-[300px] lg:h-[500px] w-full rounded-2xl">
				<div id="slide1" className="carousel-item relative w-full">
					<div
						className=" h-full w-full bg-center bg-cover"
						style={{
							backgroundImage: `url('${bannerImg1}')`,
						}}
					></div>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide4" className="btn btn-circle bg-[#F7B801]">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle bg-[#F7B801]">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<div
						className=" h-full w-full bg-center bg-cover"
						style={{
							backgroundImage: `url('${bannerImg2}')`,
						}}
					></div>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide1" className="btn bg-[#F7B801] btn-circle">
							❮
						</a>
						<a href="#slide3" className="btn bg-[#F7B801] btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<div
						className=" h-full w-full bg-center bg-cover"
						style={{
							backgroundImage: `url('${bannerImg3}')`,
						}}
					></div>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide2" className="btn btn-circle bg-[#F7B801]">
							❮
						</a>
						<a href="#slide4" className="btn btn-circle bg-[#F7B801]">
							❯
						</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<div
						className=" h-full w-full bg-center bg-cover"
						style={{
							backgroundImage: `url('${bannerImg4}')`,
						}}
					></div>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide3" className="btn btn-circle bg-[#F7B801]">
							❮
						</a>
						<a href="#slide1" className="btn btn-circle bg-[#F7B801]">
							❯
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeBanner;
