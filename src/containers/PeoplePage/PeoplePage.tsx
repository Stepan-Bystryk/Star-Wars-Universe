import styles from "./PeoplePage.module.css";
import { getApiResourse } from "../../utilities/network";
import { useState, useEffect } from "react";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";

const PeoplePage = () => {
  const [people, setPeople]: any = useState(null);

  const getResourse = async (url: string) => {
    const res = await getApiResourse(url);

    const peopleList = res.results.map(({ name, url }: any) => {
      const id = getPeopleId(url);
      const img = getPeopleImage(id);

      return {
        id,
        name,
        img,
      };
    });

    setPeople(peopleList);
  };

  useEffect(() => {
    getResourse(API_PEOPLE);
  }, []);

  return <>{people && <PeopleList people={people} />}</>;
};

export default PeoplePage;
