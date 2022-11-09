import { Link } from "react-router-dom";
import Favorite from "../Favorite";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="people/?page=1">People</Link>
        </li>
        <li>
          <Link to="/not-found">Not Found</Link>
        </li>
      </ul>

      <Favorite />
    </div>
  );
};

export default Header;
