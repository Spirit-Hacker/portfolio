import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const imageArray = [
    "../../public/MAN1.jpg",
    "../../public/Man2.jpg",
    "../../public/Man3.jpg",
    "../../public/Man4.jpg",
    "../../public/Man5.jpg",
    "../../public/Woman1.jpg",
    "../../public/Woman2.jpg",
    "../../public/Woman3.jpg",
    "../../public/Woman4.jpg",
    "../../public/Woman5.jpg",
    "../../public/Woman6.jpg",
  ];

  useGSAP(function () {
    const trigger = gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 26.6%",
        end: "top -100%",
        pin: true,
        scrub: 1,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          console.log(Math.floor(elem.progress * imageArray.length));
          const imageIndex = Math.floor(elem.progress * imageArray.length);
          if (
            imageRef.current &&
            imageIndex >= 0 &&
            imageIndex < imageArray.length
          ) {
            imageRef.current.src = imageArray[imageIndex];
          }
        },
      },
    });

    return () => {
      trigger.scrollTrigger?.kill(); // kill this trigger only
      ScrollTrigger.getAll().forEach((t) => t.kill()); // or kill all if needed
    };
  });

  return (
    <div className="text-black">
      <div className="section1 py-1">
        <div
          ref={imageDivRef}
          className="lg:h-[20vw] h-[30vw] lg:w-[15vw] w-[25vw] overflow-hidden absolute lg:top-52 top-0 lg:left-[30vw] left-[30vw] lg:rounded-3xl rounded-2xl"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="../../public/Man1.jpg"
          />
        </div>

        <div className="font-[font2] relative h-full">
          <div className="lg:mt-[55vh] mt-[30vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>

          <div className="lg:pl-[40%] lg:mt-20 p-3">
            <p className="lg:text-5xl leading-tight text-xl">
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

      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
