import { dbFB } from "../../main.jsx";
import { preparePhoneData } from "../../Components/ModalForm/postData.js";
import { prepareOtherData } from "../../Components/ModalForm/postData.js";

export async function getAutonomyAllUsers() {
  try {
    const snapshot = await dbFB.ref("autonomy").once("value");
    return snapshot.val();
  } catch (error) {
    console.error(error);
  }
}

export async function isPhoneTaken(data) {
  const postData = preparePhoneData(data);
  try {
    const base = await getAutonomyAllUsers();
    const baseArray = Object.values(base);
    const allPhones = [];
    baseArray.forEach((item) => {
      allPhones.push(item.телефон);
    });
    if (allPhones.includes(postData)) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function isEmailTaken(data) {
  const postData = prepareOtherData(data);
  try {
    const base = await getAutonomyAllUsers();
    const baseArray = Object.values(base);
    const allEmails = [];
    baseArray.forEach((item) => {
      allEmails.push(item.email);
    });
    if (allEmails.includes(postData)) {
      return true;
    } else {
      return false;
    }
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
