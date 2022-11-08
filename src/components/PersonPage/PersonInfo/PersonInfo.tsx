import PropTypes from "prop-types";
import styles from "./PersonInfo.module.css";

const PersonInfo = ({ personInfo }: any) => {
  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.list__container}>
          {personInfo.map(
            ({ title, data }: any) =>
              data && (
                <li className={styles.list__item} key={title}>
                  <span className={styles.item__title}>{title}</span>: {data}
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
};

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
};

export default PersonInfo;
