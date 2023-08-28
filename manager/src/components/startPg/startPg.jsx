import React, { useEffect, useState } from "react";
import styles from "./startPg.module.css";
import pStyle from "../../css/page.module.css";
import { FaClipboardCheck, FaMapMarkedAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StartPg = ({ isLogined, onRegSchNm }) => {
  const navigate = useNavigate();
  const [schNm, setSchNm] = useState("");
  const [schKind, setSchKind] = useState("");
  const [tNum, setTNum] = useState(1);

  const changeSchName = (event) => {
    setSchNm(event.target.value);
  };
  const changeSchKind = (event) => {
    setSchKind(event.target.value);
  };
  const changeTeamNum = (event) => {
    setTNum(event.target.value);
  };

  const goToPage = (event, pgLink) => {
    event.preventDefault();
    navigate(pgLink);
  };

  const doRegister = (event) => {
    event.preventDefault();
    onRegSchNm(schNm + schKind, tNum);
    navigate("/main");
  };

  useEffect(() => {
    if (isLogined !== "true") {
      navigate("/");
    }
  }, [isLogined, navigate]);

  return (
    <div className={`${styles.startPg} ${pStyle.default}`}>
      <div className={styles.top_btns}>
        <button
          className={`${styles.answer_btn} ${pStyle.square_btn}`}
          onClick={(event) => goToPage(event, "/answer")}
        >
          <FaClipboardCheck />
        </button>
        <button
          className={`${styles.map_btn} ${pStyle.square_btn}`}
          onClick={(event) => goToPage(event, "/map")}
        >
          <FaMapMarkedAlt />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.schoolKind}>
          <input
            className={styles.schName}
            type="text"
            placeholder="학교이름"
            onChange={changeSchName}
          />
          <select defaultValue="초등" onChange={changeSchKind}>
            <option value="초등">초등</option>
            <option value="중">중</option>
            <option value="고등">고등</option>
          </select>
          <span>학교</span>
        </div>
        <div className={styles.teamNum}>
          <span>총</span>
          <input
            className={styles.teamNum}
            type="number"
            min="1"
            max="30"
            onChange={changeTeamNum}
          />
          <span>조</span>
        </div>
        <button className={styles.start_btn} onClick={doRegister}>
          시작하기
        </button>
      </div>
    </div>
  );
};

export default StartPg;
