import { setUserCharity, setCounter } from "../slice/CharitySlice.js";

const middlewareListenersCharityUsers = (database) => {
  return (store) => (next) => (action) => {
    if (action.type === "SUBSCRIBE_TO_CHARITY_USERS") {
      database.ref("charity").on("value", (snapshot) => {
        const data = snapshot.val();
        store.dispatch(setUserCharity(data));
      });
    }

    if (action.type === "SUBSCRIBE_TO_COUNTER") {
      database.ref("counter").on("value", (snapshot) => {
        const data = snapshot.val();
        store.dispatch(setCounter(data));
      });
    }

    return next(action);
  };
};
export default middlewareListenersCharityUsers;
