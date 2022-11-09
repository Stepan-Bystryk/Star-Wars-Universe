import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PeopleList from "../../components/PeoplePage/PeopleList";

import styles from "./FavoritePage.module.css";

const FavoritePage = () => {
  const [people, setPeople] = useState([]);

  const storeDate = useSelector((state: any) => state.favoriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeDate);

    if (arr.length) {
      const res: any = arr.map((item: any) => {
        return {
          id: item[0],
          ...item[1],
        };
      });

      setPeople(res);
    }
  }, []);

  return (
    <>
      <h1 className="header__text">Favorites Page</h1>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <h2 className={styles.comment}>No data</h2>
      )}
    </>
  );
};

export default FavoritePage;
