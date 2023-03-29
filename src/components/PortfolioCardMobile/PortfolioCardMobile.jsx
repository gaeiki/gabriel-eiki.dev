import { Swiper, SwiperSlide } from "swiper/react";
import projects from "../../json/projects.json";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

export default function PortfolioCardMobile() {
  return (
    <div className="flex max-w-6xl px-5 mx-auto mt-10 items-center relative md:hidden">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{}}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 pb-8 bg-slate-500 dark:bg-slate-800 rounded-xl ">
                  <a href={project.live_link} target="_blank">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="rounded-lg cursor-pointer aspect-video"
                    />
                  </a>
                  <h3 className="text-xl text-gray-800 my-3 dark:text-gray-100">
                    {project.name}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 dark:bg-gray-300 px-2 py-1 inline-block rounded-md hover:bg-gray-800/50 dark:hover:bg-gray-300/10 duration-300"
                    >
                      Source Code
                    </a>
                    <a
                      href={project.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 dark:bg-gray-300 px-2 py-1 inline-block rounded-md hover:bg-gray-800/50 dark:hover:bg-gray-300/10 duration-300"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
  )
}