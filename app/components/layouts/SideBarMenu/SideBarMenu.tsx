import { useContext } from "react";
import { Link } from "remix";
import ThemeContext from "~/context/ThemeContext";

function SideBarMenu({ toggle }: { toggle: boolean }) {
  const extractvalue = useContext<any>(ThemeContext);

  const { sidebar } = extractvalue;

  return (
    <div
      className={` ${
        sidebar === true
          ? " bg-[rgba(165,75,250,0.4)] w-36 opacity-100 pointer-events-auto transition duration-200 translate-x-0"
          : " opacity-0 pointer-events-none  transition duration-200 -translate-x-40"
      }  fixed top-0 left-0 bottom-0 transition duration-200 `}
    >
      <div className="flex justify-center">
        <ul className="flex items-start flex-col">
          {["Home", "Albums", "Playlist", "Artist"].map((l) => (
            <li key={l} className="mb-4  font-semibold p-4">
              {/* <a href="/"> */}
              <Link to="/" className="text-white text-sm">
                {" "}
                {l}
              </Link>
              {/* </a> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBarMenu;
