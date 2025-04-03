import jpVideo from "../assets/videos/IMG_0991.mp4";

function Hero() {
  return (
    <main>
      <div className="h-screen px-4 sm:px-6">
        <div className="relative top-0 right-0 left-0 h-[88vh] w-full overflow-hidden rounded-3xl">
          <video className="h-full w-full object-cover" autoPlay loop muted>
            <source src={jpVideo} type="video/mp4"></source>
          </video>
          <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
            <h1 className="mb-8 text-center font-rhd text-4xl font-bold sm:mb-9 sm:text-5xl md:mb-10 md:text-6xl lg:mb-11 lg:text-7xl xl:mb-12 xl:text-8xl 2xl:mb-12 2xl:text-[150px]">
              HEY THERE, <br /> I'M ANDREW
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
