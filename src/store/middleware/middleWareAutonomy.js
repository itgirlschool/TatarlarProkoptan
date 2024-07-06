import {setUserAutonomy} from "../slice/AutonomySlice.js";

const middlewareListenersAutonomyUsers = (database) => {
    return (store) => (next) => (action) => {
        if (action.type === 'SUBSCRIBE_TO_AUTONOMY_USERS') {
            database.ref('autonomy').on('value', (snapshot) => {
                const data = snapshot.val();
                store.dispatch(setUserAutonomy(data));
            });
        }
        return next(action);
    }
}
export default middlewareListenersAutonomyUsers;
