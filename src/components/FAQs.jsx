import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQs = () => {
  const faqsData = [
    {
      question: "What can I do?",
      answer:
        "The question is not what can I do but what aren't I willing to learn, the answer to which is nothing! I pride myself on my quick learning ability, when given the right guidance and resources. I really enjoy frontend development and I like where some of the new CSS frameworks are heading, the internet needs another revamp! I can also do backend development so I am a qualified fullstack engineer when required!",
    },
    {
      question: "What are my interests?",
      answer:
        "Outside of developing, I really like gaming (I know, really contributing to the nerd stereotype). I also like playing guitar which I'm pretty good at (less nerdy), and also getting to the gym or training for events whenever I can. I recently completed my first half marathon and I reckon that has to put me in a small category of software developers who've completed one!",
    },
    {
      question: "What's my best quality?",
      answer:
        "Communication. I truly believe the key to success in software development (or any area of work) is quality communication. I can see myself becoming a leader or project manager in the future as I enjoy overseeing projects, talking with people and working out the big problems people have. I've led most of my university projects and was a leader throughout high school in areas like basketball captaincy and school prefect.",
    },
    {
      question: "Where do I see myself in 10 years?",
      answer:
        "Hopefully retired with a superyacht because I sold some code to Google (this is a joke). Realistically I would like to have experience in various fields but would love to work my way up from Junior Developer to Senior Developer at a new or upcoming startup that I'm passionate about and align with. If that's you, and you think I'm a good fit for that, please email me or message me so we can have a chat!",
    },
  ];

  return (
    <section id="faq" className="section bg-light">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6 order-1 order-lg-0 wow fadeInUp">
            {/* Heading */}
            <p className="text-center text-lg-start mb-2">
              <span className="bg-primary text-dark px-2">FAQ</span>
            </p>
            <h2 className="text-10 fw-600 text-center text-lg-start mb-5">
              Have any questions?
            </h2>
            {/* Heading end*/}

            <Accordion flush defaultActiveKey="0">
              {faqsData.length > 0 &&
                faqsData.map((faq, index) => (
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></Accordion.Body>
                  </Accordion.Item>
                ))}
            </Accordion>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 wow fadeIn"
            data-wow-delay="1s"
          >
            {" "}
            <img
              className="img-fluid"
              src="images/faq.png"
              title="FAQ"
              alt="faq"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
