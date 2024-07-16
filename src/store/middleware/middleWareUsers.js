import {
  setUsers,
  authSuccess,
  authFailure,
  userNotFound,
} from "../slice/UsersSlice.js";
import {
  signInUser,
  checkEmailExists,
} from "../../Services/UsersFB/AuthService.js";

const middlewareListenersUsers = (database) => {
  return (store) => (next) => async (action) => {
    if (action.type === "SUBSCRIBE_TO_USERS") {
      database.ref("users").on("value", (snapshot) => {
        const data = snapshot.val();
        store.dispatch(setUsers(data));
      });
    }

    if (action.type === "CHECK_AND_AUTHENTICATE_USER") {
      const { email, password } = action.payload;
      try {
        const emailExists = await checkEmailExists(email);
        if (emailExists) {
          const user = await signInUser(email, password);
          store.dispatch(authSuccess(user));
        } else {
          store.dispatch(userNotFound("User not found"));
        }
      } catch (error) {
        store.dispatch(authFailure(error.message));
      }
    }

    return next(action);
  };
};

export default middlewareListenersUsers;
