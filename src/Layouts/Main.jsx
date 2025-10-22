import { useRef, useState, useEffect, useMemo } from "react";
import Header from "../components/Header";
import HomePage from "../Pages/HomePage";
import About from "../Pages/AboutPage";
import Contact from "../Pages/ContactPage";
import Footer from "../Pages/FooterPage";

const Main = () => {
    // Section refs
    const homeRef = useRef();
    const aboutRef = useRef();
    const contactRef = useRef();
    const footerRef = useRef();

    // 🧠 useMemo দিয়ে refs object stable করা হলো
    const refs = useMemo(
        () => ({
            homeRef,
            aboutRef,
            contactRef,
            footerRef,
        }),
        []
    );

    // Scroll function
    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // Active section state
    const [active, setActive] = useState("home");

    // Active section tracking on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 200; // offset to detect section early
            for (const [key, ref] of Object.entries(refs)) {
                if (ref.current && ref.current.offsetTop <= scrollPos) {
                    setActive(key);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [refs]);

    return (
        <div className="flex">
            {/* Fixed Sidebar */}
            <div className="fixed top-0 left-0 h-screen w-72 z-50">
                <Header scrollTo={scrollTo} refs={refs} active={active} />
            </div>

            {/* Main content */}
            <div className="flex-1 ml-72 space-y-20 scroll-smooth">
                <section ref={homeRef}><HomePage /></section>
                <section ref={aboutRef}><About /></section>
                <section ref={contactRef}><Contact /></section>
                <section ref={footerRef}><Footer /></section>
            </div>
        </div>
    );
};

export default Main;
