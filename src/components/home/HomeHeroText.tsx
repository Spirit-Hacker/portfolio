import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center mt-60 lg:mt-0">
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center">
        L'étincelle
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center">
        qui{" "}
        <div className="h-[7vw] w-[16vw] -mt-3 rounded-full overflow-hidden">
          <Video />
        </div>{" "}
        génère
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
