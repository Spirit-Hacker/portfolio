const ProjectCard = ({
  image1,
  image2,
}: {
  image1: string;
  image2: string;
}) => {
  return (
    <>
      <div className="relative w-1/2 group h-full hover:rounded-[50px] cursor-pointer overflow-hidden transition-all">
        <img
          className="w-full h-full object-cover overflow-hidden"
          src={image1}
          alt=""
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition-all top-0 left-0 h-full flex items-center justify-center w-full bg-black/20">
          <h2 className="border-2 border-white rounded-full pt-2 px-6  font-[font2] text-6xl uppercase">
            Voir Le Projet
          </h2>
        </div>
      </div>
      <div className="relative w-1/2 group h-full hover:rounded-[50px] cursor-pointer overflow-hidden transition-all">
        <img
          className="w-full h-full object-cover overflow-hidden"
          src={image2}
          alt=""
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition-all top-0 left-0 h-full flex items-center justify-center w-full bg-black/20">
          <h2 className="border-2 border-white rounded-full pt-2 px-6  font-[font2] text-6xl uppercase">
            Voir Le Projet
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
