import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function SliderTestimonials({ items }) {
  return (
    <div className="w-full mr-auto min-w-0 mr-auto">
      <Swiper
        slidesPerView={1}
        // modules={[Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        className="relative pb-10"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-auto">
              <div className="grid grid-cols-2 text-white">
                <div className="relative overflow-hidden rounded-tr-[70px] rounded-br-[70px]">
                  
                  <img
                    src={item.image}
                    className="object-cover w-full h-full"
                    alt=""
                  />
                  <div className="absolute inset-0 w-full bg-[var(--color-secondary)]/60"></div>
                </div>
                <div className="flex flex-col gap-3 px-10 py-15 bg-[var(--color-secondary-alpha)] rounded-tl-[70px]">
                  <div className="flex items-end gap-2">
                    <FaQuoteLeft size={30} color="var(--color-primary)" />
                    <div>بازخوردها</div>
                  </div>
                  <div>
                    <h4>نظر برخی مشتریان</h4>
                    <h4>درباره ما...</h4>
                  </div>
                  <p className="mt-4 leading-9 text-justify h-[216px]">
                    {item.description}
                  </p>
                  <div className="flex justify-center gap-2">
                    <FaStar className="text-yellow-300"/>
                    <FaStar className="text-yellow-300"/>
                    <FaStar className="text-yellow-300"/>
                    <FaStar className="text-yellow-300"/>
                    <FaStar className="text-yellow-300"/>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-1">
                  <h2 className="text-[var(--color-primary)]">{item.title}</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
