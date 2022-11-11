import cn from "classnames";
import "../index.css";

import clearIcon from "./img/cancel.svg";

import styles from "./UiInput.module.css";

const UiInput: any = ({
  value,
  handleInputChenge,
  placeholder,
  classes,
}: {
  value: string;
  handleInputChenge: ({}) => {};
  placeholder: string;
  classes: string;
}) => (
  <div className={cn(styles.wrapper__input, classes)}>
    <input
      type="text"
      value={value}
      onChange={(e) => handleInputChenge(e.target.value)}
      placeholder={placeholder}
      className={styles.input}
    />
    <img
      onClick={() => value && handleInputChenge("")}
      src={clearIcon}
      className={cn(styles.clear, !value && styles.clear__disabled)}
      alt="clear"
    />
  </div>
);

export default UiInput;
