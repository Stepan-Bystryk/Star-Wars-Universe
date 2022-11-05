import PropTypes from "prop-types";
import styles from "./PersonInfo.module.css";

const PersonInfo = ({ personInfo }: any) => {
  return (
    <>
      <div>
        <ul>
          {personInfo.map(
            ({ title, data }: any) =>
              data && (
                <li key={title}>
                  <span>
                    {title}: {data}
                  </span>
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
