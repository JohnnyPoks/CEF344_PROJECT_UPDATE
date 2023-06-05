import React from 'react'
import './about.css'
import moi from '../../assets/changer1.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={moi} alt="Poks"/>
          </div>
        </div>
        <div className="about__me__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10 world widely</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Hello there! I am a young software engineering student who is currently enrolled at the Faculty of Engineering and Technology (FET) at the
            University of Buea. Although I have just a little experience with the latest technologies, I have a strong desire and willingness
            to learn more and become a skilled engineer. I am passionate about software engineering and I am committed to continually improving my
            skills and knowledge. While I may not have extensive experience yet, I am eager to take on new challenges and projects to help me grow and
            develop as an engineer. Thank you for taking the time to read about me, and I look forward to connecting with you!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About
