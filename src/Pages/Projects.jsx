import './Css/Projects.css';
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
        <div id='project' className="py-20 ">
            <div className='container mx-auto'>
                <h2 className="text-center text-4xl font-bold mb-12 bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent  drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                    || My Projects ||
                </h2>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    spaceBetween={0}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="relative bg-gray-900 rounded-2xl border border-cyan-400/40 shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.8)] transition-all duration-500 overflow-hidden w-[320px] h-[420px] mx-auto hover:scale-105 group">
                                <img
                                    src={project.img}
                                    alt=""
                                    className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                />

                                {/* Red glow border line (top) */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-500  to-sky-500 animate-pulse" />

                                <div className="p-5 space-y-3">
                                    <h2 className="text-xl font-semibold text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                                        {project.title}
                                    </h2>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="bg-cyan-600/20 border border-cyan-400/50 text-cyan-300 text-xs px-3 py-1 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.4)]"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between mt-5 text-sm">
                                        <a
                                            href={project.live}
                                            className="flex items-center gap-1 text-sky-500 hover:text-cayn-300 hover:underline transition-colors duration-500"
                                        >
                                            <SquareArrowOutUpRight size={14} />
                                            <span>View Project</span>
                                        </a>

                                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                                        <button
                                            onClick={() => {
                                                setSelectDes(project);
                                                document.getElementById('my_modal_5').showModal();
                                            }}
                                            className="text-cyan-400 hover:text-cyan-200 hover:underline transition-colors duration-500 cursor-pointer"
                                        >
                                            Details
                                        </button>

                                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box bg-linear-to-br from-[#020617] via-[#0f172a] to-[#0a192f] border-2 border-cyan-400/60 rounded-2xl shadow-[0_0_35px_rgba(56,189,248,0.45)] text-white backdrop-blur-xl">
                                                {selectDes && (
                                                    <>
                                                        <h3 className="font-extrabold text-2xl bg-linear-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]">
                                                            {selectDes.title}
                                                        </h3>
                                                        <p className="mt-4 text-gray-300 text-base leading-relaxed">
                                                            <h2 className='text-sky-400 text-xl font-semibold'>Description</h2>
                                                            <span className='text-sm'>{selectDes.description}</span>
                                                        </p>
                                                        <p className="mt-4 text-gray-300 text-base leading-relaxed">
                                                            <h2 className='text-sky-400 text-xl font-semibold'>ChallengingPart:</h2>
                                                            <span className='text-sm'>{selectDes.challengingPart}</span>
                                                        </p>
                                                    </>
                                                )}
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        <button className="px-6 py-2.5 rounded-full font-semibold border border-cyan-400/80 text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-cyan-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(56,189,248,0.7)] transition-all duration-300">
                                                            Close ✨
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>

                                    </div>
                                </div>

                                {/* Neon glow bottom edge */}
                                <div className="absolute bottom-0 left-0 w-full h-2 bg-linear-to-r from-sky-500  to-cyan-400 blur-sm" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;