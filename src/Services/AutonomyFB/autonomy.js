import {database} from "../../store/index.js";

export async function addUserAutonomy(userData) {
    try {
        const ref = database.ref('autonomy').push();
        const newKey = ref.key;
        const dataWithKey = {...userData, key: newKey};
        await ref.set(dataWithKey);
        return newKey;
    } catch (error) {
        console.error(error);
    }
}
