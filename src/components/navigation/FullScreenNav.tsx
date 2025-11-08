import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef<HTMLDivElement>(null);
  const fullScreenRef = useRef<HTMLDivElement>(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext)!;
  console.log(navOpen);
  console.log(setNavOpen);

  const tl = useRef<gsap.core.Timeline>(null);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .set(fullScreenRef.current, { display: "block" })
      .from(".stairing", {
        height: 0,
        duration: 0.4,
        delay: 0.2,
        stagger: { amount: -0.3 },
        ease: "power2.out",
      })
      .from(".link", {
        opacity: 0,
        rotateX: 90,
        duration: 0.5,
        stagger: { amount: 0.2 },
        ease: "back.out(1.7)",
      })
      .from(".nav-link", {
        opacity: 0,
        duration: 0.3,
      });
  }, []);

  useGSAP(() => {
    if (tl.current) {
      if (navOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [navOpen]);

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav h-screen hidden w-full absolute z-50"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative">
        <div className="nav-link flex items-start justify-between w-full pt-1 px-2">
          <div className="">
            <div className="w-30 h-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
                className="h-full w-full"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>

          <div
            className="lg:h-32 lg:w-32 h-24 w-24 relative pt-1 cursor-pointer"
            onClick={() => setNavOpen(false)}
          >
            <div className="bg-[#D3FD50] w-0.5 lg:h-44 h-32 absolute -rotate-45 origin-top"></div>
            <div className="bg-[#D3FD50] w-0.5 lg:h-44 h-32 absolute right-0 rotate-45 origin-top"></div>
          </div>
        </div>
        <div id="all-links" className="lg:py-14 py-32">
          <div className="link origin-top relative border-t border-gray-500 cursor-pointer">
            <h1 className="font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.7] lg:pt-7 pt-3 text-center">
              Projects
            </h1>
            <div className="flex absolute top-0 bg-[#D3FD50] text-black moveLink">
              <div className="flex items-center moveX">
                <h2 className="font-[font2] whitespace-nowrap lg:text-[8vw] text-4xl uppercase lg:leading-[0.7] pt-3 lg:pt-7 text-center">
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:w-52 w-36 shrink-0 lg:h-24 h-14 object-cover rounded-full lg:pt-3"
                  src="../../../public/Project1.jpg"
                />
                <h2 className="font-[font2] whitespace-nowrap lg:text-[8vw] text-4xl uppercase lg:leading-[0.7] pt-3 lg:pt-7 text-center">
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:w-52 w-36 shrink-0 lg:h-24 h-14 object-cover rounded-full lg:pt-3"
                  src="../../../public/Project2.jpg"
                />
              </div>
              <div className="flex items-center moveX">
                <h2 className="font-[font2] whitespace-nowrap lg:text-[8vw] text-4xl uppercase lg:leading-[0.7] pt-3 lg:pt-7 text-center">
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:w-52 w-36 shrink-0 lg:h-24 h-14 object-cover rounded-full lg:pt-3"
                  src="../../../public/Project1.jpg"
                />
                <h2 className="font-[font2] whitespace-nowrap lg:text-[8vw] text-4xl uppercase lg:leading-[0.7] pt-3 lg:pt-7 text-center">
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:w-52 w-36 shrink-0 lg:h-24 h-14 object-cover rounded-full lg:pt-3"
                  src="../../../public/Project2.jpg"
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t border-gray-500 cursor-pointer">
            <h1 className="font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.7] lg:pt-7 pt-3 text-center">
              Agence
            </h1>
            <div className="flex absolute top-0 bg-[#D3FD50] text-black  moveLink">
              <div className="flex items-center moveX">
                <h2 className="font-[font2] whitespace-nowrap lg:text-[8vw] text-4xl uppercase lg:leading-[0.7] pt-3 lg:pt-7 text-center">
                  Pour Tout Savoir
                </h2>
                <img
                  className="lg:w-52 w-36 shrink-0 lg:h-24 h-14 object-cover rounded-full lg:pt-3"
                  src="../../../public/Agence.jpg"
                />
                <h2 className="font-[font2] whitespace-nowrap lg:text-[8vw] text-4xl uppercase lg:leading-[0.7] pt-3 lg:pt-7 text-center">
                  Pour Tout Savoir
                </h2>
                <img
                  className="lg:w-52 w-36 shrink-0 lg:h-24 h-14 object-cover rounded-full lg:pt-3"
                  src="../../../public/Agence.jpg"
                />
              </div>
              <div className="flex items-center moveX">
                <h2 className="font-[font2] whitespace-nowrap lg:text-[8vw] text-4xl uppercase lg:leading-[0.7] pt-3 lg:pt-7 text-center">
                  Pour Tout Savoir
                </h2>
                <img
                  className="lg:w-52 w-36 shrink-0 lg:h-24 h-14 object-cover rounded-full lg:pt-3"
                  src="../../../public/Agence.jpg"
                />
                <h2 className="font-[font2] whitespace-nowrap lg:text-[8vw] text-4xl uppercase lg:leading-[0.7] pt-3 lg:pt-7 text-center">
                  Pour Tout Savoir
                </h2>
                <img
                  className="lg:w-52 w-36 shrink-0 lg:h-24 h-14 object-cover rounded-full lg:pt-3"
                  src="../../../public/Agence.jpg"
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t border-gray-500 cursor-pointer">
            <h1 className="font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.7] lg:pt-7 pt-3 text-center">
              Contacts
            </h1>
            <div className="flex absolute top-0 bg-[#D3FD50] text-black moveLink">
              <div className="flex items-center moveX">
                <h2 className="font-[font2] whitespace-nowrap lg:text-[8vw] text-4xl uppercase lg:leading-[0.7] pt-3 lg:pt-7 text-center">
                  Pour Envoyer Un Fax
                </h2>
                <img
                  className="lg:w-52 w-36 shrink-0 lg:h-24 h-14 object-cover rounded-full lg:pt-3"
                  src="../../../public/Agence.jpg"
                />
                <h2 className="font-[font2] whitespace-nowrap lg:text-[8vw] text-4xl uppercase lg:leading-[0.7] pt-3 lg:pt-7 text-center">
                  Pour Envoyer Un Fax
                </h2>
                <img
                  className="lg:w-52 w-36 shrink-0 lg:h-24 h-14 object-cover rounded-full lg:pt-3"
                  src="../../../public/Agence.jpg"
                />
              </div>
              <div className="flex items-center moveX">
                <h2 className="font-[font2] whitespace-nowrap lg:text-[8vw] text-4xl uppercase lg:leading-[0.7] pt-3 lg:pt-7 text-center">
                  Pour Envoyer Un Fax
                </h2>
                <img
                  className="lg:w-52 w-36 shrink-0 lg:h-24 h-14 object-cover rounded-full lg:pt-3"
                  src="../../../public/Agence.jpg"
                />
                <h2 className="font-[font2] whitespace-nowrap lg:text-[8vw] text-4xl uppercase lg:leading-[0.7] pt-3 lg:pt-7 text-center">
                  Pour Envoyer Un Fax
                </h2>
                <img
                  className="lg:w-52 w-36 shrink-0 lg:h-24 h-14 object-cover rounded-full lg:pt-3"
                  src="../../../public/Agence.jpg"
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-y border-gray-500 cursor-pointer">
            <h1 className="font-[font2] lg:text-[8vw] text-5xl uppercase lg:leading-[0.7] lg:pt-7 pt-3 text-center">
              Blogue
            </h1>
            <div className="flex absolute top-0 bg-[#D3FD50] text-black  moveLink">
              <div className="flex items-center moveX">
                <h2 className="font-[font2] whitespace-nowrap lg:text-[8vw] text-4xl uppercase lg:leading-[0.7] pt-3 lg:pt-7 text-center">
                  Lire Les Articles
                </h2>
                <img
                  className="lg:w-52 w-36 shrink-0 lg:h-24 h-14 object-cover rounded-full lg:pt-3"
                  src="../../../public/Blog1.jpg"
                />
                <h2 className="font-[font2] whitespace-nowrap lg:text-[8vw] text-4xl uppercase lg:leading-[0.7] pt-3 lg:pt-7 text-center">
                  Lire Les Articles
                </h2>
                <img
                  className="lg:w-52 w-36 shrink-0 lg:h-24 h-14 object-cover rounded-full lg:pt-3"
                  src="../../../public/Blog2.gif"
                />
              </div>
              <div className="flex items-center moveX">
                <h2 className="font-[font2] whitespace-nowrap lg:text-[8vw] text-4xl uppercase lg:leading-[0.7] pt-3 lg:pt-7 text-center">
                  Lire Les Articles
                </h2>
                <img
                  className="lg:w-52 w-36 shrink-0 lg:h-24 h-14 object-cover rounded-full lg:pt-3"
                  src="../../../public/Blog1.jpg"
                />
                <h2 className="font-[font2] whitespace-nowrap lg:text-[8vw] text-4xl uppercase lg:leading-[0.7] pt-3 lg:pt-7 text-center">
                  Lire Les Articles
                </h2>
                <img
                  className="lg:w-52 w-36 shrink-0 lg:h-24 h-14 object-cover rounded-full lg:pt-3"
                  src="../../../public/Blog2.gif"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
