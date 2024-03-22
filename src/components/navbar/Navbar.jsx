import { React, useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../images/logo_2.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <img src={Logo} alt="Logo" />
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(" ") : [styles.menu]}>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Log in</a>
          </li>
          <li>
            <a href="/#">Sign up</a>
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </header>
  );
};

export default Navbar;
