import Sidebar from "../../assets/images/svg/Sidebar";


const linksNavbar = [
  { key: "About Us" },
  { key: "Lorem ipsum" },
  { key: "Dolor" },
  { key: "Ipsum" },
  { key: "Lorem" },
];

const Navbar = () => {
  return (
    <nav className="md:w-[60%] lg:w-[45%]  ">
        <Sidebar/>
      <ul className="hidden md:flex font-semibold whitespace-nowrap justify-between w-[60%] ml-16 ">
        {linksNavbar.map((link) => {
          return (
              
          <li className="mx-3" key={link.key}>
            {link.key}
          </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
//paddin desalinhado
//responsividade do container
// sm:w-[70%]  lg:w-[70%] mx-8  xl:w-[70%] 2xl:w-[70%]