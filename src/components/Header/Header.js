import Logo from "../../assets/images/svg/Logo";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="py-3 flex justify-around items-center bg-white drop-shadow-md border-grey w-full ">
        <Logo />
        <Navbar />
    </div>
  );
};

export default Header;
