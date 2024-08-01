import { database } from "../../store/index.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export async function addUserAuth(userData, id) {
  try {
    const ref = database.ref("users").push();
    const newKey = ref.key;
    const dataWithKey = { ...userData, key: newKey, userId: id };
    await ref.set(dataWithKey);
  } catch (error) {
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
    const user = userCredential.user;
    return { success: true, user };
  } catch (error) {
    let errorMessage = "Проверьте корректность данных.";
    if (error.code === "auth/invalid-email") {
      errorMessage = "Неверный формат email.";
    } else if (error.code === "auth/user-not-found") {
      errorMessage = "Пользователь не найден.";
    } else if (error.code === "auth/wrong-password") {
      errorMessage = "Неверный пароль.";
    }
    return { success: false, message: errorMessage };
  }
}

export async function createUser(data, navigate, valid) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((user) => {
      addUserAuth(data, user.user.uid);
      return user;
    })
    .then(() => {
      navigate("/events");
    })
    .catch((error) => {
      valid.setModalMessage("Ошибка регистрации: " + error.message);
    });
}

export async function signOutUser() {
  const auth = getAuth();
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
}
