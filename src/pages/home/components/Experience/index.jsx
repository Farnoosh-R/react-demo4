import { Link } from "react-router-dom";
import experience from "../../assets/images/experience.png";
import { FaAward } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] place-items-center gap-7">
          <div className="flex flex-col gap-5">
            <FaAward color="var(--color-primary)" size={50} />
            <div>
              در طول بیش از دو دهه فعالیت حرفه‌ای، به کسب‌وکارها کمک کرده‌ایم تا
              با تدوین استراتژی‌های مؤثر، بهبود فرآیندها و توسعه بازار، مسیر رشد
              پایدار و موفقیت بلندمدت را تجربه کنند.
            </div>
            <div className="flex items-center gap-1 text-[var(--color-primary-beta)]">
              <Link to={"#"}>بیشتر بخوانید</Link>
              <i>
                <BsArrowLeft />
              </i>
            </div>
          </div>
          <div className="overflow-hidden text-center">
            <div
              className="text-[clamp(100px,16vw,400px)] font-black leading-none text-transparent bg-cover bg-center bg-clip-text"
              style={{
                backgroundImage: `url(${experience})`,
              }}
            >
              24%
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[50px] h-[3px] bg-[var(--color-primary)]"></div>
              <h2>صنایع تحت پوشش</h2>
            </div>
          </div>
          <div className="relative flex flex-col gap-3">
            <div className="absolute right-50 bottom-40 grid grid-cols-5 gap-4">
              {[...Array(25)].map((_, i) => (
                <span key={i} className="h-2 w-2 rounded-full bg-black/10" />
              ))}
            </div>
            <h3>موفقیت شما اعتبار ماست</h3>
            <div>
              با تکیه بر دانش روز، تجربه اجرایی و رویکردی نتیجه‌محور، در کنار
              سازمان‌ها و کسب‌وکارها هستیم تا فرصت‌های رشد را شناسایی کرده و
              چالش‌های مسیر توسعه را به فرصت تبدیل کنند.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
