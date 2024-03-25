import Logo from "../../images/cons Logo.svg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10">
      <div className="bg-lila">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="#" className="flex items-center space-x-3">
            <img src={Logo} className="h-10" alt="Cons Logo" />
          </a>
        </div>
      </div>
      <div className="bg-lila  pb-3">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 space-x-8 text-sm text-white font-bold">
              <li>
                <a href="/" className="group">
                  Lorem
                  <span className="block max-w-0 group-hover:max-w-full mt-1 first: h-1 bg-lime"></span>
                </a>
              </li>

              <li>
                <a href="/" className="group">
                  Ipsum
                  <span className="block max-w-0 group-hover:max-w-full mt-1 first: h-1 bg-lime"></span>
                </a>
              </li>
              <li>
                <a href="/" className="group">
                  Dolor
                  <span className="block max-w-0 group-hover:max-w-full mt-1 first: h-1 bg-lime"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
