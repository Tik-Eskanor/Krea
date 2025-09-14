import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Footer() {
    return (
        <section className="contact" id="contact">
            <div className="contact-wrapper px-3">
                {/* <div id="bg-footer"></div> */}
                <div className="container mx-auto pb-4 md:px-0 px-3">
                    <h2 className="pb-5 text-center text-4xl">GET IN TOUCH</h2>
                    <div className="flex flex-wrap">
                        <div className="md:w-3/12 w-full p-2">
                            <div className="contact-item  my-4">
                                <div className="contact-logo">
                                    <h1 className='text-4xl'>Eskanor</h1>
                                    <div className="useful-links mt-4">
                                        <Link href="https://web.facebook.com/profile.php?id=100091377859958" className="flex gap-2 mb-4 text-lg items-center"><span><FaFacebook className='text-gray-400' /> </span> <span className='transition-all duration-300 ease-in-out hover:ml-8 block'>Facebook</span></Link>
                                        <Link href="https://twitter.com/TEskanor79367" className="flex gap-2 mb-4 text-lg items-center"><span><FaTwitter className='text-gray-400' /> </span> <span className='transition-all duration-300 ease-in-out hover:ml-4 block'>Twitter</span></Link>
                                        <Link href="https://www.linkedin.com/in/eskanor-tik-17b128271/" className="flex gap-2 mb-4 text-lg items-center"><span><FaLinkedin className='text-gray-400' /> </span> <span className='transition-all duration-300 ease-in-out hover:ml-4 block'>Linkedin</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/12 w-full p-2">
                            <div className="contact-item  my-4">
                                <div className="contact-logo">
                                    <h4 className='text-2xl'>Useful links</h4>
                                    <div className="useful-links mt-4">
                                        <Link href="/" className="flex gap-2 mb-4 text-lg items-center"><span><MdOutlineKeyboardArrowRight size={20} className='text-gray-400' /> </span> <span className='transition-all duration-300 ease-in-out hover:ml-3 block'>Home</span></Link>
                                        <Link href="/#about" className="flex gap-2 mb-4 text-lg items-center"><span><MdOutlineKeyboardArrowRight size={20} className='text-gray-400' /> </span> <span className='transition-all duration-300 ease-in-out  hover:ml-3 block'>About</span></Link>
                                        <Link href="/#skills" className="flex gap-2 mb-4 text-lg items-center"><span><MdOutlineKeyboardArrowRight size={20} className='text-gray-400' /> </span> <span className='transition-all duration-300 ease-in-out  hover:ml-3 block'>Skills</span></Link>
                                        <Link href="/#projects" className="flex gap-2 mb-4 text-lg items-center"><span><MdOutlineKeyboardArrowRight size={20} className='text-gray-400' /> </span> <span className='transition-all duration-300 ease-in-out  hover:ml-3 block'>Projects</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/12 w-full p-2">
                            <div className="contact-item  my-4 w-75">
                                <h4 className='text-2xl flex gap-2 items-center'>Email <FaEnvelope className='text-gray-400' /></h4>
                                <p>tik.eskanor@gmail.com</p>
                            </div>
                            <div className="contact-item  my-4 w-75">
                                <h4 className='text-2xl flex gap-2 items-center'>Whats app <IoLogoWhatsapp className='text-gray-400' /></h4>
                                <p>+234 7019393627</p>
                            </div>
                        </div>
                        <div className="md:w-3/12 w-full p-2 my-4 ">
                            <div className="contact-item">
                                <SiGithub size={40} className='mb-5 text-gray-400' />
                                <p>Check me out on <Link href="https://github.com/Tik-Eskanor" className='text-blue-700'><strong>Github</strong></Link> for more projects</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-800 max-w-[90%] mx-auto'><p className="text-center pt-4">All Rights Reserved CopyRight &copy; 2025 Eskanor Limited</p></div>
            </div>
        </section>
    )
}
