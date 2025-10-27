import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="flex items-center justify-center gap-2 font-[font2]">
      <Link
        className="text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase leading-[5.5vw] border-3 border-white rounded-full px-10 pt-5 pb-0"
        to={"/projects"}
      >
        Projects
      </Link>
      <Link
        className="text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase leading-[5.5vw] border-3 border-white rounded-full px-10 pt-5 pb-0"
        to={"/agence"}
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
