import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import {
  setPersonToFavorite,
  removePersonFromFavorite,
} from "../../../store/actions";

import iconFavorite from "./img/favorite.svg";
import iconFavoriteFill from "./img/favorite-fill.svg";

import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({
  personId,
  personPhoto,
  personName,
  personFavorite,
  setPersonFavorite,
}: {
  personId: string;
  personPhoto: string;
  personName: string;
  personFavorite: boolean;
  setPersonFavorite: (value: boolean) => {};
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          onClick={dispatchFavoritePeople}
          className={styles.favorite}
          alt="Add to favorite"
        />
      </div>
    </>
  );
};

export default PersonPhoto;
