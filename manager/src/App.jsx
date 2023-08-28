import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import AnswerPg from "./components/answerPg/answerPg";
import MapPg from "./components/mapPg/mapPg";
import StartPg from "./components/startPg/startPg";
import MainPg from "./components/mainPg/mainPg";
import QuestListPg from "./components/questListPg/questListPg";
import QuestPg from "./components/quest/questPg";
import LoginPg from "./components/login/loginPg";

const App = () => {
  const [schNm, setSchNm] = useState("");

  return (
    <div className={styles.app}>
      <Header className={styles.header} schNm={schNm} />
      <div className={styles.content}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPg />} />
            <Route path="main" element={<MainPg />} />
            <Route path="start" element={<StartPg />} />
            <Route path="answer" element={<AnswerPg />} />
            <Route path="map" element={<MapPg />} />
            <Route path="quest_list" element={<QuestListPg />} />
            <Route path="quest" element={<QuestPg />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default App;
