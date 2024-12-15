import React, { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
  <header className="flex justify-between px-5 py-5 bg-secondary">
    <a className="text-white text-3xl font-hero-font" href="#">Udaya.M</a>
    <nav className="hidden md:block">
    <ul className="flex text-white text-2xl font-hero-font">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Project</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    </nav>
    {toggleMenu && <nav className="block md:hidden">
    <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Project</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    </nav>}
    <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
        <Bars3Icon className="text-white h-5"/>
    </button>
  </header>
  )
};

export default Header;
