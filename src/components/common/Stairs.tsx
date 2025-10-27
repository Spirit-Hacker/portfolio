import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = ({ children }: { children: React.ReactNode }) => {
  const path = useLocation().pathname;
  console.log("Path: ", path);

  const stairParentRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    function () {
      const tl = gsap.timeline();

      tl.from(".stair", {
        height: 0,
        duration: 0.5,
        stagger: {
          amount: -0.3,
        },
      });

      tl.to(".stair", {
        y: "100%",
        duration: 0.5,
        stagger: {
          amount: -0.3,
        },
      });

      tl.to(stairParentRef.current, {
        display: "none",
      });

      tl.to(".stair", {
        y: "0%",
      });

      gsap.from(pageRef.current, {
        opacity: 0,
        delay: 1,
        scale: 1.3,
      });
    },
    [path]
  );

  return (
    <div>
      <div>
        <div
          ref={stairParentRef}
          className="h-screen w-full z-20 flex fixed top-0"
        >
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Stairs;
