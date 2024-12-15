import React from 'react'

const About = () => {
  const config = {
    line1:"Hi,My name is udaya.M,I am a Full stack web developer. I built beautiful websites with MERN stack.",
    line2:"I am Proficient in Frontend skills like HTML,CSS,JavaScript,React.js,Redux.",
    line3:"In Backend I Know node.js,Express.js,MongoDb and Mongoose."
  }
  return (
    <section id='about' className='bg-primary' >
        <div >
        <div className='text-center text-white text-2xl font-hero-font'>
        <h1 className='text-white text-4xl font-hero-font underline decoration-blue-900'>About Me</h1>
        <p className="pb-5 py-5">{config.line1}</p>
        <p className='pb-5'>{config.line2}</p>
         <p className='pb-5'>{config.line3}</p>
        </div>
        </div>
    </section>
  )
}

export default About