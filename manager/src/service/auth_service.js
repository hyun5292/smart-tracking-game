import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { firebaseAuth } from "./firebase";

class AuthService {
  async login(mId, mPw) {
    try {
      const mEmail = mId + "@naver.com";
      const user = await firebaseAuth
        .signInWithEmailAndPassword(mEmail, mPw)
        .then((result) => {
          if (result.user) return "true";
        });

      return user;
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          alert("아이디를 다시 확인해주세요!");
          return "wrong-id";
        case "auth/wrong-password":
          alert("비밀번호가 틀렸습니다!");
          return "wrong-pw";
        default:
          alert(
            "알 수 없는 이유로 로그인에 실패하였습니다! 죄송합니다! 다시 시도해주세요!" +
              err
          );
          break;
      }
    }
    return "false";
  }

  async logout() {
    await firebaseAuth.signOut();
    return;
  }
}

export default AuthService;
