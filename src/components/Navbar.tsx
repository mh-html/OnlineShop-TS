import { NavLink } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-white shadow-sm px-8 py-2">
            <ul className="flex justify-between items-center gap-4">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/store'>Store</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
            </ul> 
            <button className="relative bg-blue-500 p-2 rounded-full">
            <FaShoppingCart  size={'1em'} fill="white" />
            <div className="absolute bottom-0 right-0 text-white bg-black rounded-full size-4 translate-x-1 translate-y-1 text-xs">3</div>
            </button>
        </nav>
    );
};

export default Navbar;