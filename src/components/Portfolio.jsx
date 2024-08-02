import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = () => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const htmlElement = document.getElementsByTagName("html")[0];
  const isRtl = htmlElement.getAttribute("dir") === "rtl";

  const filters = {
    PROJECTS: "Projects",
    PERSONAL: "Personal Projects",
    // YOUTUBE: "Youtube Videos",
    // VIMEO: "Vimeo Videos",
  };

  const types = {
    IMAGE: "image",
    VIDEO: "video",
    DOCUMENT: "document",
  };

  const projectsData = [
    {
      title: "IDentify",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "My best project to date. Our system allows businesses to provide customers with QR codes. The customer can then take or upload an image of their drivers license to be scanned and added to the system, no paper required. We finished 2nd at the annual UOW SCIT Tradeshow with this project.",
        client: "CSIT321 - Dr John Le",
        technologies:
          "TypeScript, Angular, Java Spring Boot, Python, YOLACT, OpenCV, EasyOCR",
        features:
          "Machine learning 0 shot classification, real time API backend integrated with fronted. User form automation using DocXTemplater.",
        date: "2023",
        url: {
          name: "www.identify.rodeo",
          link: "https://www.identify.rodeo",
        },

        sliderImages: [
          "images/projects/identify/2.jpg",
          "images/projects/identify/3.jpg",
          "images/projects/identify/5.jpg",
          "images/projects/identify/7.jpg",
          "images/projects/identify/10.jpg",
          "images/projects/identify/12.jpg",
          "images/projects/identify/13.jpg",
          "images/projects/identify/16.jpg",
        ],
      },

      thumbImage: "images/projects/identify/15.jpg",

      categories: [filters.PROJECTS],
    },
    {
      title: "Tradie Connect",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Tradie Connect is a three user based system connecting tradies to customer jobs, with an admin that can view statistics and generate reports. TradieConnect allows a customer to broadcast a job which service providers can apply for and complete, and the customer can review the Tradie also.",
        client: "CSIT314",
        technologies: "React, JavaScript, Java Spring Boot, Python",
        features:
          "Three user based system, three seperate interfaces. User Authentication. User Routing. Realtime API updates. PDF Report Generation",
        date: "2023",
        url: {
          name: "Tradie Connect Github",
          link: "https://github.com/damonDevelops/Tradie-Connect",
        },
        sliderImages: [
          "images/projects//tradieConnect/1.jpg",
          "images/projects//tradieConnect/2.jpg",
          "images/projects//tradieConnect/3.jpg",
          "images/projects//tradieConnect/8.jpg",
          "images/projects//tradieConnect/12.jpg",
          "images/projects//tradieConnect/7.jpg",
        ],
      },
      thumbImage: "images/projects//tradieConnect/17.jpg",
      categories: [filters.PROJECTS],
    },
    {
      title: "Mercury",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "A microservice based web app for a cycling company. Allows the user to create, buy and store parts and update inventory numbers all in seperate microservices. Uses Apache Kafka for instant realtime processing.",
        client: "CSIT318",
        technologies: "React, JavaScript, Apache Kafka, Java Spring Boot",
        features:
          "Realtime data streaming using Kafka, realtime data display using React, admin panel for software overview.",
        date: "July 16, 2019",
        url: {
          name: "Mercury Github",
          link: "https://github.com/jjcoop/mercu",
        },
        sliderImages: [
          "images/projects/mercury/1.jpg",
          "images/projects/mercury/3.jpg",
          "images/projects/mercury/4.jpg",
          "images/projects/mercury/5.jpg",
        ],
      },
      thumbImage: "images/projects/mercury/2.jpg",
      categories: [filters.PROJECTS],
    },
    {
      title: "Fly Dream Air",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "A simple website to mock a airline booking service. Allows users to book seats on single or return flights, add extras and manage their bookings. A project built shortly after learning to code (really shows how far I've come as a developer)!",
        client: "CSIT214",
        technologies: "HTML, JavaScript, CSS",
        features: "No frotend framework, localStorage, text file download",
        date: "2021",
        url: {
          name: "FlyDreamAir Github",
          link: "https://github.com/damonDevelops/FlyDreamAir",
        },
        sliderImages: [
          "images/projects/flyDreamAir/1.jpg",
          "images/projects/flyDreamAir/3.jpg",
          "images/projects/flyDreamAir/4.jpg",
          "images/projects/flyDreamAir/5.jpg",
          "images/projects/flyDreamAir/6.jpg",
          "images/projects/flyDreamAir/7.jpg",
        ],
      },
      thumbImage: "images/projects/flyDreamAir/2.jpg",
      categories: [filters.PROJECTS],
    },
    {
      title: "AFL Scores",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "A personal project I developed to view completed, live and future AFL games on my Garmin watch. I found it frustrating that no one had developed this app so I decided to publish one myself!",
        client: "Myself!",
        technologies: "Monkey C",
        features:
          "Live API calls, Up to date information, intricate error handling, device scaling settings",
        date: "2024",
        url: {
          name: "AFL Scores",
          link: "https://apps.garmin.com/en-US/apps/fdc97ea4-f26c-4170-9f0a-68bb443fc090",
        },
        sliderImages: [
          "images/projects/aflScores/GamesMenu.png",
          "images/projects/aflScores/GameView.png",
          "images/projects/aflScores/MainMenu.png",
          "images/projects/aflScores/UpcomingGameView.png",
          "images/projects/aflScores/UpcomingMenu.png",
        ],
      },
      thumbImage: "images/projects/aflScores/GameView.png",
      categories: [filters.PERSONAL],
    },
    {
      title: "Secret Santa Message Service",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "A personal project I made to do our family secret santa every year. I was sick of someone having to organise it and them know who everyone had. My system uses Twilio so everyone gets sent a message with their secret santa.",
        client: "Myself!",
        technologies: "Python, PyQt5, Twilio",
        features:
          "Couples or individuals, easy to use desktop interface, Twilio messaging, CSV import for easy loading of more people or couples.",
        date: "2022",
        url: {
          name: "Secret Santa Github",
          link: "https://github.com/damonDevelops/python_projects",
        },
        sliderImages: ["images/projects/secretSanta/2.jpg"],
      },
      thumbImage: "images/projects/secretSanta/1.jpg",
      categories: [filters.PERSONAL],
    },
    {
      title: "Google Calendar Weekly Reminder Email",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "I can be forgetful when it comes to actually viewing my events on Google Calendar for each week or even the following day. I wrote a script to send myself an email each week with a summary of my events, as well as my partner's events.",
        client: "Myself!",
        technologies:
          "Python, Google Cloud Functions, Google Cloud Scheduler, Email",
        features:
          "Integrates multiple calendar's, automatic email delivery, Google IAM permissions and authentication",
        date: "2024",
        url: {
          name: "Google Calendar Reminder Github",
          link: "https://github.com/damonDevelops/WeeklyGoogleCalendarEmailAutomation",
        },
      },
      thumbImage: "images/projects/weeklyCalendar/1.png",
      categories: [filters.PERSONAL],
    },
    {
      title: "Nightly Discord Google Calendar Reminder",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Every night at 7PM, I run a script hosted and scheduled on Google Cloud Platform which sends a discord message to a dedicated discord channel. This means I never even have to open the Google Calendar app. I probably could have saved time by just using the calendar like a normal person but coding is fun.",
        client: "Myself!",
        technologies:
          "Python, Google Cloud Functions, Google Cloud Scheduler, Discord Python API",
        features:
          "Integrates multiple calendar's, Scheduled Discord Delivery, Google IAM permissions and authentication",
        date: "2024",
        url: {
          name: "Discord Calendar Reminder Github",
          link: "https://github.com/damonDevelops/DiscordCalenderReminderWebhook",
        },
      },
      thumbImage: "images/projects/discordCalendar/1.png",
      categories: [filters.PERSONAL],
    },

    // {
    //   title: "YouTube Video",
    //   type: types.VIDEO,
    //   video: {
    //     vimeo: false,
    //     id: "PMNnEEEacCg",
    //   },
    //   thumbImage: "images/projects/project-3.jpg",

    //   categories: [filters.YOUTUBE],
    // },
    // {
    //   title: "Vimeo Video",
    //   type: types.VIDEO,
    //   video: {
    //     vimeo: true,
    //     id: "259411563",
    //   },

    //   thumbImage: "images/projects/project-4.jpg",
    //   categories: [filters.VIMEO],
    // },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
      originLeft: !isRtl,
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  const getKeyByValue = (value) => {
    return Object.keys(filters).find((key) => filters[key] === value);
  };

  const getFilterClasses = (categories) => {
    if (categories.length > 0) {
      let tempArray = [];
      categories.forEach((category, index) => {
        tempArray.push(getKeyByValue(category));
      });
      return tempArray.join(" ");
    }
  };

  return (
    <>
      <section id="portfolio" className={"section"}>
        <div className={"container"}>
          {/* Heading */}
          <p className="text-center mb-2 wow fadeInUp">
            <span className="bg-primary text-dark px-2">Portfolio</span>
          </p>
          <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
            Some of my most recent projects
          </h2>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs fw-600 justify-content-start justify-content-md-center border-bottom-0 mb-5 wow fadeInUp"
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " + (filterKey === oneKey ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(oneKey)}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio wow fadeInUp">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      getFilterClasses(project.categories)
                    }
                    key={index}
                  >
                    <div className="portfolio-box">
                      <div className="portfolio-img">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div
                          className="portfolio-overlay"
                          onClick={() => {
                            setSelectedProjectDetails(projectsData[index]);
                            setIsOpen(true);
                          }}
                        >
                          <button className="popup-ajax stretched-link border-0 p-0 ">
                            {" "}
                          </button>
                          <div className="portfolio-overlay-details">
                            <p className="text-primary text-8">
                              {project.type === types.DOCUMENT && (
                                <i className="fas fa-file-alt"></i>
                              )}
                              {project.type === types.IMAGE && (
                                <i className="fas fa-image"></i>
                              )}
                              {project.type === types.VIDEO && (
                                <i className="fas fa-video"></i>
                              )}
                            </p>
                            <h5 className="text-white text-5">
                              {project?.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      {isOpen && (
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          setIsOpen={setIsOpen}
        ></ProjectDetailsModal>
      )}
    </>
  );
};

export default Portfolio;
