import InfoCard from '../components/InfoCard/InfoCard';

const AboutPage = () => {
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
                        <div className="text-gray-300 space-y-8 text-base md:text-lg leading-relaxed">
                            <p>
                                I'm Saide Bin Sabid, an enthusiastic and innovative web developer who is passionate about solving problems and creating a clean user interface. Developing technology to make life simpler, simpler to enjoy, or more meaningful is what defines me.
                            </p>
                            <p>
                                I enjoy a challenge. I like the process of coming up with simple, elegant solutions, whether it’s for a complex layout, difficult API integration, or performance optimization. That is the driving force behind me.
                            </p>
                            <p>
                                Great software and web applications, in my view, are made up of empathy, acquiring the problems that users face, and providing solutions that are not only useful but also pleasant.
                            </p>
                        </div>

                        {/* Right Column: Cards */}
                        <div className="space-y-8">
                            {/* <div className="grid sm:grid-cols-2 gap-8">
                                <InfoCard
                                    title="Favorite Tech"
                                    content="React, Tailwind CSS, Node.js, Express.js, MongoDB, JWT"
                                ></InfoCard>
                                <InfoCard
                                    title="Currently Exploring"
                                    content="Next.js, TypeScript, Framer Motion, Docker, REST APIs"
                                ></InfoCard>
                            </div> */}
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