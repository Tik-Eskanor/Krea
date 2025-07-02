import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { FaHtml5 } from "react-icons/fa6";
import { ImSpinner9 } from "react-icons/im";
import { FaCss3Alt, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiPhpLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
// import { FaWordpress } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdCategory } from "react-icons/md";
import ProjectSection from '@/components/custom/ProjectSection';
import Form from "next/form"
import { BiSearch } from 'react-icons/bi';
import Footer from '@/components/custom/Footer';
import NavBar from '@/components/custom/NavBar';
import { getCategories } from '@/lib/resource/category';
import { getProjects } from '@/lib/resource/project';


export default async function page() {

    const GetCategories = getCategories()
    const GetProjects = getProjects()

    const [categoriesData, projectsData] = await Promise.all([GetCategories, GetProjects,])
    const categories = categoriesData.data
    const projects = projectsData.data

    return (
        <>
            <section className="hero">
                <div className="hero-wrapper">
                    <div id="bg"></div>
                    <div className="container md:mx-auto text-sm pl-8 md:pl-0">
                        <div className="content">
                            <h1 className='flex items-center'>Eskan <span> <ImSpinner9 size={35} className='px-[3px] ' /></span> r</h1>
                            <h2 className=''>Full Stack Developer</h2>
                            <div className="btn-wrapper">
                                <a href="CV/CV.docx" className="btn px-2 py-1 text-center mt-2 rounded" download>Download CV</a>
                            </div>
                        </div>
                        <div className="hire-me-wrapper">
                            <div className="hire-me">
                                <a href="about.php">Hire me <li className="fas fa-arror-right"></li></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <NavBar />

            <section className="about" id="about">
                <div className="wrapper">
                    <div className="content">
                        <div className="intro">
                            <div className="flex items-center flex-wrap">
                                <div className="md:w-5/12 w-full">
                                    <div className="img-wrapper">
                                        <img src="images/img1.jpg" />
                                        <div className="about-social">
                                            <a href="https://web.facebook.com/profile.php?id=100091377859958" className="link-item notice2"><FaFacebook className='text-gray-400' /> </a>
                                            <a href="https://twitter.com/TEskanor79367" className="link-item notice2"><FaTwitter className='text-gray-400' /></a>
                                            <a href="www.linkedin.com/in/eskanor-tik-17b128271" className="link-item notice2"><FaLinkedin className='text-gray-400' /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-7/12 w-full px-5 md:pl-14 pt-10 md:pt-0">
                                    <div className="texts">
                                        <h1 className='flex gap-3'><span>!Hi there </span><img src="images/hi.png" className="waver" /></h1>
                                        <small>Let me introduce myself</small>
                                        <h1>I'm Eskanor</h1>
                                        <p>
                                            I’m a fullstack web developer with 4 years of experience creating responsive,
                                            high-performance websites and apps. From sleek frontends in React and Tailwind CSS to scalable
                                            backends with Node.js and MongoDB, I bring ideas to life with clean code and a user-first mindset.
                                        </p>
                                        <p className='flex gap-2 mt-3'><FaQuoteLeft size={15} /> So relax you're in good hands. <FaQuoteRight size={15} /></p>
                                    </div>
                                    <div className="btn-wrapper mt-10">
                                        <a href="CV/CV.docx" className="btnn btnn1" download>Download CV</a>
                                        <a href="/about" className="btnn btnn2">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="why-me">
                            <h1>Why me ?</h1>
                            <div className="container mx-auto">
                                <div className="flex justify-between flex-wrap">
                                    <div className="md:w-6/12 w-full">
                                        <div className="item">
                                            <img src="images/w1.png" className="notice2" />
                                            <h3>Reliable</h3>
                                            <p>Nothing beats reliability. Coming through  at the scheduled delivery date.</p>
                                        </div>
                                    </div>
                                    <div className="md:w-6/12 w-full">
                                        <div className="item">
                                            <img src="images/w2.png" className="notice2" />
                                            <h3>Creative</h3>
                                            <p>Creativity being the backbone for building and innovation is one of my greatest qualities.</p>
                                        </div>
                                    </div>
                                    <div className="md:w-6/12 w-full">
                                        <div className="item">
                                            <img src="images/w3.png" className="notice2" />
                                            <h3>Team player</h3>
                                            <p>Interactive team player. Always looking forward to collaborate and share ideas for effective solutions</p>
                                        </div>
                                    </div>
                                    <div className="md:w-6/12 w-full">
                                        <div className="item">
                                            <img src="images/w4.png" className="notice2" />
                                            <h3>Deligent</h3>
                                            <p>Very hard working. Never quite untill the job is done and delivered.</p>
                                        </div>
                                    </div>
                                    <div className="md:w-6/12 w-full">
                                        <div className="item">
                                            <img src="images/w5.png" className="notice2" />
                                            <h3>Multi-task Agent</h3>
                                            <p>Work in a fast paced enviroment while handling multiple tasks simultaneously</p>
                                        </div>
                                    </div>
                                    <div className="md:w-6/12 w-full">
                                        <div className="item">
                                            <img src="images/w6.png" className="notice2" />
                                            <h3>Resourceful</h3>
                                            <p>Facing challenges is part of the job, and i overcome them with my resourcefulness</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="skills mt-10" id="skills">
                <div className="container mx-auto md:px-0 px-3">

                    <div className="flex justify-center flex-wrap">
                        <div className="md:w-4/12 w-full p-3 flex justify-center items-center">
                            <div>
                                <h2>Skills</h2>
                            </div>
                        </div>
                        <div className="md:w-4/12 w-full p-3">
                            <div className="skill-item my-3">
                                <div><FaHtml5 className='relative z-[1] left-2 top-3' size={43} /></div>
                                <h4 className="my-3">HTML</h4>
                                <p>Implement latest HTML 5 features. This will make you application stand out among others.</p>
                            </div>
                        </div>
                        <div className="md:w-4/12 w-full p-3">
                            <div className="skill-item my-3">
                                <div><FaCss3Alt className='relative z-[1] left-2 top-3' size={43} /></div>
                                <h4 className="my-3">CSS</h4>
                                <p>Attractive user-friendly interfaces, structured layout, mobile responsitivity, all with CSS 3.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-4/12 w-full p-3">
                            <div className="skill-item my-3">
                                <div><RiTailwindCssFill className='relative z-[1] left-2 top-3' size={43} /></div>
                                <h4 className="my-3">TAILWIND</h4>
                                <p>Mobile first user-friendly interfaces, for enhanced user experience with tailwnind's latest features.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-4/12 w-full p-3">
                            <div className="skill-item my-3">
                                <div><FaBootstrap className='relative z-[1] left-2 top-3' size={43} /></div>
                                <h4 className="my-3">Bootstrap</h4>
                                <p>
                                    With pre-styled components, bootstrap provides structured layouts without writing extensive custom CSS.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-4/12 w-full p-3">
                            <div className="skill-item my-3">
                                <div><IoLogoJavascript className='relative z-[1] left-2 top-3' size={43} /></div>
                                <h4 className="my-3">JS</h4>
                                <p>Increase user interactivity and functionality with latest JAVA SCRIPT features
                                    and plugins.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-4/12 w-full p-3">
                            <div className="skill-item my-3">
                                <div><FaReact className='relative z-[1] left-2 top-3' size={43} /></div>
                                <h4 className="my-3">REACT</h4>
                                <p> Create reusable UI components for single-page applications with this popular javascript library.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-4/12 w-full p-3">
                            <div className="skill-item my-3">
                                <div><SiNextdotjs className='relative z-[1] left-2 top-3' size={43} /></div>
                                <h4 className="my-3">NEXT</h4>
                                <p>
                                    Build fullstack scalable web applications with react's amazing framework for client and server side integrations.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-4/12 w-full p-3">
                            <div className="skill-item my-3">
                                <div><FaNodeJs className='relative z-[1] left-2 top-3' size={43} /></div>
                                <h4 className="my-3">Node</h4>
                                <p>Build scalable, real-time applications like APIs, web servers, or streaming services with node js.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-4/12 w-full p-3">
                            <div className="skill-item my-3">
                                <div><SiExpress className='relative z-[1] left-2 top-3' size={43} /></div>
                                <h4 className="my-3">Express</h4>
                                <p>
                                    A flexible Node.js web application framework that simplifies building server-side applications and APIs.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-4/12 w-full p-3">
                            <div className="skill-item my-3">
                                <div><SiMongodb className='relative z-[1] left-2 top-3' size={43} /></div>
                                <h4 className="my-3">MONGO DB</h4>
                                <p>NoSQL database designed for scalability, high performance making it ideal for handling unstructured data.

                                </p>
                            </div>
                        </div>
                        <div className="md:w-4/12 w-full p-3">
                            <div className="skill-item my-3">
                                <div><RiPhpLine className='relative z-[1] left-2 top-3' size={43} /></div>
                                <h4 className="my-3">PHP</h4>
                                <p>
                                    Handle payment integrations and other server-side integrations with PHP and it's LARAVEL framework.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-4/12 w-full p-3">
                            <div className="skill-item my-3">
                                <div><FaLaravel className='relative z-[1] left-2 top-3' size={43} /></div>
                                <h4 className="my-3">LARAVEL</h4>
                                <p>
                                    A popular PHP framework for building web applications, known for its robust features, and developer-friendly tools.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-4/12 w-full p-3">
                            <div className="skill-item my-3">
                                <div><SiMysql className='relative z-[1] left-2 top-3' size={43} /></div>
                                <h4 className="my-3">MYSQL</h4>
                                <p>
                                    A relational database management system, for storing, managing, and retrieving data using SQL.
                                </p>
                            </div>
                        </div>
                        {/* <div className="md:w-4/12 w-full p-3">
            <div className="skill-item my-3">
                <div><FaWordpress className='relative z-[1] left-2 top-3' size={43} /></div>
                <h4 className="my-3">Wordpress</h4>
                <p>
                    Build stunning websites with Wordpress. 
                    Amazing themes, awesome plugins will get your web app running in no time
                </p>
            </div>
        </div> */}
                        <div className="md:w-4/12 w-full p-3">
                            <div className="skill-item my-3">
                                <div><FaGitAlt className='relative z-[1] left-2 top-3' size={43} /></div>
                                <h4 className="my-3">Git & GITHUB</h4>
                                <p>
                                    For version control and collaborative software development, track changes, and manage code repositories.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="projects py-5" id="projects">
                <div className="container mx-auto md:px-0 px-3">
                    <div className="project-intro mb-1 px-2">
                        <h2 className="font-bold text-3xl">Projects</h2>
                        <div className="flex justify-between mb-8">
                            <h5 className="pt-2 flex gap-1 items-end  "><MdCategory size={18} /> <span>Categories</span> </h5>
                            {/* <div className="max-w-[600px] flex-1 mt-4 md:mt-0">
                                <Form action="/" scroll={false} className='py-[9px] px-4 border border-gray-300 bg-gray-200 flex items-center w-[100%] rounded-full shadow-md'>
                                    <input type="text" className='flex-1' name="query" />
                                    <button type='submit'>
                                        <BiSearch size={20} className='text-blue-800  cursor-pointer' />
                                    </button>
                                </Form>
                            </div> */}
                        </div>
                    </div>
                    <ProjectSection projects={projects} categories={categories} />
                </div>
            </section>
            <Footer />
        </>
    )
}
