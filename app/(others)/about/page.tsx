
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6'

export default function page() {
    return (
        <section className="about about-page" id="about">
            <div className="wrapper">
                <div className="content">
                    <div className="intro">
                        <div className="">
                            <div className="flex items-center flex-wrap">
                                <div className="w-full md:w-6/12 px-7">
                                    <div className="texts mt-8 md:mt-0">
                                        <h1 className='flex gap-2'><span>!Hi again</span><img src="/images/hi.png" className="waver" /></h1>
                                        <small className="mb-2">Let me start over</small>
                                        <p>
                                            My name is <b>Oladimeji Adegboyega</b>, but you can call me <b>Eskanor</b>.<br />
                                            I am a Fullstack Web Developer Crafting Seamless Digital Experiences.

                                        </p>
                                        <p>
                                            I'm a developer with 5 years of experience
                                            building dynamic, user-focused websites and applications. I thrive at the
                                            intersection of code and creativity, turning ideas into functional, beautiful,
                                            and high-performing digital solutions. Whether it's crafting pixel-perfect frontends or architecting robust
                                            backend systems, I love bringing projects to life from start to finish.
                                        </p>
                                        <div className='mt-3 font-semibold text-xl'>Skills & Expertise</div>
                                        <ul className='mt-2'>
                                            <li><b>Frontend:</b>  [HTML, CSS, JavaScript, React, Next, TypeScript, Tailwind CSS] </li>
                                            <li><b>Backend:</b>   [Node.js, Express, PHP/Laravel]</li>
                                            <li><b>Database:</b>  [MongoDB, MySQL]</li>
                                            <li><b>Tools and Others:</b>  [Github, SEO, API development, performance optimization, responsive design]</li>
                                        </ul>

                                        <p className='mt-3'>
                                            My fullstack approach ensures I can handle every layer of development,
                                            delivering scalable and maintainable solutions tailored to desired needs.
                                        </p>
                                        <p className='mt-2'>I’m excited to help businesses and individuals bring their ideas to life. Whether you need a sleek portfolio,
                                            a robust e-commerce platform, or a custom web app, let’s connect to make it happen!
                                            Check out <Link href="/#projects" className='text-blue-700'>my projects</Link>  or <Link href="#contact" className='text-blue-700'> contact me </Link> to discuss your next big idea.</p>

                                    </div>
                                    <div className="btn-wrapper mt-5">
                                        <a href="/cv.pdf" className="btnn btnn1" download>Download CV</a>
                                        <Link href="/#about" className="btnn btnn2"><i className="fas fa-arrow-left"></i> Back</Link>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12">
                                    <div className="img-wrapper">
                                        <div className="img-overlay">
                                            <img src="/images/img2.jpg" />
                                        </div>
                                        <div className="about-social">
                                            <a href="https://web.facebook.com/profile.php?id=100091377859958" className="link-item notice2"><FaFacebook className='text-gray-400' /> </a>
                                            <a href="https://twitter.com/TEskanor79367" className="link-item notice2"><FaTwitter className='text-gray-400' /></a>
                                            <a href="https://www.linkedin.com/in/eskanor-tik-17b128271/" className="link-item notice2"><FaLinkedin className='text-gray-400' /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
