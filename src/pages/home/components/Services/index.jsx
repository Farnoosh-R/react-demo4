import { Link } from "react-router-dom";
import { FaChessKnight, FaChartLine } from "react-icons/fa";
import { TbRocket } from "react-icons/tb";
import { BsArrowLeft } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <div className="app-container flex flex-col gap-12">
        <div>
          <div className="text-[var(--color-primary)]">خدمات</div>
          <h2>چگونه کمک می‌کنیم؟</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          <div className="flex flex-col gap-7 shadow-xl rounded-2xl p-7">
            <div className="flex items-center gap-2">
              <FaCheck color="var(--color-primary)" size={23} />
              <h3>طراحی استراتژی کسب‌وکار</h3>
            </div>
            <div>
              با تحلیل وضعیت فعلی کسب‌وکار، شناسایی فرصت‌های بازار و تدوین
              استراتژی‌های هدفمند، به سازمان‌ها کمک می‌کنیم مسیر رشد پایدار خود
              را طراحی کرده و با اطمینان بیشتری به اهداف بلندمدت خود دست یابند.
            </div>
            <div className="flex items-center gap-4">
              <FaChessKnight color="var(--color-muted)" size={50} />
              <div className="flex items-center gap-1 text-[var(--color-primary-beta)]">
                <Link to={"#"}>بیشتر بخوانید</Link>
                <i>
                  <BsArrowLeft />
                </i>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-7 shadow-xl rounded-2xl p-7 text-white"
            style={{
              background: "var(--gradient-secondary)",
            }}
          >
            <div className="flex gap-2 items-center">
              <FaCheck color="white" size={23} />
              <h3>تحول دیجیتال و بازاریابی</h3>
            </div>
            <div>
              با بهره‌گیری از فناوری‌های نوین، ابزارهای دیجیتال و راهکارهای
              بازاریابی هوشمند، زمینه افزایش فروش، جذب مشتریان جدید و تقویت
              جایگاه برند شما را در بازار رقابتی در کوتاه ترین زمان ممکن فراهم
              می‌کنیم.
            </div>
            <div className="flex items-center gap-4">
              <FaChartLine color="white" size={50} />
              <div className="flex items-center gap-1 text-white">
                <Link to={"#"}>بیشتر بخوانید</Link>
                <i>
                  <BsArrowLeft />
                </i>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 shadow-xl rounded-2xl p-7">
            <div className="flex gap-2 items-center">
              <FaCheck color="var(--color-primary)" size={23} />
              <h3>توانمندسازی سازمان</h3>
            </div>
            <div>
              با بهینه‌سازی فرآیندهای کاری، توسعه مهارت‌های مدیریتی و ارتقای
              بهره‌وری منابع انسانی، به سازمان‌ها کمک می‌کنیم عملکردی اثربخش‌تر
              داشته باشند و برای چالش‌های آینده آماده شوند.
            </div>
            <div className="flex items-center gap-4">
              <TbRocket color="var(--color-muted)" size={50} />
              <div className="flex items-center gap-1 text-[var(--color-primary-beta)]">
                <Link to={"#"}>بیشتر بخوانید</Link>
                <i>
                  <BsArrowLeft />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
