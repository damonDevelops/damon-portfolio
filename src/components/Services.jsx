import React from "react";

const Services = () => {
  // services details
  const services = [
    {
      name: "Frontend Design",
      desc: "I'm familiar with tools like Figma which allow me to create fantastic looking concepts. This allows you to pick and choose how you want the website to look before I've even written a line of code.",
      icon: "fas fa-palette",
    },
    {
      name: "Backend Development",
      desc: "Although I favour frontend development, I'm proficient in full stack development and can build an application from the ground up if needed.",
      icon: "fas fa-desktop",
    },
    {
      name: "UI/UX Design",
      desc: "I've always had a keen interest in User Interface and User Experience and I believe it is the most important part of a finished product.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Leadership",
      desc: "I've been the leader or co-leader on many projects and I believe it's my strongest asset in software development.",
      icon: "fas fa-paint-brush",
    },
    {
      name: "Continuous Learning",
      desc: "I love keeping up to date with the newest trends in software development, striving to constantly update my portfolio with new projects that utilise new technologies.",
      icon: "fas fa-chart-area",
    },
    {
      name: "Coding Skills",
      desc: "I believe I've learnt enough coding languages that I'm adaptable and efficient in learning kew ones. Check my skills out below!",
      icon: "fas fa-bullhorn",
    },
  ];

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">What I Do?</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          How I can help your next project
        </h2>
        {/* Heading end*/}
        <div className="row gy-5 mt-5">
          {services.length > 0 &&
            services.map((service, index) => (
              <div className="col-sm-6 col-lg-4 wow fadeInUp" key={index}>
                <div className="featured-box text-center px-md-4">
                  <div className="featured-box-icon text-primary text-13">
                    {" "}
                    <i className={service.icon} />
                  </div>
                  <h3 className="text-6 fw-600 mb-3">{service.name}</h3>
                  <p className="text-muted mb-0">{service.desc} </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
