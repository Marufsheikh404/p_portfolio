import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Projects = () => {
    return (
        <div className="bg-gradient-to-b from-[#0a0a0d] to-[#111] flex flex-col items-center justify-center py-16 px-4">
            <h2 className="text-center text-gray-400 uppercase tracking-wide mb-2">
                || Projects
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
                My Project Showcase
            </h1>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}  // শুধু ১টি card দেখাবে
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 180,
                    modifier: 2.5,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper w-full max-w-5xl"
            >
                {/* 🔹 Slide 1 */}
                <SwiperSlide className="w-[320px] md:w-[360px]">
                    <div className="bg-[#1b1b1b] rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="https://swiperjs.com/demos/images/nature-1.jpg"
                            alt="CourtNest"
                            className="w-full h-[200px] object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-pink-500 text-lg font-semibold">CourtNest</h3>
                            <p className="text-gray-300 text-sm mt-2">
                                Full-stack web app with Stripe payments and dashboards.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="px-2 py-1 bg-gray-800 text-xs rounded-md">
                                    React
                                </span>
                                <span className="px-2 py-1 bg-gray-800 text-xs rounded-md">
                                    Tailwind
                                </span>
                                <span className="px-2 py-1 bg-gray-800 text-xs rounded-md">
                                    Node.js
                                </span>
                            </div>
                            <button className="mt-4 text-pink-500 text-sm hover:underline">
                                View Project
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* 🔹 Slide 2 */}
                <SwiperSlide className="w-[320px] md:w-[360px]">
                    <div className="bg-[#1b1b1b] rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="https://swiperjs.com/demos/images/nature-2.jpg"
                            alt="EcoFridge"
                            className="w-full h-[200px] object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-green-400 text-lg font-semibold">EcoFridge</h3>
                            <p className="text-gray-300 text-sm mt-2">
                                Helps users track food expiry and reduce waste.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="px-2 py-1 bg-gray-800 text-xs rounded-md">
                                    Express.js
                                </span>
                                <span className="px-2 py-1 bg-gray-800 text-xs rounded-md">
                                    MongoDB
                                </span>
                            </div>
                            <button className="mt-4 text-green-400 text-sm hover:underline">
                                View Project
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* 🔹 Slide 3 */}
                <SwiperSlide className="w-[320px] md:w-[360px]">
                    <div className=" overflow-hidden shadow-xl w-[300px]">
                        <img
                            src="https://swiperjs.com/demos/images/nature-3.jpg"
                            alt="kajKori"
                            className="w-full h-[200px] object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-blue-400 text-lg font-semibold">kajKori</h3>
                            <p className="text-gray-300 text-sm mt-2">
                                Freelance marketplace connecting workers and clients.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="px-2 py-1 bg-gray-800 text-xs rounded-md">
                                    Firebase
                                </span>
                                <span className="px-2 py-1 bg-gray-800 text-xs rounded-md">
                                    JWT
                                </span>
                            </div>
                            <button className="mt-4 text-blue-400 text-sm hover:underline">
                                View Project
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;