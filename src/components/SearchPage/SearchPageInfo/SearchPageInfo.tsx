import { Link } from "react-router-dom";

import styles from "./SearchPageInfo.module.css";

const SearchPageInfo = ({ people }: any) => (
  <>
    {people.length ? (
      <ul>
        {people.map(({ id, name, img }: any) => (
          <li key={id}>
            <Link to={`/people/${id}`}>
              <img src={img} alt={name} />
              <p>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <h2>No results</h2>
    )}
  </>
);

export default SearchPageInfo;
