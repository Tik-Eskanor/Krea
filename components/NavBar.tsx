import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import { MdHomeFilled, } from 'react-icons/md';
import { FaBell, FaFolder, FaRegImage, FaVideo, FaWandMagicSparkles } from 'react-icons/fa6';
import { TbBallpenFilled } from "react-icons/tb";
import { CiPen } from "react-icons/ci";
import { RiImageAiFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function NavBar() {
  return (
    <section className='mt-2 px-3 md:px-0'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-5 items-center'>
          <Image src="/logo.png" className="flex items-center" alt='logo' width={50} height={50} />
          <div className='flex gap-2 items-center'>
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-300 to-blue-400 "></div>
            <span>benevolent</span>
            <IoIosArrowDown />
          </div>
        </div>

        <div className='hidden md:flex gap-3 bg-secondary rounded-xl p-[7px]'>
          <span className='hover:bg-white hover:text-black px-3 py-[6px] rounded-lg cursor-pointer transition-all duration-300 '><MdHomeFilled size={21} /></span>
          <span className='hover:bg-white hover:text-black px-3 py-[6px] rounded-lg cursor-pointer transition-all duration-300 '><FaRegImage size={21} /></span>
          <span className='hover:bg-white hover:text-black px-3 py-[6px] rounded-lg cursor-pointer transition-all duration-300 '><FaVideo size={21} /></span>
          <span className='hover:bg-white hover:text-black px-3 py-[6px] rounded-lg cursor-pointer transition-all duration-300 '><FaWandMagicSparkles size={21} /></span>
          <span className='hover:bg-white hover:text-black px-3 py-[6px] rounded-lg cursor-pointer transition-all duration-300 '><TbBallpenFilled size={21} /></span>
          <span className='hover:bg-white hover:text-black px-3 py-[6px] rounded-lg cursor-pointer transition-all duration-300 '><CiPen size={21} /></span>
          <span className='hover:bg-white hover:text-black px-3 py-[6px] rounded-lg cursor-pointer transition-all duration-300 '><FaFolder size={21} /></span>
        </div>

        <div className='flex gap-3 items-center'>
          <Link href="" className='hidden md:flex bg-secondary px-2 py-1 text-sm rounded-lg  gap-1 font-medium items-center'><RiImageAiFill size={21} /> Gallery</Link>
          <Link href="" className='hidden md:flex bg-secondary px-2 py-1 text-sm rounded-lg  gap-1 font-medium items-center'><BiSupport size={21} /> Support</Link>
          <span className='bg-secondary p-[7px] rounded-full cursor-pointer'><FaBell size={14} /></span>
          <DarkModeSwitch />
          <div className="hidden md:block w-6 h-6 rounded-full bg-gradient-to-tr from-blue-400 to-blue-500 "></div>
        </div>
      </div>


    </section>
  )
}
