import {setUsers} from '../slice/UsersSlice.js'

const middlewareListenersUsers = (database) => {
    return (store) => (next) => (action) => {
        if (action.type === 'SUBSCRIBE_TO_USERS') {
            database.ref('users').on('value', (snapshot) => {
                const data = snapshot.val();
                store.dispatch(setUsers(data));
            });
        }
        return next(action);
    }
}
export default middlewareListenersUsers;
