import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { makeConcurrentRequest } from "../../../utilities/network";
import styles from "./PersonFilms.module.css";

const PersonFilms = ({ personFilms }: { personFilms: any[] }) => {
  const [filmsName, setFilmsName] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const films = personFilms.map((url: any) => url);
      const response = await makeConcurrentRequest(films);

      setFilmsName(response);
    })();
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {filmsName
          .sort((a, z): any => a.episode_id - z.episode_id)
          .map(({ title, episode_id }: any) => (
            <li className={styles.list__item}>
              <span className={styles.item__episode}>Episode {episode_id}</span>
              <span className={styles.item__colon}> : </span>
              <span className={styles.item__title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PersonFilms;
