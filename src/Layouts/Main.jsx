import { useRef, useState, useEffect, useMemo } from "react";
import Header from "../components/Header";
import HomePage from "../Pages/HomePage";
import About from "../Pages/AboutPage";
import Contact from "../Pages/ContactPage";
import Skill from "../Pages/Skill";
import Education from "../Pages/Education";
import FooterPage from "../Pages/FooterPage";

const Main = () => {
    // Section refs
    const homeRef = useRef();
    const aboutRef = useRef();
    const EducationRef = useRef();
    const SkillRef = useRef();
    const contactRef = useRef();
    const FooterRef = useRef();

    // 🧠 useMemo দিয়ে refs object stable করা হলো
    const refs = useMemo(
        () => ({
            homeRef,
            aboutRef,
            SkillRef,
            EducationRef,
            contactRef,
            FooterRef
        }),
        []
    );

    // Custom smooth scroll function
    const smoothScrollTo = (target, duration = 1500) => {
        const startY = window.scrollY;
        const targetY = target.current.offsetTop;
        const distanceY = targetY - startY;
        const startTime = performance.now();

        // 🎯 Cubic easing function (আরও smooth)
        const easeInOutCubic = (t) =>
            t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const animation = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeInOutCubic(progress);

            window.scrollTo(0, startY + distanceY * eased);

            if (progress < 1) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    };

    const scrollTo = (ref) => {
        if (ref.current) smoothScrollTo(ref, 1000); // 2000ms = 2s scroll duration
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
            <div className="fixed  flex-1 bg-[#110F10] top-0 left-0 h-screen w-40 z-50">
                <Header scrollTo={scrollTo} refs={refs} active={active} />
            </div>

            {/* Main content */}
            <div className="flex-1 ml-[150px] overflow-x-hidden">
                <section ref={homeRef}><HomePage /></section>
                <section ref={aboutRef}><About /></section>
                <section ref={SkillRef}><Skill /></section>
                <section ref={EducationRef}><Education /></section>
                <section ref={contactRef}><Contact /></section>
                <section ref={FooterRef}><FooterPage /></section>
            </div>
        </div>
    );
};

export default Main;
