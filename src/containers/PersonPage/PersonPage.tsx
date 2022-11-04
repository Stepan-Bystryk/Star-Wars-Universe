import PropTypes, { any } from "prop-types";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { withErrorApi } from "../../helpers/withErrorApi";
import { getApiResource } from "../../utilities/network";
import { API_PERSON } from "../../constants/api";

import styles from "./PersonPage.module.css";

const PersonPage = ({ setErrorApi }: any) => {
  const params = useParams();
  const [personInfo, setPersonInfo]: any = useState(null);
  const [personName, setPersonName]: any = useState(null);

  useEffect(() => {
    (async () => {
      const current = params.id;
      const res = await getApiResource(`${API_PERSON}/${current}/`);

      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair Color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);

        setPersonName(res.name);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <h1>
        {personName}
        {useParams().current}
        {personInfo && (
          <ul>
            {personInfo.map(
              ({ title, data }: any) =>
                data && (
                  <li key={title}>
                    <span>
                      {title}: {data}
                    </span>
                  </li>
                )
            )}
          </ul>
        )}
      </h1>
    </>
  );
};

PersonPage.propTypes = {
  useParams: PropTypes.object,
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
