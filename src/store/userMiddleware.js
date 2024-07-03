import { setUserAutonomy } from "./slice/AutonomySlice";
import {getAutonomyAllUsers} from "../Services/AutonomyFB/autonomy";


const userMiddleware = (store) => (next) => async (action) => {
    if (action.type === 'app/start'){
        try {
            const users = await getAutonomyAllUsers();
            store.dispatch(setUserAutonomy({users}));
        } catch (error) {
            console.errpr("Error while fetching users from API", error);
        }
    }
    return next(action);
}

export default userMiddleware;