import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Rohit Jha",
    position: "CEO | Software Engineer",
    message:
      "Sudip's technical expertise and problem-solving abilities are exceptional. His work on our mobile application exceeded our expectations, delivering a robust solution that perfectly met our business requirements.",
  },
  {
    image: "/t-avt-2.png",
    name: "Aayusha Regmi",
    position: "Software Engineer",
    message:
      "Working alongside Sudip has been an incredible learning experience. His knowledge of Flutter and modern development practices helped elevate our entire team's capabilities and project quality.",
  },
  {
    image: "/t-avt-3.png",
    name: "Roshani Jha",
    position: "Founder Of BisKIRAN TECHNOLOGIES",
    message:
      "Sudip delivered outstanding results for our technology solutions. His expertise in cloud computing and web development helped us build scalable applications that drive our business forward.",
  },
  {
    image: "/t-avt-1.png",
    name: "Daya Shankar Prajapati",
    position: "CEO Sona Consolidate",
    message:
      "Sudip's professionalism and technical skills are impressive. He successfully integrated complex payment systems and delivered a high-quality mobile application that has significantly improved our operations.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
