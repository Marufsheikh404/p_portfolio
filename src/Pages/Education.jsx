
const Education = () => {
    const timeline = [
        {
            title: "Bachelor of Computer Science & Engineering",
            institution: "United International University, Dhaka - 1212",
            year: "2020 - 2024",
        },
        {
            title: "Secondary School Certificate (SSC)",
            institution: "RajaPur Yasin Inistitution, Rajbari",
            year: "2020 - 2021",
        },
    ];

    return (
        <section className="bg-[#121416] text-white py-20">
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
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"></div>

                    {timeline.map((item, index) => {
                        const isLeft = index % 2 === 0; // alternately left & right
                        return (
                            <div
                                key={index}
                                className={`mb-16 flex w-full ${isLeft ? "justify-start" : "justify-end"
                                    }`}
                            >
                                <div
                                    className={`w-1/2 ${isLeft ? "pr-12 text-right" : "pl-12 "
                                        }`}
                                >
                                    <div className="bg-[#1b1d1f] rounded-2xl p-6 shadow-lg hover:shadow-red-600/30 transition">
                                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                        <p className="text-slate-400 mb-3">{item.institution}</p>
                                        <p className="text-slate-400 text-sm">{item.year}</p>
                                    </div>
                                </div>

                                {/* timeline dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-700 rounded-full border-4 border-[#121416]"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Education;
