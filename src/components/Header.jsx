
import { FaHouse, FaImage, FaComment } from "react-icons/fa6";

const Header = ({ refs, scrollTo, active }) => {
    const menuItems = [
        { icon: <FaHouse />, text: "Home", ref: refs.homeRef, id: "home" },
        { icon: <FaImage />, text: "About", ref: refs.aboutRef, id: "about" },
        { icon: <FaComment />, text: "Contact", ref: refs.contactRef, id: "contact" },
        { icon: <FaComment />, text: "Footer", ref: refs.footerRef, id: "footer" },
    ];

    return (
        <div className="flex flex-col gap-4 w-full mt-5">
            {menuItems.map((item, idx) => (
                <button
                    key={idx}
                    onClick={() => scrollTo(item.ref)}
                    className={`flex group items-center gap-3 px-3 py-2 rounded-md w-full transition-all hover:bg-[#FF014F]/80 hover:translate-x-1 ${active === item.id ? "bg-[#FF014F] text-black" : "text-white"
                        }`}
                >
                    <span className="text-lg group-hover:text-black">{item.icon}</span>
                    <p className="text-sm">{item.text}</p>
                </button>
            ))}
        </div>
    );
};

export default Header;
