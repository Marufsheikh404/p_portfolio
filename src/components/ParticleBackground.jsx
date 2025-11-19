import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine); // engine load
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className="absolute top-0 left-0 w-full h-full z-0">
            <Particles
                id="tsparticles"
                init={particlesInit}  // <- এখানে engine load হবে
                loaded={particlesLoaded} // loaded callback
                options={{
                    background: { color: { value: "transparent" } },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: "push" },
                            onHover: { enable: true, mode: "connect" },
                            resize: true,
                        },
                        modes: { push: { quantity: 4 }, repulse: { distance: 200, duration: 0.4 } },
                    },
                    particles: {
                        color: { value: "#ff0000" },
                        links: { color: "#ffffff", distance: 30, enable: true, opacity: 0.2, width: 0.5 },
                        move: { direction: "none", enable: true, outModes: { default: "out" }, speed: 0.5 },
                        number: { density: { enable: true, area: 800 }, value: 80 },
                        opacity: { value: 0.5 },
                        shape: { type: "circle" },
                        size: { value: { min: 0.5, max: 2 } },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default ParticleBackground;
