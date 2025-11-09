import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa6';
import { CiLinkedin } from 'react-icons/ci';

const FooterPage = () => {
    return (
        <footer class="bg-[#141414] text-white py-12">
            <div class="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                <div className="space-y-4 place-items-center ">
                    {/* Logo and Name */}
                    <div className="flex gap-3 lg:gap-12">
                        <img className="w-11 h-11 rounded-tl-2xl rounded-br-2xl" src="/assets/maruf.jpeg" alt="Logo" />
                        <h1 className="text-lg font-bold  tracking-wide text-gray-100">MARUF</h1>
                    </div>

                    {/* About Text */}
                    <p className="text-slate-400 text-sm max-w-xs">
                        Hi, I'm Maruf, a web developer passionate about building elegant, responsive, and user-friendly websites. Excited to bring your ideas to life!
                    </p>
                </div>

                <div class="flex flex-col items-center">

                    <h2 class="font-semibold text-lg mb-4 text-gray-100 text-center">Quick Links</h2>

                    <div class="flex flex-col space-y-3 items-center">
                        <a href="#home" class="relative text-slate-400 hover:text-pink-800 transition-colors duration-300 
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] 
                      after:bg-pink-800 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
                        hover:after:scale-x-100">
                            Home
                        </a>
                        <a href="#skills" class="relative text-slate-400 hover:text-pink-800 transition-colors duration-300 
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] 
                      after:bg-pink-800 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
                        hover:after:scale-x-100">
                            Skills
                        </a>
                        <a href="#projects" class="relative text-slate-400 hover:text-pink-800 transition-colors duration-300 
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] 
                      after:bg-pink-800 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
                        hover:after:scale-x-100">
                            Projects
                        </a>
                    </div>
                </div>


                <div class="flex flex-col items-center">
                    <h2 class="font-semibold text-lg mb-4 text-gray-100 text-center">Contact</h2>

                    <div class="flex flex-col space-y-3 text-sm items-center">
                        <p class="relative text-slate-400 hover:text-pink-800 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100 cursor-pointer">
                            <i class="fa-solid fa-envelope mr-2"></i> www.marufsheikh@gmail.com
                        </p>
                        <p class="relative text-slate-400 hover:text-pink-800 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100 cursor-pointer">
                            <i class="fa-solid fa-location-dot mr-2"></i> Dhaka, Bangladesh
                        </p>
                        <p class="relative text-slate-400 hover:text-pink-800 transition-colors duration-300  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px]  after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100 cursor-pointer">
                            <i class="fa-solid fa-phone mr-2"></i> +8801719199642
                        </p>
                    </div>
                    <div className='flex items-center gap-5 mt-5'>
                        <a href="https://www.facebook.com/share/1EuzibpXMH/" target='_blank' rel='noopener noreferrer'>  <FaFacebook
                            className="text-white w-8 h-8 p-2 rounded-full transition-all duration-300 cursor-pointer 
               hover:bg-red-600 flex items-center justify-center"
                        /></a>
                        <a href="https://www.linkedin.com/in/maruf-sheikh-699522351" target='_blank' rel='noopener noreferrer'>
                            <CiLinkedin className="text-white w-8 h-8 p-2 rounded-full transition-all duration-300 cursor-pointer 
               hover:bg-red-600 flex items-center justify-center" />
                        </a>
                        <a href="https://github.com/Marufsheikh404" target='_blank' rel='noopener noreferrer'>
                            <FaGithub className="text-white w-8 h-8 p-2 rounded-full transition-all duration-300 cursor-pointer 
               hover:bg-red-600 flex items-center justify-center" />
                        </a>
                        <a href="https://www.instagram.com/maruf_404_x?igsh=MTFnamNpa3pmZXMzNw==" target='_blank' rel='noopener noreferrer'>
                            <FaInstagram className="text-white w-8 h-8 p-2 rounded-full transition-all duration-300 cursor-pointer 
               hover:bg-red-600 flex items-center justify-center" />
                        </a>
                    </div>
                </div>

            </div>


            <div class="w-11/12 max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between text-xs text-gray-400 gap-2">
                <p>© InversWeb <span class="text-gray-500">2025 | All Rights Reserved</span></p>
                <div class="flex flex-wrap gap-4">
                    <a href="#" class="hover:text-pink-800 transition-colors">Terms & Conditions</a>
                    <a href="#" class="hover:text-pink-800 transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-pink-800 transition-colors">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;