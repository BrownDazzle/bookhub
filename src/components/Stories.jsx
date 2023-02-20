import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import Title from "./utils/Title";
import { truncate } from "lodash";

const Stories = ({ story: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: 'loop',
    rewind: true,
    keyboard: 'global',
    gap: '1rem',
    pagination: false,
    padding: '2rem',
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <>
      <div className="nike-container mb-6">
        <Title title={title} />
        <div className="mt-7">
          <Splide options={splideOptions}>
            {news.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div className="relative  grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                  <div className="flex-1 m-[3px] h-[40vh] relative">
                    <a href={val.url}>
                      <img src={val.img} className="w-[100%] h-[100%] object-cover sm:h-[20vh]" />
                      <div className="absolute flex top-[50%] left-0 w-[100%] h-[100%] flex-col items-center justify-items-center">
                        <h4 className='uppercase text-1xl lg:text-2xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg'>{val.title}</h4>
                        <button
                          type="button"
                          className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
                        >
                          {val.btn}
                        </button>
                      </div>
                    </a>
                  </div >
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;
