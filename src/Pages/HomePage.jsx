import { useRef } from "react";
import ParticleBackground from "../components/ParticleBackground";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import gsap from "gsap";
import { FiArrowRight } from "react-icons/fi";
import image from '../assets/picture-.png'

const HomePage = () => {
    const textRef = useRef();

    const handleAnimationComplete = () => {
        console.log("All letters have animated!");
    };

    useEffect(() => {
        const textElement = textRef.current;
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
                onComplete: handleAnimationComplete,
            }
        );
    }, []);
    return (
        <section className="min-h-screen relative bg-hero-pattern bg-cover bg-center bg-no-repeat flex items-center  justify-center text-white">
            <ParticleBackground></ParticleBackground>
            {/* ===== Right Content ===== */}
            <div className="flex flex-1 z-10 relative flex-col lg:flex-row items-center justify-between   p-8 rounded-2xl shadow-xl border-none ">
                {/* Text Section */}
                <div className="text-center lg:text-left flex-1">
                    <h3 ref={textRef} className="text-2xl font-semibold text-white mb-2">
                        Hello 👋
                    </h3>

                    <h1 className="font-bold text-3xl sm:text-4xl lg:text-4xl text-white leading-relaxed">
                        I’m{" "}
                        <span className="text-[#FF014F]">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Maruf Sheikh",
                                        "A Developer",
                                        "A Frontend Developer"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h1>

                    <p className="text-gray-300 text-sm max-w-lg mx-auto lg:mx-0 mt-3 leading-relaxed">
                        A passionate MERN Stack Developer crafting responsive, secure, and scalable web experiences using React, Node.js, Express, MongoDB, Firebase, and Tailwind CSS.
                    </p>

                    <div className="mt-6 flex justify-center lg:justify-start">
                        <button
                            type="submit"
                            className="flex items-center gap-3 bg-gradient-to-r from-[#ff004c] to-[#ff006e] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 group"
                        >
                            View Portfilio
                            <FiArrowRight className="text-white text-lg transition-transform duration-300 group-hover:translate-x-2" />
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative flex justify-center items-center translate-x-10 mt-8 lg:mt-0">
                    <img className="w-80" src={image} alt="Photo" />
                    <span className="absolute text-3xl sm:text-5xl font-bold text-gray-800 opacity-20 select-none">
                        Web Developer
                    </span>
                </div>
            </div>
        </section>
    );
};

export default HomePage;