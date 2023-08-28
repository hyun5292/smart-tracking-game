import React from "react";
import styles from "./loginPg.module.css";

const LoginPg = (props) => {
  const doLogin = (event) => {
    console.log(event);
  };

  return (
    <div className={styles.loginPg}>
      <form action={doLogin} className={styles.loginCont}>
        <input
          className={styles.mId_input}
          type="text"
          name="mId"
          placeholder="아이디"
        />
        <input
          className={styles.mPw_input}
          type="password"
          name="mPw"
          placeholder="비밀번호"
        />
        <button className={styles.login_btn}>로그인</button>
      </form>
    </div>
  );
};

export default LoginPg;
