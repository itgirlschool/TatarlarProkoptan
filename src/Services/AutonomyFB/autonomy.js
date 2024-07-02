import { dbFB } from "../../main.jsx";

export async function getAutonomyAllUsers() {
  try {
    const snapshot = await dbFB.ref("autonomy").once("value");
    return snapshot.val();
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
