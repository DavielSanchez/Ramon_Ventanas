import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

export const Auth = () => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // window.location.replace("/");
        } else {
            window.location.replace("/login");
        }
    });
}