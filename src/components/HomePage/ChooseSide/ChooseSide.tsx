import cn from "classnames";
import imgLightSide from "./img/Light.jpg";
import imgDarkSide from "./img/Dark.jpg";
import imgDefaultSide from "./img/Default.jpg";

import {
  useTheme,
  THEME_NEUTRAL,
  THEME_LIGHT,
  THEME_DARK,
} from "../../../context/ThemeProvider";

import styles from "./ChooseSide.module.css";

const ChooseSideItem = ({
  classes,
  theme,
  text,
  img,
}: {
  classes: string;
  theme: string;
  text: string;
  img: string;
}) => {
  const isTheme: any = useTheme();

  return (
    <div
      className={cn(styles.item, classes)}
      onClick={() => isTheme.chenge(theme)}
    >
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text}></img>
    </div>
  );
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light Side",
      img: imgLightSide,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: "Dark Side",
      img: imgDarkSide,
      classes: styles.item__dark,
    },
    {
      theme: THEME_NEUTRAL,
      text: "Default",
      img: imgDefaultSide,
      classes: styles.item__default,
    },
  ];

  return (
    <div className={styles.container}>
      {elements.map(({ theme, text, img, classes }, index) => (
        <ChooseSideItem
          key={index}
          theme={theme}
          text={text}
          img={img}
          classes={classes}
        />
      ))}
    </div>
  );
};

export default ChooseSide;
