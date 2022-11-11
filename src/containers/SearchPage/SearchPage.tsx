import PropTypes from "prop-types";
import { useState } from "react";

import { getApiResource } from "../../utilities/network";
import { API_SEARCH } from "../../constants/api";
import { withErrorApi } from "../../helpers/withErrorApi";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";

import SearchPageInfo from "../../components/SearchPage/SearchPageInfo";

import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }: any) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const getResponse = async (params: any) => {
    const res = await getApiResource(API_SEARCH + params);

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

  const handleInputChenge = (event: any) => {
    const value = event.target.value;

    setInputSearchValue(value);
    getResponse(value);
  };

  return (
    <>
      <h1 className="header__text">Search</h1>
      <input
        type="text"
        value={inputSearchValue}
        onChange={handleInputChenge}
        placeholder="Input characters name"
      />
      <SearchPageInfo people={people} />
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
