import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";

export default function SliderCustomers({ items }) {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="relative pb-10"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative flex justify-center h-auto">
              <img
                src={item.image}
                alt={item.title}
                className="w-[30%] lg:w-[50%] object-cove"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}