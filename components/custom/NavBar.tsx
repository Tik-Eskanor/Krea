import React from 'react'
import { ImSpinner9 } from "react-icons/im";
import Link from 'next/link';
import MenuBtn from "./MenuBtn";

export default function NavBar() {
  return (
    <section className="navigation-bar stickyy">
         <div className="logo">
             <Link href="/" className="flex items-center"><span className="font-extrabold">E</span>skan  <span> <ImSpinner9 size={25} className='px-[3px] ' /></span> r</Link>
         </div>
         <MenuBtn/>
    </section>
  )
}
