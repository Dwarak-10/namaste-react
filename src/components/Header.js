import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  //if no dependency arra ==> useEffect is called on every render
  //if dependency array is empty [] ==> useEffect is called on initial render(just once)
  //if dependency array is [btnName] ==> useEffect is called every time btnName is updated
  useEffect(
    function () {
      // console.log("UseEffect Called!");
    },
    [btnName]
  );
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  // Subscribing to the store using the selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-5 p-5">
          <li className="px-4">Online status:{onlineStatus ? "🟢" : "🔴"} </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">
            <Link>{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
