import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = () => {
  const educationDetails = [
    {
      yearRange: "2013 - 2018",
      title: "High School Certificate",
      place: "Shellharbour Anglican College",
      desc: "I graduated as a school prefect, basketball captain and on the HSC honour roll. I enjoyed applying myself both academically and outside the classroom too. I was also ICT student of the year for the Wollongong region in 2018",
    },
    {
      yearRange: "2020 - 2023",
      title: "Bachelor of Computer Science (Distinction) - Software Engineer Major",
      place: "University of Wollongong",
      desc: "Recently graduated with Distinction, our group finished 2nd out of 25 in the capstone project for our project 'IDentify' which I'm very proud of. I retained a weighted average mark of 84 across my degree and have shown competency in various areas of study. ",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2023 - Current",
      title: "Bartender",
      place: "The Scarborough Hotel",
      desc: "A high volume restaurant on the waterfront, The Scarborough services various customers with meals and beverages. I'm currently responsible for running an outdoor bar, which I do so with pleasure!",
    },
    {
      yearRange: "2021 - 2023",
      title: "Bartender",
      place: "La La La's",
      desc: "A live music venue serving beer, wine, spirits and cocktails, working at La La La's gave me invaluable experience at customer service and fast problem solving skills.",
    },
    {
      yearRange: "2020-2021",
      title: "Delivery Driver",
      place: "Pinnochios Pizza Albion Park",
      desc: "A busy pizza franchise, I was responsible for fast delivery of hot food and customer service in store. I also helped install and oversaw the installation of a new POS system for the business.",
    },
    {
      yearRange: "June 2019",
      title: "Consultant (work experience)",
      place: "Interbit Computing",
      desc: "Interbit computing are a computer repair shop that deal with both software and hardware issues. Was responsible for assisting with various jobs like data recovery, malware removal and networking issues.",
    },
  ];

  const skills = [
    {
      name: "Web Design",
      percent: 65,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Angular Js",
      percent: 60,
    },
    {
      name: "Bootstrap",
      percent: 99,
    },
  ];

  return (
    <section id="resume" className="section bg-light">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">Resume</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          A summary of My Resume
        </h2>
        {/* Heading end*/}
        <div className="row g-5 mt-5">
          {/* My Education */}
          <div className="col-lg-6 wow fadeInUp">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Education</h2>
            <div className="border-start border-2 border-primary ps-3">
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
          {/* My Experience */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Experience</h2>
            <div className="border-start border-2 border-primary ps-3">
              {experienceDetails.length > 0 &&
                experienceDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* My Skills */}
        {/* <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div className="col-md-6 wow fadeInUp" key={index}>
                <p className="fw-500 text-start mb-2">
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div className="progress progress-sm mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div> */}
        <p className="text-center mt-5 wow fadeInUp">
          <a
            className="btn btn-outline-dark shadow-none rounded-0"
            href={resumeFile}
            download
          >
            Download CV
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
