import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
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

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userLogout = () => {
        return signOut(auth);
    }

	const authInfo = {
		createNewUser,
		user,
		setUser,
		updateUserProfile,
		userSignIn,
        userLogout
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
