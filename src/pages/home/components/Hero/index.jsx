import heroBg from "../../assets/images/heroBg.jpg"
import heroSmall from "../../assets/images/hero-small.jpg"

const Hero = () => {
  return (
    <section id="hero">
      <div className="relative h-[670px] overflow-hidden" style={{
        background: "var(--gradient-primary)",
      }}>
        <div className="absolute right-90 bottom-20 grid grid-cols-5 gap-4">
          {[...Array(25)].map((_, i) => (
            <span
              key={i}
              className="h-2 w-2 rounded-full bg-white/20"
            />
          ))}
        </div>
        <div className="relative mr-10 w-[180px] h-[320px]">
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
        <div className="overflow-hidden objecy-cover w-[300px] h-[300px] rounded-tl-[80px] rounded-tr-[80px] rounded-bl-[80px] rounded-br-lg bg-red-400">
          <img src={heroSmall} alt="" />

        </div>
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
