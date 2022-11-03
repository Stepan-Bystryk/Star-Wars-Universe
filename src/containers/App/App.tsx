import PeoplePage from "../PeoplePage";
import HomePage from "../HomePage";

import { Routes, Route } from "react-router-dom";
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
        </Routes>
      </div>
    </>
  );
};

export default App;
