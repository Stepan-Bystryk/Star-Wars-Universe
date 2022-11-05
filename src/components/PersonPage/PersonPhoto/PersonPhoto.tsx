import PropTypes from "prop-types";
import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({ personPhoto, personName }: any) => {
  return (
    <>
      <div>
        <img src={personPhoto} alt={personName} />
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
};

export default PersonPhoto;
