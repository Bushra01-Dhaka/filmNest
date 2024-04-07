import { Link } from "react-router-dom";

const Drawer = () => {

  const navItems = <>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/movies">Movies</Link></li>
     <li><Link>Dramas</Link></li>
  </>

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary bg-[#FE0000] hover:bg-red-700 text-white border-0 uppercase shadow-lg">
          Explore
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#FE0000] text-white">
          {/* Sidebar content here */}
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
