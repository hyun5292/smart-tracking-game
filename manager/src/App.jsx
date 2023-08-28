import { useCallback, useState } from "react";
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

//아이디: admin5144
//비번: Yangju5144!
const App = ({ authService, schService }) => {
  const [isLogined, setIsLogined] = useState("false");
  const [schNm, setSchNm] = useState("");
  const [tNum, setTNum] = useState(0);
  console.log("isLogined = ", isLogined);

  const onLogin = async (mId, mPw) => {
    await authService.login(mId, mPw).then((result) => {
      setIsLogined(result);
    });
    return isLogined;
  };

  const onLogout = useCallback(() => {
    authService.logout().then(window.location.reload());
    setIsLogined("false");
  }, [authService]);

  const onRegSchNm = (schName, tNum) => {
    // schService.registerSchool();

    setSchNm(schName);
    setTNum(tNum);
  };

  return (
    <div className={styles.app}>
      <Header className={styles.header} schNm={schNm} onLogout={onLogout} />
      <div className={styles.content}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPg onLogin={onLogin} />} />
            <Route path="main" element={<MainPg schNm={schNm} tNum={tNum} />} />
            <Route
              path="start"
              element={
                <StartPg isLogined={isLogined} onRegSchNm={onRegSchNm} />
              }
            />
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
