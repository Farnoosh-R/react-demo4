import Button from "../../../../components/shared/Button";
import about from "../../assets/images/about.png";
import { HiCheckCircle } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex flex-col gap-10">
            <div>
              <div className="text-[var(--color-primary)]">درباره ما</div>
              <h2>همراه شما در مسیر رشد </h2>
            </div>
            <div className="text-lg">
              ما با ارائه راهکارهای تخصصی در حوزه توسعه کسب‌وکار، مدیریت سازمانی
              و تحول دیجیتال، به کسب‌وکارها کمک می‌کنیم تا فرصت‌های جدید را
              شناسایی کرده، عملکرد خود را بهبود بخشند و به رشد پایدار دست یابند.
              هدف ما ایجاد ارزش، افزایش بهره‌وری و تقویت مزیت رقابتی سازمان‌ها
              در بازار است.
            </div>
            <div className="flex gap-20 text-[var(--color-gray)]">
              <div className="flex flex-col gap-5">
               <div className="flex gap-2">
                 <HiCheckCircle color="var(--color-primary)" size={30} />
                <div className="text-lg">تدوین استراتژی‌های رشد</div>
               </div>
                 <div className="flex gap-2">
                 <HiCheckCircle color="var(--color-primary)" size={30} />
                <div className="text-lg">تدوین استراتژی‌های رشد</div>
               </div>
              </div>
                  <div className="flex flex-col gap-5">
               <div className="flex gap-2">
                 <HiCheckCircle color="var(--color-primary)" size={30} />
                <div className="text-lg">تدوین استراتژی‌های رشد</div>
               </div>
                 <div className="flex gap-2">
                 <HiCheckCircle color="var(--color-primary)" size={30} />
                <div className="text-lg">تدوین استراتژی‌های رشد</div>
               </div>
              </div>
            </div>
            <div className="flex items-center gap-7">
                <Button variant="secondary" size="lg">مشاوره رایگان</Button>
                <div className="border-2 border-[var(--color-secondary)] rounded-full p-3 shadow-2xl"><FaPlay color="var(--color-secondary)" size={18}/></div>
            </div>
          </div>
          <div className="relative flex justify-end">
            <div className="absolute -left-8 -top-7 w-[150px] h-[150px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-[var(--color-light)]"></div>
            <div className="absolute right-30 top-15 z-10   bg-[var(--color-secondary)] text-[var(--color-primary)] p-2 rounded-xl">
               <div className="flex items-center gap-3 border-2 border-dashed rounded-xl p-2">
                 <h2>20</h2>
                <div>سال تجربه</div>
               </div>
            </div>
            <div className="relative w-[70%] h-[460px] rounded-tr-[70px] rounded-bl-[70px] rounded-br-[70px] overflow-hidden">
              <img src={about} className="w-full h-full object-cover" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
