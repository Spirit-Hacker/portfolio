import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { useLocation } from "react-router-dom";

type NavContextType = [boolean, Dispatch<SetStateAction<boolean>>];
type NavColorContextType = [string, Dispatch<SetStateAction<string>>];
export const NavbarContext = createContext<NavContextType | undefined>(
  undefined
);
export const NavbarColorContext = createContext<NavColorContextType | undefined>(
  undefined
);

const NavContext = ({ children }: { children: ReactNode }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [navColor, setNavColor] = useState("white");

  const locate = useLocation().pathname;
  useEffect(() => {
    if (locate === "/") {
      setNavColor("white");
    } else {
      setNavColor("black");
    }
  }, [locate]);

  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        <NavbarColorContext.Provider value={[navColor, setNavColor]}>
          {children}
        </NavbarColorContext.Provider>
      </NavbarContext.Provider>
    </div>
  );
};

export default NavContext;
