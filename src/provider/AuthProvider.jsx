import {createUserWithEmailAndPassword, getAuth, updateProfile} from "firebase/auth";
import app from "../firebase/firebase.config";
import {createContext, useState} from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState("");

	const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

	const authInfo = {
        createNewUser,
        user,
        setUser,
        updateUserProfile
    };

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
