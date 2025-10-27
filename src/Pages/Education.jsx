const Education = () => {
    const timeline = [
        {
            title: "Computer Science & Technology (CST)",
            institution: "Shariatpur Polytechnic Institute, Shariatpur",
            year: "2021 - 2022",
        },
        {
            title: "Secondary School Certificate (SSC)",
            institution: "RajaPur Yasin Inistitution, Rajbari",
            year: "2020 - 2021",
        },
    ];

    return (
        <section className="text-white py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-gray-400 tracking-widest uppercase text-sm">
                        || Education ||
                    </p>
                    <h2 className="text-4xl font-extrabold mt-2">
                        My Academic Journey
                    </h2>
                </div>

                <div className="relative">
                    {/* vertical line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"></div>

                    {timeline.map((item, index) => {
                        const isLeft = index % 2 === 0; // alternately left & right
                        return (
                            <div
                                key={index}
                                className={`mb-16 flex flex-col md:flex-row w-full items-center ${isLeft ? "md:justify-start" : "md:justify-end"
                                    }`}
                            >
                                <div
                                    className={`w-full md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                                        }`}
                                >
                                    <div className="bg-[#141414] p-6 shadow-lg rounded-tl-xl rounded-tr-xl md:rounded-tl-xl md:rounded-bl-xl hover:shadow-red-600/30 transition">
                                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                        <p className="text-slate-400 mb-3">{item.institution}</p>
                                        <p className="text-slate-400 text-sm">{item.year}</p>
                                    </div>
                                </div>

                                {/* timeline dot */}
                                <div className="absolute hidden md:block md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-red-700 rounded-full border-4 border-[#121416] mt-6 md:mt-0"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Education;
