import React from "react";

const Contact = () => {
  const config = {
    email:"udaya3878808@gmail.com",
    phone:"9113878808"
  }
  return (
    <section id="contact" className="flex flex-col bg-primary px-5 py-5 text-white">
      <div className=" flex flex-col items-center">
        <h1 className="text-white text-4xl font-hero-font underline decoration-blue-900">
          Contact
        </h1>
        <p className=" font-hero-font pb-5 py-5">
          If you want to discuss more in details, please contact me
        </p>
        <p className="py-2"><span className="font-hero-font">Email : </span>{config.email}</p>
        <p className="py-2"><span className="font-hero-font">Phone : </span>{config.phone}</p>
      </div>
    </section>
  );
};

export default Contact;
