import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./portfolio.css";
// import img1 from "../../assets/changer1.png";
// import img2 from "../../assets/changer1.png";
// import img3 from "../../assets/changer1.png";
// import img5 from "../../assets/changer1.png";
// import img6 from "../../assets/changer1.png";
// import img7 from "../../assets/changer1.png";
// import img8 from "../../assets/changer1.png";
// import img9 from "../../assets/changer1.png";
// import ListPortfolio from "./listPortfolio";

export const Portfolio = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/portfolio").then(response => {
      const formattedData = response.data.data.map(item => ({
        id: item._id,
        image: item.image,
        title: item.title,
        github: item.github,
        demo: item.demo
      }));
      setData(formattedData)
    }).catch(error => {
      console.log("Error fetching portfolio data:", error);
    })
  }, [])

  // const portfolioContent = [
  //   {
  //     image: img1,
  //     github: 'https://github.com',
  //     demo: 'https://google.com',
  //     id: 1,
  //     title: 'Project 1'
  //   },
  //   {
  //     image: img2,
  //     github: 'https://github.com',
  //     demo: 'https://google.com',
  //     id: 2,
  //     title: 'Project 2'
  //   },
  // {
  //   image: img3,
  //   github: 'https://github.com',
  //   demo: 'https://google.com',
  //   id: 4,
  //   title: 'Project 4'
  // },
  // {
  //   image: img5,
  //   github: 'https://github.com',
  //   demo: 'https://google.com',
  //   id: 5,
  //   title: 'Project 5'
  // },
  // {
  //   image: img6,
  //   github: 'https://github.com',
  //   demo: 'https://google.com',
  //   id: 6,
  //   title: 'Project 6'
  // },
  // {
  //   image: img7,
  //   github: 'https://github.com',
  //   demo: 'https://google.com',
  //   id: 7,
  //   title: 'Project 7'
  // },
  // {
  //   image: img8,
  //   github: 'https://github.com',
  //   demo: 'https://google.com',
  //   id: 8,
  //   title: 'Project 8'
  // },
  // {
  //   image: img9,
  //   github: 'https://github.com',
  //   demo: 'https://google.com',
  //   id: 9,
  //   title: 'Project 9'
  // },
  // {
  //   image: img1,
  //   github: 'https://github.com',
  //   demo: 'https://google.com',
  //   id: 10,
  //   title: 'Project 10'
  // },
  // ]
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      {/* <ListPortfolio /> */}
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item__image">
                  <img src={image} alt={title} className="portImage" />
                </div>
                <h3> {title} </h3>
                <div className="portfolio__item__cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          }

          )
        }
      </div>
    </section>
  );
};
export default Portfolio;
