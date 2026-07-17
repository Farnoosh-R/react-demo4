import heroBg from "../../assets/images/heroBg.jpg";
import heroSmall from "../../assets/images/hero-small.png";
import Button from "../../../../components/shared/Button";
import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero">
      <div
        className="relative flex w-full h-[650px] justify-end"
        style={{
          background: "var(--gradient-primary)",
        }}
      >
        <div className="absolute right-90 bottom-12 grid grid-cols-5 gap-4">
          {[...Array(25)].map((_, i) => (
            <span key={i} className="h-2 w-2 rounded-full bg-white/40" />
          ))}
        </div>
        <div className="relative ml-20 w-[230px] h-[320px]">
          {[0, 10, 20, 30].map((offset) => (
            <div
              key={offset}
              className="absolute border-2 border-white/40 border-t-0 rounded-b-[90px]"
              style={{
                top: offset,
                left: offset,
                right: offset,
                bottom: offset,
              }}
            />
          ))}
        </div>

        <div
          className="w-full lg:w-3/4 h-[650px] rounded-br-[350px]"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute left-0 w-full lg:w-3/4 h-[650px] rounded-br-[350px] bg-[var(--color-secondary)]/90"></div>
          <div className="absolute top-10 lg:top-10 right-4 lg:right-40 flex flex-col lg:flex-row gap-5 lg:gap-12">
            <div className=" z-10 overflow-hidden object-cover w-[90%] lg:w-[45%] lg:h-[500px] rounded-tl-[180px] rounded-tr-[180px] rounded-bl-[180px] rounded-br-lg">
              <img
                src={heroSmall}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-7 md:mt-[60px] lg:w-[600px]">
              <div className="flex items-center gap-2">
                <div className="w-[40px] h-[1px] bg-[var(--color-primary)]"></div>
                <div className="text-[var(--color-muted)]">
                  خدمات فناوری اطلاعات و راهکارهای هوشمند سازمانی
                </div>
              </div>
              <div>
                <h1 className="text-[var(--color-light)]">
                  راهکارهای نوین برای
                </h1>
                <h1 className="text-[var(--color-light)]">رشد کسب‌وکار</h1>
              </div>
              <h5 className="text-[var(--color-muted)]">
                با ارائه راهکارهای تخصصی در حوزه فناوری اطلاعات، توسعه نرم‌افزار
                و تحول دیجیتال، به کسب‌وکارها کمک می‌کنیم تا بهره‌وری بیشتری
                داشته باشند.
              </h5>
              <div className="flex justify-center gap-4">
                <Button variant="primary" size="lg">
                  شروع همکاری
                </Button>
                <Button variant="primary" btnType="outline" size="lg">
                  مشاوره رایگان
                </Button>
              </div>
              <div className="flex justify-end">
                <div className="w-[20px] h-[20px] border border-white rounded-full"></div>
                <div className="w-[20px] h-[20px] bg-white/25 rounded-full mt-[-10px] mr-[-10px]"></div>
              </div>
              <div className="flex gap-10 justify-center">
                <a
                  href=""
                  className="w-11 h-11 flex items-center justify-center rounded-full
                  bg-white/10 text-white
                  transition-all duration-300
                  hover:bg-[var(--color-primary)]
                  hover:-translate-y-2
                  hover:shadow-lg hover:shadow-[var(--color-primary)]/30"
                >
                  <FaInstagram color="var(--color-light)" size={20} />
                </a>
                <a href=""  className="w-11 h-11 flex items-center justify-center rounded-full
                  bg-white/10 text-white
                  transition-all duration-300
                  hover:bg-[var(--color-primary)]
                  hover:-translate-y-2
                  hover:shadow-lg hover:shadow-[var(--color-primary)]/30">
                  <FaTelegram color="var(--color-light)" size={20} />
                </a>
                <a href=""  className="w-11 h-11 flex items-center justify-center rounded-full
                  bg-white/10 text-white
                  transition-all duration-300
                  hover:bg-[var(--color-primary)]
                  hover:-translate-y-2
                  hover:shadow-lg hover:shadow-[var(--color-primary)]/30">
                  <FaWhatsapp color="var(--color-light)" size={20} />
                </a>
                <a href=""  className="w-11 h-11 flex items-center justify-center rounded-full
                  bg-white/10 text-white
                  transition-all duration-300
                  hover:bg-[var(--color-primary)]
                  hover:-translate-y-2
                  hover:shadow-lg hover:shadow-[var(--color-primary)]/30">
                  <FaYoutube color="var(--color-light)" size={20} />
                </a>
                <a href=""  className="w-11 h-11 flex items-center justify-center rounded-full
                  bg-white/10 text-white
                  transition-all duration-300
                  hover:bg-[var(--color-primary)]
                  hover:-translate-y-2
                  hover:shadow-lg hover:shadow-[var(--color-primary)]/30">
                  <FaLinkedin color="var(--color-light)" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-container"></div>
    </section>
  );
};
export default Hero;
