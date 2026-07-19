import logo from "../../../assets/images/logo.png";
import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import Button from "../../shared/Button";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className="bg-[var(--color-secondary)] pt-15 pb-10">
      <div className="flex flex-col gap-7 app-container text-[var(--color-muted)]">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
          <div className="flex flex-col gap-5">
            <img src={logo} className="w-12" alt="" />
            <div>
              توسعه کسب‌وکار تنها یک هدف نیست؛ مسیری است که با تحلیل، نوآوری و
              تصمیم‌های درست به موفقیت پایدار می‌رسد.. ما در کنار شما هستیم تا
              فرصت‌ها را به نتایج ارزشمند تبدیل کنیم.
            </div>
            <div className="flex gap-5">
              <a href="">
                <FaInstagram color="var(--color-primary)" size={20} />
              </a>
              <a href="">
                <FaTelegram color="var(--color-primary)" size={20} />
              </a>
              <a href="">
                <FaWhatsapp color="var(--color-primary)" size={20} />
              </a>
              <a href="">
                <FaLinkedin color="var(--color-primary)" size={20} />
              </a>
              <a href="">
                <FaYoutube color="var(--color-primary)" size={20} />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-3 lg:mt-0">
            <h4>دسترسی</h4>
            <Link className="hover:text-[var(--color-primary)]">صفحه اصلی</Link>
            <Link className="hover:text-[var(--color-primary)]">درباره ما</Link>
            <Link className="hover:text-[var(--color-primary)]">
              تماس با ما
            </Link>
            <Link className="hover:text-[var(--color-primary)]">مقالات</Link>
          </div>
          <div className="flex flex-col gap-3 mt-3 lg:mt-0">
            <h4>مقالات</h4>
            <Link className="hover:text-[var(--color-primary)]">مقاله اول</Link>
            <Link className="hover:text-[var(--color-primary)]">مفاله دوم</Link>
            <Link className="hover:text-[var(--color-primary)]">مفاله سوم</Link>
            <Link className="hover:text-[var(--color-primary)]">
              مقاله چهارم
            </Link>
          </div>
          <div className="flex flex-col gap-3 mt-3 lg:mt-0">
            <div className="flex gap-2">
              <FaPhone color="var(--color-primary)" />
              <div>12346547 - 021</div>
            </div>
            <div className="flex gap-2">
              <FaEnvelope color="var(--color-primary)" />
              <div>demo4@gmail.com</div>
            </div>
            <div>با ثبت ایمیل، از جدید‌ترین ها با‌خبر شوید</div>
            <div className="flex gap-1">
              <input
                type="text"
                className="bg-[var(--color-secondary-alpha)] p-3 rounded-4xl"
              />
              <Button variant="primary" btnType="outline">
                ارسال
              </Button>
            </div>
          </div>
        </div>
        <div className="copy-right flex gap-1 justify-center h-10 items-center text-[var(--color-gray)]">
          <a href="#" className="hover:text-[var(--color-primary)]">
            Farnoosh
          </a>
          <div>Designed & Developed by</div>
          <div>|</div>
          <div>2026©</div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
