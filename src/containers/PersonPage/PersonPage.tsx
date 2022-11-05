import PropTypes, { any } from "prop-types";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { withErrorApi } from "../../helpers/withErrorApi";

import PersonInfo from "../../components/PersonPage/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto";

import { getApiResource } from "../../utilities/network";
import { getPeopleImage } from "../../services/getPeopleData";
import { API_PERSON } from "../../constants/api";

import styles from "./PersonPage.module.css";

const PersonPage = ({ setErrorApi }: any) => {
  const params = useParams();
  const [personInfo, setPersonInfo]: any = useState(null);
  const [personName, setPersonName]: any = useState(null);
  const [personPhoto, setPersonPhoto]: any = useState(null);

  useEffect(() => {
    (async () => {
      const currentId = params.id;
      const res = await getApiResource(`${API_PERSON}/${currentId}/`);

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
        setPersonPhoto(getPeopleImage(currentId));

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <h1>{personName}</h1>

      <PersonPhoto personPhoto={personPhoto} personName={personName} />

      {useParams().currentId}
      {personInfo && <PersonInfo personInfo={personInfo} />}
    </>
  );
};

PersonPage.propTypes = {
  useParams: PropTypes.object,
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
