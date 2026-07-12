import heroBg from "../../assets/images/heroBg.jpg"

const Hero = () => {
  return (
    <section id="hero">
      <div className="relative h-[670px] overflow-hidden bg-orange-500">
        <div className="absolute left-0 top-0 h-full w-[70%] bg-[var(--color-secondary)] rounded-br-[350px] overflow-hidden">
          <img
            src={heroBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="relative z-10 p-12 text-white">
            <h1 className="text-5xl font-bold">IT Services & Solutions</h1>
            <p className="mt-4">متن توضیحات...</p>
          </div>
        </div>
      </div>
      <div className="app-container"></div>
    </section>
  );
};
export default Hero;
