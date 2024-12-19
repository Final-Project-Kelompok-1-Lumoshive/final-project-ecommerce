import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import {
    RiTwitterLine,
    RiInstagramLine,
    RiLinkedinLine,
  } from "react-icons/ri";

const Teams = () => {
  const teams = [
    {
      name: "Tom Cruise",
      position: "Founder & Chairman",
      img: "https://static.independent.co.uk/2022/05/19/19/1634b8eed67e000f880828c1232160b4Y29udGVudHNlYXJjaGFwaSwxNjUzMDcwNzEy-2.66984344.jpg",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      name: "Emma Watson",
      position: "Managing Director",
      img: "https://www.unwomen.org/sites/default/files/2022-10/UN-Women-Goodwill-Ambassador-Emma-Watson-Credit-Celeste-Sloman-853x1280.jpg",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      name: "Will Smith",
      position: "Product Designer",
      img: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/will_smith_1.jpg",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      name: "Tom Cruise",
      position: "Founder & Chairman",
      img: "https://static.independent.co.uk/2022/05/19/19/1634b8eed67e000f880828c1232160b4Y29udGVudHNlYXJjaGFwaSwxNjUzMDcwNzEy-2.66984344.jpg",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      name: "Emma Watson",
      position: "Managing Director",
      img: "https://www.unwomen.org/sites/default/files/2022-10/UN-Women-Goodwill-Ambassador-Emma-Watson-Credit-Celeste-Sloman-853x1280.jpg",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      name: "Will Smith",
      position: "Product Designer",
      img: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/will_smith_1.jpg",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  ];

  return (
    <Swiper
      slidesPerView={3}
      pagination={true}
      modules={[Pagination]}
      className="flex items-center justify-center team-cstm"
    >
      {teams.map((team, index) => (
        <SwiperSlide
          key={index}
          className="flex flex-col items-center justify-center"
        >
          <div>
            <img
              src={team.img}
              alt=""
              className="w-96 h-[26rem] object-cover mb-8 rounded-lg"
            />
            <div className="flex flex-col items-start justify-center gap-2">
              <h2 className="font-inter font-medium text-3xl">{team.name}</h2>
              <p className="font-poppins">{team.position}</p>
              <div className="flex gap-4">
                <a href={team.twitter}><RiTwitterLine className="text-3xl"/></a>
                <a href={team.instagram}><RiInstagramLine className="text-3xl"/></a>
                <a href={team.linkedin}><RiLinkedinLine className="text-3xl"/></a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Teams;
