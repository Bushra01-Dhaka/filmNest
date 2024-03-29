import logo from "../../assets/images/logo_red.png"
import Drawer from "../NormalCompo/Drawer";

const Navbar = () => {
    return (
        <div className="p-10 bg-black shadow-md">
            <div className="flex justify-between items-center">
                <img src={logo} className="w-[100px] h-[50px]" alt="" />
                <div>
                    <Drawer></Drawer>
                </div>
            </div>
        </div>
    );
};

export default Navbar;