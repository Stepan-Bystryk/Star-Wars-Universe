import PropTypes from "prop-types";
import { useCallback, useState } from "react";
import { debounce } from "lodash";

import { getApiResource } from "../../utilities/network";
import { API_SEARCH } from "../../constants/api";
import { withErrorApi } from "../../helpers/withErrorApi";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";

import UiInput from "../../components/UI/UiInput/UiInput";
import SearchPageInfo from "../../components/SearchPage/SearchPageInfo";

import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }: { setErrorApi: ({}) => {} }) => {
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

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  );

  const handleInputChenge = (value: any) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  return (
    <>
      <h1 className="header__text">Search</h1>

      <UiInput
        value={inputSearchValue}
        handleInputChenge={handleInputChenge}
        placeholder="Enter character name"
        classes={styles.input__search}
      />

      <SearchPageInfo people={people} />
    </>
  );
};

export default withErrorApi(SearchPage);
