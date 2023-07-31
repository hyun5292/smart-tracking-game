import React, { useRef } from "react";
import styles from "./questPg.module.scss";
import pStyle from "../../css/page.module.scss";
import { MdAddPhotoAlternate, MdSubdirectoryArrowRight } from "react-icons/md";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const QuestPg = ({ teamNum, member, sendAnswer }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const answerRef = useRef();
  const [questNum, setQuestNum] = useState(0);

  const doSendAnswer = () => {
    if (teamNum === "" || teamNum === 0) {
      alert("오류가 발생했습니다! 메인 페이지로 이동합니다!");
      navigate("/");
    } else if (questNum === "" || questNum === 0) {
      alert("오류가 발생했습니다! 메인 페이지로 이동합니다!");
      navigate("/");
    } else if (answerRef.current.value === "") {
      alert("정답을 먼저 입력해주세요!");
      answerRef.current.focus();
    } else {
      sendAnswer(teamNum, questNum, answerRef.current.value);
    }
  };

  useEffect(() => {
    if (location.state) {
      setQuestNum(location.state.qNum);
    } else {
      alert("오류가 발생했습니다! 메인 페이지로 이동합니다!");
      navigate("/");
    }
  }, [location.state, navigate]);

  return (
    <div className={`${styles.questPg} ${pStyle.default}`}>
      <div className={styles.teamInfo}>
        <span className={styles.teamJo}>00초등학교 - {teamNum} 조</span>
        <div className={styles.teamName}>
          <span>
            팀<br />원
          </span>
          <div>{member}</div>
        </div>
      </div>
      <div className={styles.answerCont}>
        <span className={styles.questNum}>{questNum}번</span>
        <textarea
          ref={answerRef}
          className={styles.questAnswer}
          type="text"
          placeholder="해석한 내용을 입력해주세요"
        />
        <button className={styles.upLoad_btn} onClick={doSendAnswer}>
          <BsFillClipboardCheckFill />
        </button>
        <button className={styles.photo_btn}>
          <MdAddPhotoAlternate />
        </button>
        <div className={styles.photoCont}>
          <img
            className={styles.photoExample}
            src="./images/example.jpg"
            alt="예시 사진"
            width="100%"
            height="auto"
          />
          <img className={styles.photoAnswer} src="" alt="촬영된 사진" />
        </div>
        <div className={styles.comment_icon}>
          <MdSubdirectoryArrowRight />
        </div>
        <textarea
          className={styles.comment}
          disabled
          type="text"
          placeholder="Comment..."
        />
      </div>
    </div>
  );
};

export default QuestPg;
