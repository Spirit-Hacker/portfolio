import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="flex items-center justify-center gap-2 font-[font2]">
      <Link
        className="text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase leading-[5.5vw] lg:border-3 border-2 border-white rounded-full lg:px-10 lg:pt-2 px-3 pt-1"
        to={"/projects"}
      >
        Projects
      </Link>
      <Link
        className="text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase leading-[5.5vw] lg:border-3 border-2 border-white rounded-full lg:px-10 lg:pt-2 px-3 pt-1"
        to={"/agence"}
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
