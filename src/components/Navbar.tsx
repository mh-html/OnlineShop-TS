import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCardContext";

const Navbar = () => {
  const { cartQuantity } = useShoppingCart();
  return (
    <nav className="flex justify-between items-center bg-white shadow-sm px-8 py-2">
      <ul className="flex justify-between items-center gap-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/store">Store</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <Link to="/shop">
        <button className="relative bg-blue-500 p-2 rounded-full hover:bg-white group border border-blue-500">
          <FaShoppingCart
            size={"1em"}
            fill="white"
            className="group-hover:fill-blue-500"
          />
          <div className="absolute bottom-0 right-0 text-white bg-black rounded-full size-4 translate-x-1 translate-y-1 text-xs">
            {cartQuantity}
          </div>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
