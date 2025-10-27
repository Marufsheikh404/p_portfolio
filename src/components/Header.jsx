import { useState } from "react";
import { TbBrandLinkedin } from 'react-icons/tb';
import profile from '../assets/profile.png';
import { FaHouse, FaImage, FaComment, FaBaby } from "react-icons/fa6";
import { FiInstagram } from 'react-icons/fi';
import { PiFacebookLogoBold } from 'react-icons/pi';
import { MdOutlineCastForEducation } from 'react-icons/md';
import { GiAchievement } from 'react-icons/gi';
import { FaUserTimes } from "react-icons/fa";

const Header = ({ refs, scrollTo, active, setActive }) => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { icon: <FaHouse />, text: "Home", ref: refs.homeRef, id: "home" },
        { icon: <FaImage />, text: "About", ref: refs.aboutRef, id: "about" },
        { icon: <GiAchievement />, text: "Skills", ref: refs.SkillRef, id: "Skill" },
        { icon: <GiAchievement />, text: "Projects", ref: refs.ProjectRef, id: "Project" },
        { icon: <MdOutlineCastForEducation />, text: "Education", ref: refs.EducationRef, id: "Education" },
        { icon: <FaComment />, text: "Contact", ref: refs.contactRef, id: "contact" },
    ];

    return (
        <>
            {/* Hamburger for Mobile */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white text-3xl p-2 rounded-md bg-[#110F10]/80 hover:bg-[#FF014F]/80 transition"
                >
                    {isOpen ? <FaUserTimes /> : <FaBaby />}
                </button>
            </div>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-screen bg-[#110F10] z-40 w-40 transform transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
                <div className="flex flex-col gap-4 w-full mt-5 px-2">
                    {/* Profile */}
                    <div className="flex flex-col -mt-3 items-center">
                        <img
                            className="w-20 mb-3 rounded-full p-1 border border-gray-600 bg-[#2D121A] object-cover hover:scale-105 transition-transform duration-300"
                            src={profile}
                            alt="Profile"
                        />
                        <h2 className="text-white text-lg font-semibold -mt-3">Maruf Sheikh</h2>
                        <p className="text-sm text-gray-400">Full-Stack Developer</p>
                    </div>

                    {/* Menu */}
                    <div className="flex flex-col gap-1 mt-3">
                        {menuItems.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    scrollTo(item.ref);
                                    setActive(item.id);
                                    setIsOpen(false);
                                }}
                                className="flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-300 w-full text-left group hover:bg-[#FF014F]/80 hover:translate-x-1"
                            >
                                {/* Icon: black on hover or active */}
                                <span
                                    className={`text-lg transition-colors duration-300 ${active === item.id ? "text-black" : "text-red-600"
                                        } group-hover:text-black`}
                                >
                                    {item.icon}
                                </span>

                                {/* Text always white */}
                                <p className="text-sm text-white">{item.text}</p>
                            </button>
                        ))}
                    </div>

                    <hr className="border-gray-600 -mt-2 w-full my-4" />

                    {/* Social Icons */}
                    <div className="text-center -mt-6">
                        <p className='text-sm text-slate-400'>Find Me online:</p>
                        <div className="flex items-center justify-center gap-6 mb-3 text-white text-lg group">
                            <a
                                href="https://www.linkedin.com/in/maruf-sheikh-699522351"
                                className="transition-transform duration-500 hover:text-black hover:scale-125 hover:rotate-180 text-white w-8 h-8 py-2 rounded-full cursor-pointer hover:bg-red-600 flex items-center justify-center"
                            >
                                <TbBrandLinkedin />
                            </a>
                            <a
                                href="#"
                                className="transition-transform duration-500 hover:text-black hover:scale-125 hover:rotate-180 text-white w-8 h-8 p-2 rounded-full cursor-pointer hover:bg-red-600 flex items-center justify-center"
                            >
                                <FiInstagram />
                            </a>
                            <a
                                href="#"
                                className="transition-transform duration-500 hover:text-black hover:scale-125 hover:rotate-180 text-white w-8 h-8 p-2 rounded-full cursor-pointer hover:bg-red-600 flex items-center justify-center"
                            >
                                <PiFacebookLogoBold />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
