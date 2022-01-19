import { useContext, useEffect, useRef, useState } from "react";
import { Menu, X } from "react-feather";
import { Link } from "remix";
import ThemeContext from "~/context/ThemeContext";
import SideBarMenu from "../SideBarMenu/SideBarMenu";

const Navbar = ({ toggleFunc }: { toggleFunc?: Function }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [toggle, setToggle] = useState<boolean>(false);

  const extractvalue = useContext<any>(ThemeContext);

  const { toggleTrue, toggleFalse, sidebar } = extractvalue;
  useEffect(() => {
    if (toggleRef.current) {
      //  toggleRef.current.classList.toggle="main"
    }
  }, [toggleRef]);

  useEffect(() => {
    // let i = 0;
    // window.addEventListener("scroll", (data) => {
    //   console.log(data);
    //   if (window.pageYOffset > 10 && navRef.current?.style.backgroundColor) {
    //     navRef.current.style.backgroundColor = "black";
    //   }
    //   // else if (navRef.current) {
    //   //   navRef.current.style.backgroundColor = "black";
    //   // }
    // });

    window.addEventListener("scroll", onScroll);
    function onScroll() {
      console.log("scroll!");
      console.log(scrollY);
      if (window.scrollY > 50 && navRef.current?.style.backgroundColor) {
        navRef.current.style.backgroundColor = "black";
      }
    }
    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const hamburger = () => {
    if (toggle === true) {
      setToggle(false);
      toggleFalse(false);
    } else {
      setToggle(true);

      toggleTrue(true);
    }

    console.log(toggle);
  };
  4;

  useEffect(() => {
    console.log("hey");
  });
  return (
    <>
      <div
        ref={navRef}
        className={`${
          sidebar == true ? "ml-36" : "ml-0"
        } sticky top-0 left-0  z-50 flex justify-between items-center px-6  h-14`}
      >
        <a href="/">
          <h2 className="font-semibold text-purple-600 text-xl">FreeMix</h2>
        </a>

        <nav className=" w-1/2 text-green-50">
          <ul className="  flex justify-between items-center gap-4 text-sm z-30">
            <li className="hover:border-b-2 border-b-2 border-transparent hover:border-purple-500 hover:transition pb-1 hover:text-purple-400 text-white transition ">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:border-b-2 border-b-2 border-transparent hover:border-purple-500 hover:transition pb-1 hover:text-purple-400 text-white transition ">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="hover:border-b-2 border-b-2 border-transparent hover:border-purple-500 text-white hover:transition pb-1 hover:text-purple-400 transition ">
              {" "}
              <Link to={"/posts"}>Posts</Link>
            </li>
            <li className="hover:border-b-2 border-b-2 border-transparent hover:border-purple-500 hover:transition pb-1 text-white hover:text-purple-400 transition ">
              {" "}
              <Link to={"/"}>FreeMix</Link>
            </li>
            <button
              className="flex justify-center items-center"
              ref={toggleRef}
              onClick={hamburger}
            >
              {/* {toggle === true ? (
                <X />
              ) : ( */}
              <div className="flex justify-center items-center w-6 h-6 z-[3] ">
                <div
                  className={` ${
                    toggle === true
                      ? " translater   after:rotate-45 before:-rotate-45  after:z-20 before:z-20 after:opacity-100 before:opacity-100 transition"
                      : "opacity-100 h-[0.5px] transition"
                  } relative w-full bg-white  after:h-[0.5px] after:absolute after:left-0 after:-top-[6px] after:bg-white after:w-full before:h-[0.5px] before:absolute before:left-0 before:top-[6px] before:bg-white before:w-full opacity-100  `}
                ></div>
              </div>
              {/* )} */}
            </button>
          </ul>
        </nav>
      </div>

      <SideBarMenu toggle={toggle} />
    </>
  );
};

export default Navbar;
function toggleFalse() {
  throw new Error("Function not implemented.");
}
