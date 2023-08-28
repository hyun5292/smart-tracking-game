import React, { useRef, useState } from "react";
import styles from "./loginPg.module.css";
import { useNavigate } from "react-router-dom";

const LoginPg = ({ onLogin }) => {
  const mId_ref = useRef();
  const mPw_ref = useRef();
  const navigate = useNavigate();
  const [warning, setWarning] = useState("");

  const doLogin = async () => {
    const mId = mId_ref.current.value;
    const mPw = mPw_ref.current.value;
    if (mId === "") {
      setWarning("아이디를 입력해주세요");
      mId_ref.current.focus();
    } else if (mPw === "") {
      setWarning("비밀번호를 입력해주세요");
      mPw_ref.current.focus();
    } else {
      const result = await onLogin(mId, mPw);

      if (result === "true") navigate("/start");
      else if (result === "wrong-id") mId_ref.current.focus();
      else if (result === "wrong-pw") mPw_ref.current.focus();
    }
  };

  return (
    <div className={styles.loginPg}>
      <div className={styles.login_form}>
        <input
          ref={mId_ref}
          className={styles.mId_input}
          type="text"
          name="mId"
          placeholder="아이디"
        />
        <input
          ref={mPw_ref}
          className={styles.mPw_input}
          type="password"
          name="mPw"
          placeholder="비밀번호"
        />
        <span className={styles.warning}>{warning}</span>
        <button className={styles.login_btn} onClick={doLogin}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPg;
