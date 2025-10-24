import React from "react";

const Agence = () => {
  return (
    <div>
      <div className="section1">
        <div className="h-[20vw] w-[15vw] overflow-hidden absolute top-60 left-[30vw] rounded-3xl">
          <img
            className="h-full w-full object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
          />
        </div>

        <div className="relative font-[font2]">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>

          <div className="pl-[40%] mt-20">
            <p className="text-5xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>

      <div className="section2 h-screen">

      </div>
    </div>
  );
};

export default Agence;
