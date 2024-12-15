import React from "react";
import artVista from "../assests/artVista.jpeg";
import booking from "../assests/booking.jpeg";
import chatApp from "../assests/chatApp.jpeg";

const Projects = () => {
  const config = {
    projects: [
      {
        image: artVista,
        description:
          "A ArtVista Gallary - Ecommerce Website. Build with MERN Stack",
        link: "https://github.com/Udaya3878808/ArtVista_Gallary_Project",
      },
      {
        image: booking,
        description:
          "A Student and Teacher booking Appoitment. Build with MERN Stack",
        link: "https://github.com/Udaya3878808/Student_Teacher_Booking_Appoitment",
      },
      {
        image: chatApp,
        description: "A Simple Chat Application. Build with MERN Stack",
        link: "https://github.com/Udaya3878808/Chat_app_Mern",
      },
    ],
  };
  return (
    <section
      id="projects"
      className="flex flex-col py-20 px-5 justify-center bg-secondary text-white"
    >
      <div className="w-full">
        <div className="flex flex-col px-20 py-5">
          <h1 className="text-white text-4xl font-hero-font underline decoration-blue-600">
            Projects
          </h1>
          <p className=" font-hero-font">
            These are some of my best Projects . I have built these with MERN
             ,CSS and tailwind css.Check them out.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-20 gap-10">
          {config.projects.map((project) => (
            <div className="relative">
              <img className="h-[350px] w-[500px]" src={project.image} alt="" />
              <div className="project-desc">
                <p className="text-center font-hero-font px-5 py-20">{project.description}</p>
                <div className="flex justify-center">
                  <a className="btn font-hero-font" target="_blank" href={project.link}>
                    view Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
