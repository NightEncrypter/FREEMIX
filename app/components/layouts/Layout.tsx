import React, { ReactNode, useState } from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import SideBarMenu from "./SideBarMenu/SideBarMenu";

const Layout = ({ children }: { children: ReactNode }) => {
  // const [toggler, setToggler] = useState<boolean>();
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
