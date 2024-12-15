import React from 'react'
import resume from "../assests/resume.jpg"

const Resume = () => {
  const config = {
    link:"https://drive.google.com/file/d/1Z5UcKozpXYcKQnlaHREKbce7ymlDDK6O/view?usp=drivesdk"
  }
  return (
    <section id='resume' className='flex flex-col md:flex-row bg-primary px-5'>
        <div className=' py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={resume} alt="" />
        </div>
        <div className='md:w-1/2 flex justify-center' >
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-white text-4xl font-hero-font underline decoration-blue-900'>Resume</h1>
        <p className="pb-5 py-5 font-hero-font ">You can view my resume <a target="_blank" className='btn' href={config.link}>Download</a></p>
        </div>
        </div>
    </section>
  )
}

export default Resume