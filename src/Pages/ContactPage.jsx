import Lottie from 'lottie-react';
import animation from '../../public/Contact.json'
import { FiArrowRight } from 'react-icons/fi';

const ContactPage = () => {
    return (
        <section className="bg-[#0e0e0e] text-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* ---- Left Text Content ---- */}
                <div className=''>
                    <h1 className="text-red-700 text-xl font-bold relative inline-block after:content[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-red-700 after:transition-all after:duration-500 hover:after:w-full">Get In Touch</h1>
                    <h1 className="text-white text-5xl font-bold mt-5">Elevate Your Brand
                        with Me! </h1>
                    <Lottie animationData={animation}></Lottie>
                </div>

                {/* ---- Right Form ---- */}
                <div className="bg-[#141414] rounded-2xl p-8 shadow-lg border border-none transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,76,0.35)]">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="bg-transparent border border-gray-700 text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-transparent border border-gray-700 text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="bg-transparent border border-gray-700 text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition md:col-span-2"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="bg-transparent border border-gray-700 text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition md:col-span-2 resize-none"
                        ></textarea>

                        {/* ---- Button ---- */}
                        <div className="md:col-span-2 flex justify-center">
                            <button
                                type="submit"
                                className="flex items-center gap-3 bg-gradient-to-r from-[#ff004c] to-[#ff006e] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 group"
                            >
                                Appointment Now
                                <FiArrowRight className="text-white text-lg transition-transform duration-300 group-hover:translate-x-2" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;