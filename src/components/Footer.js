import Link from 'next/link';
import React from 'react'
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
// import { Typewriter } from "react-simple-typewriter";


const Footer = () => {
  return (
    <div className='w-screen flex flex-col justify-center items-center relative h-[300px] gap-6'>
         <div className="h-[1px] w-80 bg-gray-500"></div>
      <h1 className="text-3xl ">
        Susmita<span className="text-blue-500">Raha</span>.
      </h1>
      <div className="flex min-w-[200px] max-w-[400px] justify-between">
      <Link href="https://github.com/Susmita0610" target='_blank' rel="noreferrer" className=""><BsGithub   className="text-[25px] xl:text-[30px] z-40 hover:cursor-pointer hover:scale-105 dark:text-gray-400 text-gray-600" /></Link>
          <Link href="https://www.instagram.com/susmita0610/profilecard/?igsh=MXFoOHhldWdvM21ueA==" target='_blank' rel="noreferrer" className=""><BsInstagram className="text-[25px] xl:text-[30px] z-40 hover:cursor-pointer hover:scale-105 dark:text-gray-400 text-gray-600" /></Link>
          <Link href="https://www.linkedin.com/in/susmita-raha-754847319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noreferrer" className=""><FaLinkedin className="text-[25px] xl:text-[30px] z-40 hover:cursor-pointer hover:scale-105 dark:text-gray-400 text-gray-600" /></Link>
        </div>
        <div className="font-rob text-sm">Designed & Built by Susmita Raha &#169; 2024</div>
    </div>
  )
}

export default Footer