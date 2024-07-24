import {database} from "../../store/index.js";
import { getAuth, signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword} from "firebase/auth";


export async function addUserAuth(userData,id,navigate) {
  try {
      const ref = database.ref('users').push();
      const newKey = ref.key;
      const dataWithKey = { ...userData, key: newKey, userId: id };
      await ref.set(dataWithKey);
  } catch (error) {
      console.error("Error adding user:", error);
      throw error;
  }
}

export async function signInUser(email, password,navigate) {
    const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
          .then(user => {navigate('/events')})
          .catch(error => console.log(error))
}

export  async function createUser(data,navigate,valid) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((user)=>{
            addUserAuth(data,user.user.uid,)
            return user
        })
        .then((user)=>{
            navigate('/events')
        })
        .catch((error)=>{
            console.log(error)
            valid.setModalMessage("Ошибка регистрации: " + error.message);
        })

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



