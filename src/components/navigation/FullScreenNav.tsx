// import {} from "../../../public/Project1.jpg"

const FullScreenNav = () => {
  return (
    <div id="fullscreennav" className="h-screen py-40 w-full absolute bg-black z-5">
      <div id="all-links">
        <div className="link border-t border-gray-500">
          <h1 className="font-[font2] text-[8vw] uppercase leading-[0.7] pt-7 text-center">Projects</h1>
          <div className="flex absolute">
            <div className="flex items-center">
              <h2 className="font-[font2] whitespace-nowrap text-[8vw] uppercase leading-[0.7] pt-7 text-center">Pout Tout Voir</h2>
              <img src="../../../public/Project1.jpg" />
              <h2 className="font-[font2] whitespace-nowrap text-[8vw] uppercase leading-[0.7] pt-7 text-center">Pout Tout Voir</h2>
              <img src="../../../public/Project2.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
