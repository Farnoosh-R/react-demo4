import SliderTestimonials from "../../../../components/shared/sliders/SliderTestimonials";
import testimonialSlide1 from "../../assets/images/testimonialSlide1.jpg";
import testimonialSlide2 from "../../assets/images/testimonialSlide2.jpg";
import testimonialSlide3 from "../../assets/images/testimonialSlide3.jpg";
import {
  FaQuoteLeft,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Testimonials = () => {
  const slides = [
    {
      id: 1,
      image: testimonialSlide1,
      title: "امیرسام راد",
      description:
        "همکاری با آقای قربانی دیدگاه ما را نسبت به بازار و رفتار مشتریان به شکل قابل توجهی تغییر داد. راهکارهای ارائه‌شده توسط ایشان تاثیر مستقیم و قابل اندازه‌گیری بر رشد فروش و افزایش بهره‌وری تیم ما داشت.",
      buttonText: "Explore",
    },
    {
      id: 2,
      image: testimonialSlide2,
      title: "فرهنگ عماد",
      description:
        "همکاری با تیم شما باعث شد فرآیندهای داخلی شرکت ما ساختارمندتر شود و بتوانیم تصمیمات مدیریتی را با دقت بیشتری اتخاذ کنیم. نگاه راهبردی شما تأثیر قابل‌توجهی در رشد کسب‌وکار ما داشته است.",
      buttonText: "Explore",
    },
    {
      id: 3,
      image: testimonialSlide3,
      title: "کامیاب سحرخیز",
      description:
        "از زمان شروع همکاری با شرکت توسعه کسب‌وکار، توانستیم فرصت‌های جدیدی برای جذب مشتری شناسایی کنیم. تعهد، تخصص و پیگیری مستمر تیم شما از نقاط قوت این مجموعه است.",
      buttonText: "Explore",
    },
  ];

  return (
    <section id="testimonials" className="py-10 bg-[var(--color-secondary)]">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex flex-col items-center gap-7 justify-center">
            <div className="flex justify-start w-full"><FaQuoteLeft size={150} color="var(--color-secondary-alpha)" /></div>
            <div className="flex flex-col gap-2">
              <div className="text-[var(--color-primary)]">
                منتظر نظرات شما هستیم
              </div>
              <div className="text-white text-lg leading-10">
                نظرات ارزشمند شما به ما کمک می‌کند هر روز بهتر از دیروز باشیم.
                از اعتمادی که به ما دارید صمیمانه سپاسگزاریم.
              </div>
            </div>
                <div className="flex justify-center gap-10">
                <a href="" className="transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(5,223,114,0.35)]"><FaInstagram size={20} color="var(--color-primary)"/></a>
                <a href="" className="transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(5,223,114,0.35)]"><FaTelegram size={20} color="var(--color-primary)"/></a>    
                <a href="" className="transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(5,223,114,0.35)]"><FaWhatsapp size={20} color="var(--color-primary)"/></a>
                <a href="" className="transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(5,223,114,0.35)]"><FaYoutube size={20} color="var(--color-primary)"/></a>
                <a href="" className="transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(5,223,114,0.35)]"><FaLinkedin size={20} color="var(--color-primary)"/></a>
              </div>
              <div className="tracking-[7px] text-white/50 ">demo4@gmail.com</div>
          </div>
          <div className="">
            <SliderTestimonials items={slides} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
