import { useSelector } from "react-redux";

import styles from "./FavoritePage.module.css";

const FavoritePage = () => {
  const storeData = useSelector((state) => state);
  console.log(storeData);

  return <h1>Favorites Page</h1>;
};

export default FavoritePage;
