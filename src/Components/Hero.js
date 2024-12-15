import React from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import image from "../assests/myphoto2.jpg"

const Hero = () => {
  const config = {
    subtitle : "Im a Full-Stack Developer",
    github:"https://github.com/Udaya3878808?tab=repositories",
    linkedin:"https://www.linkedin.com/in/udaya-m-7b3072337"
  }
  return (
    <section className="flex flex-col md:flex-row px-5 py-16 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-white text-6xl font-hero-font py-24">
          Hi, <br /> I Am Udaya.M
          <p className="text-3xl">{config.subtitle}</p>
        </h1>
        <div className="flex ">
            <a target="_blank" href={config.github} className="pr-5 hover:text-white"><SiGithub size={40} /></a>
            <a target="_blank" href={config.linkedin} className="pr-5 hover:text-white"><FaLinkedin size={40}/></a>
        </div>
      </div>

      <img className="md:w-1/3 rounded-full" src={image} alt="" />
    </section>
  );
};

export default Hero;
