import brandLogo from "../assets/logo/logo.png";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between h-[70px] p-3 bg-[#0b0b0b] my-3 rounded-lg">
        {/* Brand Logo */}
        <img src={brandLogo} alt="Brand Logo" style={{ maxWidth: "600px" }} />
        {/* Cart Section */}
        <div className="my-auto">
          {" "}
          <FaShoppingCart size={25} style={{ color: "white" }} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
