import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/projects/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const projects = [
    {
      image1:
        "https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479",
      image2:
        "https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
      image2:
        "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14",
      image2:
        "https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000",
      image2:
        "https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022",
    },
  ];

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function () {
    gsap.from(".hero", {
      height: "70px",
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: ".hero-parent",
        start: "top 100%",
        end: "top -200%",
        scrub: true
      }
    });
  });

  return (
    <div className="lg:p-2 p-1">
      <div className="pt-[45vh]">
        <h2 className="font-[font2] text-black lg:text-[12vw] text-7xl uppercase">
          Projets
        </h2>
      </div>
      <div className="lg:-mt-7 -mt-3 hero-parent">
        {projects.map((project, index) => (
          <div className="w-full lg:h-[500px] flex lg:flex-row flex-col lg:gap-2 gap-1 mb-2 hero">
            <ProjectCard
              key={index}
              image1={project.image1}
              image2={project.image2}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
