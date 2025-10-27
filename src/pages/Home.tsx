import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen fixed">
        <Video />
      </div>
      <div className="relative w-screen h-screen flex flex-col justify-between pb-5 overflow-hidden">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
