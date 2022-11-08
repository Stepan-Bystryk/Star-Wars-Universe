import { Routes, Route } from "react-router-dom";

import PeoplePage from "../PeoplePage";
import PersonPage from "../PersonPage";
import HomePage from "../HomePage";
import NotFoundPage from "../NotFoundPage";
import FavoritesPage from "../FavoritePage";

import Header from "../../components/Header";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/:id" element={<PersonPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
