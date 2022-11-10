import React, { useState, useEffect, Suspense } from "react";
import PropTypes, { any } from "prop-types";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { withErrorApi } from "../../helpers/withErrorApi";

import PersonInfo from "../../components/PersonPage/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack";

import UiLoading from "../../components/UI/UiLoading";

import { getApiResource } from "../../utilities/network";
import { getPeopleImage } from "../../services/getPeopleData";
import { API_PERSON } from "../../constants/api";

import styles from "./PersonPage.module.css";

const PersonFilms = React.lazy(
  () => import("../../components/PersonPage/PersonFilms")
);

const PersonPage = ({ setErrorApi }: any) => {
  const params = useParams();

  const [personId, setPersonId]: any = useState(null);
  const [personInfo, setPersonInfo]: any = useState(null);
  const [personName, setPersonName]: any = useState(null);
  const [personPhoto, setPersonPhoto]: any = useState(null);
  const [personFilms, setPersonFilms]: any = useState(null);
  const [personFavorite, setPersonFavorite]: any = useState(false);

  const storeDate: any = useSelector((state: any) => state.favoriteReducer);

  useEffect(() => {
    (async () => {
      const currentId: any = params.id;
      const res = await getApiResource(`${API_PERSON}/${currentId}/`);

      storeDate[currentId] ? setPersonFavorite(true) : setPersonFavorite(false);

      setPersonId(currentId);

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

        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />

      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>

        <div className={styles.container}>
          <PersonPhoto
            personId={personId}
            personPhoto={personPhoto}
            personName={personName}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />

          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  useParams: PropTypes.object,
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
