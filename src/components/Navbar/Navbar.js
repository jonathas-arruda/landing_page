const linksNavbar = [
  { key: "About Us" },
  { key: "Lorem ipsum" },
  { key: "Dolor" },
  { key: "Ipsum" },
  { key: "Lorem" },
];

const Navbar = () => {
  return (
    <nav className="w-[40%]">
      <ul className="font-semibold flex justify-between ">
        {linksNavbar.map((link) => {
          return (
              <li>{link.key}</li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
