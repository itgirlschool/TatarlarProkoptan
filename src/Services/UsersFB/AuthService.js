import {
  getAuth,
  sendPasswordResetEmail as sendResetEmail,
} from "firebase/auth";
import { database } from "../../store/index.js";

export async function sendPasswordResetEmail(email) {
  const auth = getAuth();
  try {
    await sendResetEmail(auth, email);
    console.log("Отправка письма с ссылкой для сброса пароля");
  } catch (error) {
    console.error("Ошибка отправки ссылки для сброса пароля:", error);
    throw error;
  }
}

export async function getAllUsers() {
  try {
    const snapshot = await database.ref("users").once("value");
    return snapshot.val();
  } catch (error) {
    console.error("Ошибка получения пользователей:", error);
    throw error;
  }
}

export async function addUserAuth(userData) {
  try {
    const ref = database.ref("auth").push();
    const newKey = ref.key;
    const dataWithKey = { ...userData, key: newKey };
    await ref.set(dataWithKey);
    return newKey;
  } catch (error) {
    console.error("Ошибка добавления пользователя:", error);
    throw error;
  }
}

export async function signInUser(email, password) {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Ошибка авторизации:", error);
    throw error;
  }
}

export async function signOutUser() {
  const auth = getAuth();
  try {
    await signOut(auth);
    console.log("Пользователь разлогинился");
  } catch (error) {
    console.error("Ошибка при попытке разлогиниться:", error);
    throw error;
  }
}

export async function checkEmailExists(email) {
  try {
    const snapshot = await database
      .ref("auth")
      .orderByChild("email")
      .equalTo(email)
      .once("value");
    return snapshot.exists();
  } catch (error) {
    console.error(error);
    throw new Error("Ошибка проверки email");
  }
}
