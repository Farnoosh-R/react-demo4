import About from "./components/About";
import Banner from "./components/Banner";
import Customers from "./components/customers";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <div id="home" className="page flex flex-col gap-10 lg:gap-30">
      <Hero />
      <Services />
      <About />
      <Banner />
      <Experience />
      <Testimonials />
      <Customers />
    </div>
  );
};
export default Home;
