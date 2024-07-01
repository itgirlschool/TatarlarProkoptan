import { dbFB } from "../../main.jsx";

export async function getAutonomyAllUsers() {
  try {
    const snapshot = await dbFB.ref("autonomy").once("value");
    console.log(snapshot.val());
    return snapshot.val();
  } catch (error) {
    console.error(error);
  }
}

// export async function isPhoneTaken(data) {
//   try {

//     const snapshot = await dbFB.ref("autonomy").orderBy('телефон').isEqual(data).once("value");
//     console.log(snapshot.exists());
//     if (snapshot.exists()) {
//       return true;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function isPhoneTaken(data) {
  try {
    dbFB
      .ref("autonomy")
      .child("phone")
      .child(data)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
          return true;
        } else {
          return false;
        }
      });
  } catch (error) {
    console.error(error);
  }
}

export async function addUserAutonomy(userData) {
  try {
    const ref = dbFB.ref("autonomy").push();
    const newKey = ref.key;
    const dataWithKey = { ...userData, key: newKey };
    await ref.set(dataWithKey);
    return newKey;
  } catch (error) {
    console.error(error);
  }
}
