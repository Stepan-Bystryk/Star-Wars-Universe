import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "../../helpers/withErrorApi";
import PeopleList from "../../components/PeoplePage/PeopleList";
import { getApiResourse } from "../../utilities/network";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import { API_PEOPLE } from "../../constants/api";

import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }: any) => {
  const [people, setPeople]: any = useState(null);

  const getResourse = async (url: string) => {
    const res = await getApiResourse(url);

    if (res) {
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
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResourse(API_PEOPLE);
  }, []);

  return (
    <>
      <h1>Navigation</h1>
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
