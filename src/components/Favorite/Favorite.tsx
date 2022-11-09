import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import icon from "./img/bookmark.svg";

import styles from "./Favorite.module.css";

const Favorite = () => {
  const [count, setCount]: any = useState();

  const favouriteList: { [key: number]: { name: string; img: string } } =
    useSelector((state: any) => state.favoriteReducer);

  useEffect(() => {
    const length = Object.keys(favouriteList).length;
    length.toString().length > 2 ? setCount("99+") : setCount(length);
  }, [favouriteList]);

  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img className={styles.icon} src={icon} alt="Favorites" />
      </Link>
    </div>
  );
};

export default Favorite;
