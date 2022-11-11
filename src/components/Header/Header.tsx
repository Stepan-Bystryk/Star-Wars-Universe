import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Favorite from "../Favorite";
import {
  useTheme,
  THEME_NEUTRAL,
  THEME_LIGHT,
  THEME_DARK,
} from "../../context/ThemeProvider";

import imgNeutral from "./img/neutral.svg";
import imgLight from "./img/light.svg";
import imgDark from "./img/dark.svg";

import styles from "./Header.module.css";

const Header = () => {
  const [icon, setIcon] = useState(imgNeutral);
  const isTheme: any = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLight);
        break;
      case THEME_DARK:
        setIcon(imgDark);
        break;
      case THEME_NEUTRAL:
        setIcon(imgNeutral);
        break;

      default:
        setIcon(imgNeutral);
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Star Wars" />

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
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>

      <Favorite />
    </div>
  );
};

export default Header;
