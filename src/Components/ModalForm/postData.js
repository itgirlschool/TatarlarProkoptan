import { addUserAutonomy } from "../../Services/AutonomyFB/autonomy";
import { getAutonomyAllUsers } from "../../Services/AutonomyFB/autonomy";

export const prepareNameData = (data) => {
  const dataSliced = data.trim();
  const dataPost = dataSliced[0].toUpperCase() + dataSliced.slice(1);
  return dataPost;
};

export const preparePhoneData = (data) => {
  const dataPost =
    data.slice(0, 2) + " (" + data.slice(3, 6) + ") " + data.slice(6);
  return dataPost;
};
export const prepareOtherData = (data) => {
  const dataPost = data.trim();
  return dataPost;
};

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

const postData = async (lastName, firstName, surName, phone, email) => {
  const lastNamePost = prepareNameData(lastName);
  const firstNamePost = prepareNameData(firstName);
  const surnamePost = prepareNameData(surName);
  const phonePost = preparePhoneData(phone);
  const emailPost = prepareOtherData(email);
  const dataNewUserAutonomy = {
    фамилия: lastNamePost,
    имя: firstNamePost,
    отчество: surnamePost,
    телефон: phonePost,
    email: emailPost,
  };
  try {
    await addUserAutonomy(dataNewUserAutonomy);
  } catch (err) {
    console.log(err);
  }
};

export default postData;
