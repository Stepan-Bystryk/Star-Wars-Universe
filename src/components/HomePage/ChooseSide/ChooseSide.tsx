import PropTypes from "prop-types";
import {
  useTheme,
  THEME_NEUTRAL,
  THEME_LIGHT,
  THEME_DARK,
} from "../../../context/ThemeProvider";

import styles from "./ChooseSide.module.css";

const ChooseSide = () => {
  const isTheme: any = useTheme();

  return (
    <>
      {isTheme.theme}
      <button onClick={() => isTheme.chenge(THEME_LIGHT)}>Light</button>
      <button onClick={() => isTheme.chenge(THEME_DARK)}>Dark</button>
      <button onClick={() => isTheme.chenge(THEME_NEUTRAL)}>Neutral</button>
    </>
  );
};

ChooseSide.propTypes = {};

export default ChooseSide;
