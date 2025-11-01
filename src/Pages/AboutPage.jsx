import InfoCard from '../components/InfoCard/InfoCard';

const AboutPage = () => {
    const encouragementPoints = [
        'Designing clean and simple interfaces.',
        'Learning new technologies and patterns',
        'Constructing impactful digital experiences',
    ];

    return (
        <div>
            <div className=" min-h-screen flex items-center justify-center p-4 sm:p-8 font-sans">
                <div className="max-w-7xl w-full mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-4">
                        <span className="text-gray-500 tracking-widest text-md">|| ABOUT ME ||</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-100 text-center mb-16">
                        Passion • Objective • Progress
                    </h1>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column: Text Content */}
                        <div data-aos="zoom-in-right" data-aos-duration="1000" data-aos-easing="ease-in-out" className="text-gray-100 space-y-2 text-base md:text-lg leading-relaxed">
                            <p className='text-slate-400'>
                                I'm Maruf, a passionate and creative web developer who loves turning ideas into clean, interactive, and user-friendly web experiences.
                                I focus on crafting designs and technologies that make life simpler, more enjoyable, and meaningful.
                            </p>
                            <div className='mt-5'>
                                <h1 className="text-2xl md:text-2xl font-bold text-[#F9004D] mb-3">Things That Encourage Me</h1>
                                <ul className="list-disc list-inside space-y-1 text-lg text-slate-400">
                                    {
                                        encouragementPoints.map((text, index) => <li
                                            className='text-sm'
                                            key={index}
                                        >{text}</li>)
                                    }
                                </ul>
                            </div>

                            <div className='mt-5'>
                                <h1 className="text-2xl md:text-2xl font-bold text-[#F9004D] mb-3">My Philosophy</h1>
                                <ul className="list-disc list-inside space-y-1 text-slate-400">
                                    “I create modern, human-centered solutions that are impactful and simple for solving real-world issues. These solutions are readable, reusable, and ultimately helpful.”
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Cards */}
                        <div className="space-y-8" data-aos="zoom-in-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
                            <InfoCard
                                title="Favorite Tech"
                                content="React, Tailwind CSS, Firebase, Node.js, Express.js, MongoDB, JWT"
                            ></InfoCard>
                            <InfoCard
                                title="Currently Exploring"
                                content="Next.js, Farmar Motion,TypeScript"
                            ></InfoCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;