
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { SquareArrowOutUpRight } from 'lucide-react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selectDes, setSelectDes] = useState(null);

    useEffect(() => {
        fetch('/projectData.json')
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <div className="py-10  text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-gray-400 tracking-widest uppercase text-sm">
                        || Projects ||
                    </p>
                    <h2 className="text-4xl font-extrabold mt-2">
                        My Projects
                    </h2>
                </div>

                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    spaceBetween={40}
                    coverflowEffect={{
                        rotate: 40,
                        stretch: 0,
                        depth: 120,
                        modifier: 1.2,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="relative rounded-2xl overflow-hidden w-[320px] h-[420px] mx-auto group bg-[#141414] p-2">
                                <img
                                    src={project.img}
                                    alt="Project Photo"
                                    className="w-full rounded-tr-3xl rounded-bl-3xl h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                />

                                {/* Red top glow line */}
                                {/* <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-500 via-pink-500 to-red-500 animate-pulse"></div> */}

                                <div className="p-5 space-y-3">
                                    <h2 className="text-xl font-semibold text-slate-400">
                                        {project.title}
                                    </h2>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 rounded-full  backdrop-blur-md"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between mt-5 text-sm">
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative flex items-center gap-1 hover:text-pink-800 transition-colors duration-300 
                                            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] 
                                          after:bg-pink-800 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
                                            hover:after:scale-x-100"
                                        >
                                            <SquareArrowOutUpRight size={14} />
                                            <span>View Project</span>
                                        </a>

                                        {/* <button
                                            onClick={() => {
                                                setSelectDes(project);
                                                document.getElementById("my_modal_5").showModal();
                                            }}
                                            className="hover:text-red-400 hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.6)] transition-all duration-300 cursor-pointer"
                                        >
                                            Details
                                        </button> */}
                                    </div>
                                </div>

                                {/* Red Neon bottom edge */}
                                {/* <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 blur-sm"></div> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Modal */}
            <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle backdrop-blur-md"
            >
                <div className="modal-box bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#0a192f] border-2 border-cyan-400/60 rounded-2xl shadow-[0_0_35px_rgba(56,189,248,0.45)] text-white">
                    {selectDes && (
                        <>
                            <h3 className="font-extrabold text-2xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300">
                                {selectDes.title}
                            </h3>

                            <div className="mt-4">
                                <h2 className="text-lg font-semibold text-red-400 mb-1">
                                    Description
                                </h2>
                                <p className="text-sm leading-relaxed">
                                    {selectDes.description}
                                </p>
                            </div>

                            <div className="mt-4">
                                <h2 className="text-lg font-semibold text-red-400 mb-1">
                                    Challenging Part
                                </h2>
                                <p className="text-sm leading-relaxed">
                                    {selectDes.challengingPart}
                                </p>
                            </div>
                        </>
                    )}

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="px-6 py-2.5 rounded-full font-semibold border border-red-500 text-red-400 hover:bg-red-500 hover:text-white hover:shadow-[0_0_15px_rgba(255,0,0,0.7)] transition-all duration-300">
                                Close ✨
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>

    );
};

export default Projects;