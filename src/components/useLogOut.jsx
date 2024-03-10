import { signOut } from "firebase/auth";
import { auth } from "../firebase";
export const useLogOut = () => {
    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign-out successful.");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    return { logout };
};
