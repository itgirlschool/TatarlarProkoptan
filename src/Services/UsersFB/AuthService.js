import { database } from "../../store/index.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function getAuthAllUsers() {
  try {
    const snapshot = await database.ref("users").once("value");
    return snapshot.val();
  } catch (error) {
    console.error("Error getting users:", error);
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
    console.error("Error adding user:", error);
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
    console.error("Error signing in:", error);
    throw error;
  }
}

export async function signOutUser() {
  const auth = getAuth();
  try {
    await signOut(auth);
    console.log("User signed out successfully.");
  } catch (error) {
    console.error("Error signing out:", error);
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
