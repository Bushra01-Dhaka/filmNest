import "../../App.css"
import { GiWorld } from "react-icons/gi";
import { IoIosColorFilter } from "react-icons/io";
import { TbDiscountCheck } from "react-icons/tb";
const Card = () => {
    return (
        <div className="p-20 flex justify-evenly items-center gap-6">
           <div className="cardBox ">
              <div className="icons flex flex-col">
              <GiWorld className="text-8xl text-center text-white animate-bounce"></GiWorld>
              <p className="text-white  text-lg py-4">Works Worldwide</p>
              </div>
            </div> 
            <div className="cardBox">
            <div className="icons flex flex-col">
              <IoIosColorFilter className="text-8xl text-center text-white animate-spin duration-20000"></IoIosColorFilter>
              <p className="text-white  text-lg py-4">Personalized Filtering</p>
              </div>
            </div> 
            <div className="cardBox">
            <div className="icons flex flex-col">
              <TbDiscountCheck className="text-8xl text-center text-white animate-bounce"></TbDiscountCheck>
              <p className="text-white  text-lg py-4">Always 100% Free</p>
              </div>
            </div> 
        </div>
    );
};

export default Card;