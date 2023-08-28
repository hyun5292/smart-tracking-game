import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./firebase";

class SchService {
  async registerSchool(schNm, teamNum) {
    try {
      for (let i = 1; i <= teamNum; i++) {
        await firebase
          .database()
          .ref("school/" + schNm + "/" + i + "조")
          .set({
            T_NUM: i,
            T_NAME: "",
          })
          .then(() => {
            alert(schNm + "를 등록했습니다!");
          });
      }
      return true;
    } catch (err) {
      alert(
        "알 수 없는 이유로 학교 등록에 실패했습니다! 다시 시도해주세요! ;",
        err
      );
    }
    return false;
  }
}

export default SchService;
