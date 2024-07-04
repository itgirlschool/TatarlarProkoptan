import { dbFB } from '../../main.jsx';

export async function getAutonomyAllUsers(email, password) {
    try {
        const snapshot = await dbFB.ref('autonomy').orderByChild('email').equalTo(email).once('value');
        const users = snapshot.val();
        if (!users) {
            throw new Error('Пользователь не найден');
        }


        const user = Object.values(users).find(user => user.password === password);
        if (!user) {
            throw new Error('Неверный пароль');
        }

        return user;
    } catch (error) {
        throw error;
    }
}
