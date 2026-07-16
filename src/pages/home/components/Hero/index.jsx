import heroBg from "../../assets/images/heroBg.jpg";
import heroSmall from "../../assets/images/hero-small.png";
import Button from "../../../../components/shared/Button";

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
              className="absolute border-2 border-white/20 border-t-0 rounded-b-[90px]"
              style={{
                top: offset,
                left: offset,
                right: offset,
                bottom: offset,
              }}
            />
          ))}
        </div>

        <div className="w-full lg:w-3/4 h-[650px]  bg-[var(--color-secondary)] rounded-br-[350px]">
          <div className="absolute top-10 lg:top-10 right-4 lg:right-40 flex flex-col lg:flex-row gap-5 lg:gap-12">
            <div className=" z-10 overflow-hidden objecy-cover w-[90%] lg:w-[45%] lg:h-[500px] rounded-tl-[180px] rounded-tr-[180px] rounded-bl-[180px] rounded-br-lg">
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
                <Button variant="primary" size="lg">
                  مشاوره رایگان
                </Button>
                <div>2</div>
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
