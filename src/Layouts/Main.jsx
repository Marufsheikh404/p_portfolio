import { useRef, useState, useEffect, useMemo } from "react";
import Header from "../components/Header";
import HomePage from "../Pages/HomePage";
import About from "../Pages/AboutPage";
import Contact from "../Pages/ContactPage";
import Skill from "../Pages/Skill";
import Education from "../Pages/Education";
import FooterPage from "../Pages/FooterPage";
import Projects from "../Pages/Projects";

const Main = () => {
    // Section refs
    const homeRef = useRef();
    const aboutRef = useRef();
    const EducationRef = useRef();
    const SkillRef = useRef();
    const ProjectRef = useRef();
    const contactRef = useRef();
    const FooterRef = useRef();

    // useMemo দিয়ে refs object stable করা হলো
    const refs = useMemo(
        () => ({
            homeRef,
            aboutRef,
            SkillRef,
            ProjectRef,
            EducationRef,
            contactRef,
            FooterRef
        }),
        []
    );

    // Smooth scroll function
    const smoothScrollTo = (target, duration = 1000) => {
        const startY = window.scrollY;
        const targetY = target.current.offsetTop;
        const distanceY = targetY - startY;
        const startTime = performance.now();

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
        if (ref.current) smoothScrollTo(ref);
    };

    // Active section state
    const [active, setActive] = useState("home");

    // Scroll tracking for active button
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 2;
            let currentActive = active;

            for (const [key, ref] of Object.entries(refs)) {
                if (ref.current) {
                    const { top } = ref.current.getBoundingClientRect();
                    const offsetTop = top + window.scrollY;
                    if (scrollPos >= offsetTop) {
                        currentActive = key;
                    }
                }
            }

            setActive(currentActive);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [refs]);

    return (
        <div className="flex">
            {/* Sidebar */}
            <Header scrollTo={scrollTo} refs={refs} active={active} setActive={setActive} />

            {/* Main content */}
            <div className="flex-1 lg:ml-[150px] w-full overflow-x-hidden">
                <section ref={homeRef} className="min-h-screen"><HomePage /></section>
                <section ref={aboutRef} className="min-h-screen"><About /></section>
                <section ref={SkillRef} className="min-h-screen"><Skill /></section>
                <section ref={ProjectRef}><Projects /></section>
                <section ref={EducationRef}><Education /></section>
                <section ref={contactRef}><Contact /></section>
                <section ref={FooterRef}><FooterPage /></section>
            </div>
        </div>
    );
};

export default Main;
