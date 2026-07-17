import banner from "../../assets/images/banner.png";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaAward } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      id="banner"
      className="relative py-20"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 w-full  bg-[var(--color-secondary)]/90"></div>
      <div className="app-container ">
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 place-items-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="relative  bg-[var(--color-primary)] rounded-tl-4xl rounded-tr-2xl rounded-br-4xl rounded-bl-2xl p-7">
              <div className="absolute top-4 -left-3 -z-1 w-[90px] h-[90px] rounded-tl-2xl rounded-tr-4xl rounded-br-2xl rounded-bl-4xl border border-white/70"></div>
              <FaBriefcase color="white" size={40} />
            </div>

            <h2 className="text-white">120+</h2>
            <div className="text-white text-lg">پروژه توسعه کسب‌وکار</div>
          </div>
                <div className="flex flex-col gap-4 justify-center items-center">
            <div className="relative  bg-[var(--color-primary)] rounded-tl-4xl rounded-tr-2xl rounded-br-4xl rounded-bl-2xl p-7">
              <div className="absolute top-4 -left-3 -z-1 w-[90px] h-[90px] rounded-tl-2xl rounded-tr-4xl rounded-br-2xl rounded-bl-4xl border border-white/70"></div>
              <FaGraduationCap color="white" size={40} />
            </div>

            <h2 className="text-white">500+</h2>
            <div className="text-white text-lg">ساعت آموزش و منتورینگ</div>
          </div>
                <div className="flex flex-col gap-4 justify-center items-center">
            <div className="relative  bg-[var(--color-primary)] rounded-tl-4xl rounded-tr-2xl rounded-br-4xl rounded-bl-2xl p-7">
              <div className="absolute top-4 -left-3 -z-1 w-[90px] h-[90px] rounded-tl-2xl rounded-tr-4xl rounded-br-2xl rounded-bl-4xl border border-white/70"></div>
              <FaUsers color="white" size={40} />
            </div>

            <h2 className="text-white">300+</h2>
            <div className="text-white text-lg">مشتری رضایتمند</div>
          </div>
                <div className="flex flex-col gap-4 justify-center items-center">
            <div className="relative  bg-[var(--color-primary)] rounded-tl-4xl rounded-tr-2xl rounded-br-4xl rounded-bl-2xl p-7">
              <div className="absolute top-4 -left-3 -z-1 w-[90px] h-[90px] rounded-tl-2xl rounded-tr-4xl rounded-br-2xl rounded-bl-4xl border border-white/70"></div>
              <FaAward color="white" size={40} />
            </div>

            <h2 className="text-white">15+</h2>
            <div className="text-white text-lg">سال تجربه حرفه‌ای</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
