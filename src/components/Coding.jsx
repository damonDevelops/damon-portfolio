import React from "react";

const Coding = () => {
  // services details
  const services = [
    {
        name: "Angular",
        desc: "I've only built one project in Angular but it was my best - IDentify. I feel I have the greatest experience with Angular, and I'm confident using it.",
        icon: "fab fa-angular",
      },
    {
      name: "React",
      desc: "I've used React for an array of dashboard based projects (this page was built with it). It's simple learning curve hooked me on frontend development, and I love the integratio capabilities is has.",
      icon: "fab fa-react",
    },
    {
      name: "JavaScript / TypeScript",
      desc: "I originally feared JS and TS but man are they powerful. I've traditionally used JavaScript with my React projects and TypeScript with my Angular projects so I'm familiar with both.",
      icon: "fab fa-js",
    },
    {
      name: "Java (Spring Boot)",
      desc: "Ah good old Java aye? This was my first programming language I learnt (outside of HTML), and it nearly made me give up programming altogether. However recent experience usign it for backend development has been excellent, it really is powerful!",
      icon: "fab fa-java",
    },
    {
      name: "Python",
      desc: "Python, the programming language of the future! I took Python 101 as an elective subject and obtained a high distinction in it. I've used Python for a few personal projects (Secret Santa), but would love to get more professional experience with it.",
      icon: "fab fa-python",
    },
    {
      name: "SQL / NoSQL",
      desc: "Databases are my least favourite part of programming, but I understand how important they are. I've used various databases like PostgreSQL, MySQL, Oracle, MongoDB, you name it I've tried it. Not my strongest area but I'm more than capable whe given the right tools.",
      icon: "fas fa-database",
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">What I Know?</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          The Techology I'm Familiar With
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

export default Coding;
