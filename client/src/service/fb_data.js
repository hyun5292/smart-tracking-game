import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./firebase";

class FirebaseData {
  async getMap() {
    try {
      const mapAddr = await firebase
        .database()
        .ref("map")
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) return snapshot.val();
          else return false;
        });
      return mapAddr;
    } catch (error) {
      alert("오류가 발생했습니다! getMap() Error: ", error);
    }
  }
}

export default FirebaseData;
