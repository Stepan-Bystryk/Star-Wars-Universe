import {
  HTTPS,
  SWAPI_ROOT,
  SWAPI_POEPLE,
  GUIDE_IMG_EXTENSION,
  URL_IMG_PERSON,
} from "../constants/api";

const getID = (url: any, category: any) => {
  const id = url.replace(HTTPS + SWAPI_ROOT + category, "").replace(/\//g, "");

  return id;
};

export const getPeopleId = (url: any) => getID(url, SWAPI_POEPLE);

export const getPeopleImage = (id: any) =>
  `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;
