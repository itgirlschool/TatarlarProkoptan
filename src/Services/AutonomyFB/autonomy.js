import {database} from "../../store/index.js";

export async function addUserAutonomy(userData) {
    try {
        const ref = database.ref('autonomy').push();
        const newKey = ref.key;
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const newDate = ` ${day} ${month} ${year}`
        const dataWithKey = {...userData, date : newDate, key: newKey};
        await ref.set(dataWithKey);
        return newKey;
    } catch (error) {
        console.error(error);
    }
}
