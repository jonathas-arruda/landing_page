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
    <nav className="md:w-[60%] lg:w-[30%]  ">
        
        <Sidebar/>
      <ul className="hidden md:flex font-semibold whitespace-nowrap justify-end">
        {linksNavbar.map((link) => {
          return (
              
          <a className="px-[4%]" key={link.key}>
            {link.key}
          </a>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;