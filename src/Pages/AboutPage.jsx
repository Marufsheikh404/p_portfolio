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
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white text-center mb-16">
                        Passion • Objective • Progress
                    </h1>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column: Text Content */}
                        <div className="text-gray-300 space-y-2 text-base md:text-lg leading-relaxed">
                            <p>
                                I'm Maruf, a passionate and creative web developer who loves turning ideas into clean, interactive, and user-friendly web experiences.
                                I focus on crafting designs and technologies that make life simpler, more enjoyable, and meaningful.
                            </p>
                            <div>
                                <h1 className="text-2xl md:text-2xl font-bold text-[#F9004D] mb-6">Things That Encourage Me</h1>
                                <ul className="list-disc list-inside space-y-1 text-lg text-slate-400">
                                    {
                                        encouragementPoints.map((text, index) => <li
                                            key={index}
                                        >{text}</li>)
                                    }
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Cards */}
                        <div className="space-y-8">
                            <InfoCard
                                title="Favorite Tech"
                                content="React, Tailwind CSS, Firebase, Node.js, Express.js, MongoDB, JWT"
                            ></InfoCard>
                            <InfoCard
                                title="Favorite Tech"
                                content="React, Tailwind CSS, Firebase, Node.js, Express.js, MongoDB, JWT"
                            ></InfoCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;