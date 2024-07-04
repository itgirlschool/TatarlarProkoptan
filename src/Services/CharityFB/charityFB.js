import { dbFB } from '../../main.jsx'

export async function getCharityAllUsers() {
    try {
        const snapshot = await dbFB.ref('charity').once('value');
        return snapshot.val();
    } catch (error) {
        console.error(error);
    }
}


export async function addUserCharity(userData) {
    try {
        const ref = dbFB.ref('charity').push();
        const newKey = ref.key;
        const dataWithKey = { ...userData, key: newKey };
        await ref.set(dataWithKey);
        return newKey;
    } catch (error) {
        console.error(error);
    }
}

