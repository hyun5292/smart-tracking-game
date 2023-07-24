import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import io from "socket.io-client";
import styles from "./App.module.scss";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainPg from "./components/mainPg/mainPg";
import MapPg from "./components/mapPg/mapPg";
import QuestPg from "./components/questPg/questPg";

const socket = io.connect("http://localhost:3001");

const App = ({ fbData }) => {
  const [teamNum, setTeamNum] = useState(0);
  const [member, setMember] = useState("");

  const setTeamInfo = (tNum, mber) => {
    setTeamNum(tNum);
    setMember(mber);
    socket.emit("join", { teamNum: tNum, member: mber });
  };

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header className={styles.header} />
        <div className={styles.content}>
          <Routes>
            <Route
              path="/"
              element={
                <MainPg
                  teamNum={teamNum}
                  member={member}
                  setTeamInfo={setTeamInfo}
                />
              }
            />
            <Route path="map" element={<MapPg fbData={fbData} />} />
            <Route
              path="quest"
              element={<QuestPg teamNum={teamNum} member={member} />}
            />
          </Routes>
        </div>
        <Footer className={styles.footer} />
      </BrowserRouter>
    </div>
  );
};

export default App;
