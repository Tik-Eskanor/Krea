"use client"
import React, { useState } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import Link from 'next/link';


export default function MenuBtn() {
  const [active, setActive] = useState(false)
  return (
    <>
      <div onClick={() => setActive(true)} className="menu-wrapper cursor-pointer">
        <RiMenu3Line size={27} />
      </div>
      <nav id="nav" className={`h-[0px] ${active && "h-screen"}`}>
        <ul>
          <li onClick={() => setActive(false)}><Link href="/">Home</Link></li>
          <li onClick={() => setActive(false)}><Link href="/#about">About</Link></li>
          <li onClick={() => setActive(false)}><Link href="/#skills">Skills</Link></li>
          <li onClick={() => setActive(false)}><Link href="/#projects">Projects</Link></li>
          <li onClick={() => setActive(false)}><Link href="#contact">Contact</Link></li>
        </ul>
        <div className="about-social">
          <a href="https://web.facebook.com/profile.php?id=100091377859958" className="link-item notice2"><FaFacebook className='text-gray-400' /> </a>
          <a href="https://twitter.com/TEskanor79367" className="link-item notice2"><FaTwitter className='text-gray-400' /></a>
          <a href="www.linkedin.com/in/eskanor-tik-17b128271" className="link-item notice2"><FaLinkedin className='text-gray-400' /></a>
        </div>
        <div onClick={() => setActive(false)} className="absolute top-10 right-10 cursor-pointer">
          <IoIosCloseCircleOutline size={30} className='text-gray-400' />
        </div>
      </nav>
    </>

  )
}
