import { Outlet } from "remix";

function Heck() {
  return (
    <div>
      hey this is heck
      <Outlet />
    </div>
  );
}

export default Heck;
