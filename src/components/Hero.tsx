import { TextFade } from "./TextFade";
import jpVideo from "../assets/videos/IMG_0991.mp4";

function Hero() {
  return (
    <div className="px-6 pb-12 sm:pb-16 md:px-10 md:pb-20 lg:pb-30 xl:pb-36 2xl:pb-40">
      <div className="relative top-0 right-0 left-0 h-[50vh] w-full overflow-hidden rounded-3xl sm:h-[60vh] md:h-[72vh] lg:h-[78vh] xl:h-[82vh] 2xl:h-[88vh]">
        <video className="h-full w-full object-cover" autoPlay loop muted>
          <source src={jpVideo} type="video/mp4"></source>
        </video>
        <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
          <TextFade className="flex flex-col items-center justify-center" direction="up">
            <ReuseClass text="HEY THERE," />
            <ReuseClass text="I'M ANDREW" />
          </TextFade>
        </div>
      </div>
    </div>
  );
}

function ReuseClass({ text }: { text: string }) {
  return (
    <h1 className="mb-8 text-center font-rhd text-4xl font-bold text-[#F4F4F5] sm:mb-9 sm:text-5xl md:mb-10 md:text-6xl lg:mb-11 lg:text-7xl xl:mb-12 xl:text-8xl 2xl:mb-12 2xl:text-[150px]">
      {text}
    </h1>
  );
}

export default Hero;
