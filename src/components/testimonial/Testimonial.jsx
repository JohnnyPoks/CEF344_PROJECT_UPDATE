import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./testimonials.css";
// import IMG from "../../assets/psm.jpeg";
// import AV1 from "../../assets/pyl.jpeg";
// import AV2 from "../../assets/changer1.png";
// import AV3 from "../../assets/changer1.png";
// import AV4 from "../../assets/changer1.png";
// import AV5 from "../../assets/changer1.png";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export const Testimonial = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/testimonial").then(response => {
      const formattedData = response.data.data.map(item => ({
        id: item._id,
        avatar: item.avatar,
        name: item.name,
        review: item.review,
      }));
      setData(formattedData)
    }).catch(error => {
      console.log("Error fetching portfolio data:", error);
    })
  }, [])

  // const testimonials = [
  //   {
  //     // id: 1,
  //     // testimonial:
  //     //   "Pokam is a highly skilled and motivated student with a passion for robotics and software engineering. I have had the pleasure of working with Pokam on a number of projects, and have been consistently impressed with their technical knowledge, attention to detail, and ability to work collaboratively in a team. Their skills in robotics and software engineering are truly exceptional, and their dedication to mastering these fields is evident in the quality of their work. I have no doubt that Pokam will continue to excel in their studies and future career, and I am excited to see where their talents take them.",
  //     avatar: IMG,
  //     // Cname: "Noupouwo Stephane, Technical Director of Quick Steps Travel",
  //   },
  //   {
  //     // id: 2,
  //     // testimonial:
  //     //   "Pokam is an exceptional student with a rare combination of skills in AI and project management. Their technical expertise in AI is truly impressive, and their ability to apply this knowledge to real-world problems is a testament to their dedication and creativity. In addition to their technical skills, Pokam is also an outstanding project manager, with a keen eye for detail and a talent for motivating and leading teams. I have had the pleasure of working with Pokam on several projects, and have been consistently impressed by their ability to balance the technical and managerial aspects of complex projects. It is clear that Pokam has a bright future ahead of them, and I am excited to see where their talents take them next.",
  //     avatar: AV1,
  //     // Cname: "Lambe Yubuin, CEO of Quick Steps Travel",
  //   },
  //   {
  //     // id: 3,
  //     // testimonial:
  //     //   "Pokam is an incredibly talented and dedicated web developer. Their ability to create stunning and functional websites is a testament to their technical expertise, creativity, and attention to detail. I have had the pleasure of working with Pokam on several web development projects, and have been consistently impressed by their ability to turn complex requirements into elegant and intuitive user interfaces. In addition to their technical skills, Pokam is also an excellent communicator and collaborator, always willing to go the extra mile to ensure that their work meets the needs of their clients and users. I have no doubt that Pokam will continue to excel in their web development career, and I look forward to seeing the amazing things they will create in the future.",
  //     avatar: AV2,
  //     // Cname: "Antana Roy, Professional web developer",
  //   },
    // {
    //   id: 4,
    //   testimonial:
    //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis.",
    //   avatar: AV3,
    //   Cname: "Client 4",
    // },
    // {
    //   id: 5,
    //   testimonial:
    //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis.",
    //   avatar: AV5,
    //   Cname: "Client 5",
    // },
    // {
    //   id: 6,
    //   testimonial:
    //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis.",
    //   avatar: AV4,
    //   Cname: "Client 6",
    // },
  //];
  return (
    <section id="testimonial">
      <h5>Client Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="client avatar" />
              </div>
              <h5 className="client__name"> {name} </h5>
              <small className="client__review"> {review} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonial;
