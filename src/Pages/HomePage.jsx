import { useRef, useEffect } from "react";
import ParticleBackground from "../components/ParticleBackground";
import Typewriter from "typewriter-effect";
import gsap from "gsap";
import { FiArrowRight } from "react-icons/fi";
import image from "../assets/Profile.png";

const HomePage = () => {
    const textRef = useRef();

    useEffect(() => {
        const textElement = textRef.current;
        if (!textElement) return;

        const chars = textElement.textContent.split("");
        textElement.textContent = "";

        chars.forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char;
            textElement.appendChild(span);
        });

        gsap.fromTo(
            textElement.children,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.1,
                stagger: 0.1,
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <section className="min-h-screen relative bg-hero-pattern bg-cover bg-center bg-no-repeat flex items-center justify-center text-white">
            <ParticleBackground />

            <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between p-8 z-10">

                {/* LEFT SIDE */}
                <div className="flex-1 text-center lg:text-left ml-2">
                    <h3
                        ref={textRef}
                        className="text-xl font-semibold text-white mb-8"
                    >
                        Hello 👋 <br /> I’m
                    </h3>

                    <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-relaxed -mt-5">
                        <span className="text-[#FF014F]">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Maruf Sheikh",
                                        "A Developer",
                                        "A Mern Stack Developer",
                                        "A Frontend Developer",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h1>

                    <p className="text-slate-400 max-w-lg mx-auto lg:mx-0 mt-6 leading-relaxed">
                        A passionate MERN Stack Developer crafting responsive,
                        secure, and scalable web experiences using React,
                        Node.js, Express, MongoDB, Firebase, and Tailwind CSS.
                    </p>

                    <div className="mt-6 flex justify-center lg:justify-start">
                        <button
                            type="submit"
                            className="flex items-center gap-3 bg-gradient-to-r from-[#ff004c] to-[#ff006e] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 group"
                        >
                            View Portfolio
                            <FiArrowRight className="text-white text-lg transition-transform duration-300 group-hover:translate-x-2" />
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0">
                    <img
                        className="w-full max-w-sm lg:max-w-md object-contain"
                        src={image}
                        alt="Photo"
                    />
                </div>

            </div>
        </section>
    );
};

export default HomePage;
