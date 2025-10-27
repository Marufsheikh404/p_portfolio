
import { FaBootstrap, FaCss3Alt, FaFigma, FaGithubAlt, FaHtml5, FaJ, FaReact } from "react-icons/fa6";
import { SiExpress, SiFirebase, SiJsonwebtokens, SiMongodb, SiNetlify, SiNextdotjs, SiNodedotjs, SiPicardsurgeles, SiTailwindcss, SiVercel } from "react-icons/si";
const Skill = () => {
    const categories = [
        {
            title: "Languages",
            items: [
                { name: "JavaScript", icon: <FaJ className="text-yellow-400" /> },
                { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
            ],
        },
        {
            title: "Frontend",
            items: [
                { name: "React", icon: <FaReact className="text-sky-400" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
                { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
                { name: "DaisyUI", icon: <span className="text-pink-300">🌸</span> },
            ],
        },
        {
            title: "Backend",
            items: [
                { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
                { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
                { name: "JWT", icon: <SiJsonwebtokens className="text-yellow-500" /> },
            ],
        },
        {
            title: "Tools & Platforms",
            items: [
                { name: "GitHub", icon: <FaGithubAlt className="text-gray-300" /> },
                { name: "Vercel", icon: <SiVercel className="text-gray-100" /> },
                { name: "Netlify", icon: <SiNetlify className="text-sky-400" /> },
                { name: "Surge", icon: <SiPicardsurgeles className="text-green-300" /> },
                { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
                { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
            ],
        },
    ];

    return (
        <section className=" text-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-gray-400 tracking-widest uppercase text-sm">
                        || Skill I have ||
                    </p>
                    <h2 className="text-4xl font-extrabold mt-2">My Tech Stack</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {categories.map((category, i) => (
                        <div key={i} className="bg-[#141414] rounded-2xl p-5 shadow-md hover:shadow-red-700/30 transition-transform duration-500 ease-in-out hover:scale-105">
                            <h3 className="text-lg font-semibold mb-6 text-center">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {category.items.map((item, j) => (
                                    <div
                                        key={j}
                                        className="flex flex-col items-center justify-center bg-[#141414] rounded-xl py-4 hover:bg-[#34383c] transition"
                                    >
                                        <div className="text-2xl mb-2">{item.icon}</div>
                                        <p className="text-sm text-gray-300">{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
