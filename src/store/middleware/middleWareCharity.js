import {setUserCharity} from '../slice/CharitySlice.js'

const middlewareListenersCharityUsers = (database) => {
    return (store) => (next) => (action) => {
        if (action.type === 'SUBSCRIBE_TO_CHARITY_USERS') {
            database.ref('charity').on('value', (snapshot) => {
                const data = snapshot.val();
                store.dispatch(setUserCharity(data));
            });
        }
        return next(action);
    }
}
export default middlewareListenersCharityUsers;
