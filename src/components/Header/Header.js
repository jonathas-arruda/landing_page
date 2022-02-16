import Logo from "../../assets/images/svg/Logo";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="py-3 flex justify-around items-center bg-white border-grey shadow-md w-full">
        <Logo />
        <Navbar />
    </div>
  );
};

export default Header;
