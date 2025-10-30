import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type NavContextType = [boolean, Dispatch<SetStateAction<boolean>>];
export const NavbarContext = createContext<NavContextType | undefined>(
  undefined
);

const NavContext = ({ children }: { children: ReactNode }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        {children}
      </NavbarContext.Provider>
    </div>
  );
};

export default NavContext;
