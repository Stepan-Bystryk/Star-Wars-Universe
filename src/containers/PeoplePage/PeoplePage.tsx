import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "../../helpers/withErrorApi";
import PeopleList from "../../components/PeoplePage/PeopleList";
import PeopleNavigation from "../../components/PeoplePage/PeopleNavigation";
import { getApiResource } from "../../utilities/network";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "../../services/getPeopleData";
import { API_PEOPLE } from "../../constants/api";
import { useQueryParams } from "../../hooks/useQueryParams";

import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }: any) => {
  const [people, setPeople]: any = useState(null);
  const [prevPage, setPrevPage]: any = useState(null);
  const [nextPage, setNextPage]: any = useState(null);
  const [counterPage, setCounterPage]: any = useState(1);

  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResource = async (url: string) => {
    const res = await getApiResource(url);

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
      setPrevPage(res.previous);
      setNextPage(res.next);
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
