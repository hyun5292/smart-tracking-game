import React, { useEffect } from "react";
import styles from "./mainPg.module.css";
import pStyle from "../../css/page.module.css";
import { FaClipboardCheck, FaPowerOff } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MainPg = ({ schNm, tNum }) => {
  const navigate = useNavigate();
  console.log("schNm = ", schNm);
  console.log("tNum = ", tNum);

  useEffect(() => {
    if (schNm || tNum) {
      navigate("/start");
    }
  }, [navigate, schNm, tNum]);

  return (
    <div className={`${styles.mainPg} ${pStyle.default}`}>
      <div className={styles.top_btns}>
        <button className={`${styles.answer_btn} ${pStyle.square_btn}`}>
          <FaClipboardCheck />
        </button>
        <button className={`${styles.reset_btn} ${pStyle.square_btn}`}>
          <FaPowerOff />
        </button>
      </div>
      <div className={pStyle.title}>{schNm}</div>
      <div className={pStyle.content}>
        <div className={pStyle.btnCont}>
          {tNum &&
            tNum.map((team) => {
              return <button className={pStyle.btnItem}>{team}조</button>;
            })}
        </div>
      </div>
    </div>
  );
};

export default MainPg;
