import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'


export const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Software Engineering</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom software development for web, mobile, and desktop platforms</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Software testing and quality assurance services</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Legacy system modernization and migration to new platforms</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>AI and Robotics</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> Natural language processing (NLP) solutions and Computer vision and image recognition applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Machine learning model development and deployment and Design and development of custom robots for industrial, commercial, and research applications.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Integration of sensors and other hardware components into robotic systems and Robot programming and control using languages such as Python.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Project Management</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> Project planning and scheduling services to ensure timely and efficient completion of projects</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Risk management and mitigation strategies to minimize project disruptions and delays</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Stakeholder management and communication strategies to ensure all parties are informed and engaged throughout the project lifecycle.</p>
            </li>
          </ul>
        </article>
        {/* <ListServices /> */}
      </div>
    </section>
  );
}
export default Services;