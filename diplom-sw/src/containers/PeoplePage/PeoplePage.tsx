import styles from "./PeoplePage.module.css";
import { getApiResourse } from "../../utilities/network";
import { useState, useEffect } from "react";
import { API_PEOPLE } from "../../constants/api";

const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  const getResourse = async (url: string) => {
    const res = await getApiResourse(url);
    const peopleList = res.results.map((element: any) => {
      console.log(element.name, element.url);
    });

    setPeople(peopleList);
  };

  useEffect(() => {
    getResourse(API_PEOPLE);
  }, []);

  return <></>;
};

export default PeoplePage;
