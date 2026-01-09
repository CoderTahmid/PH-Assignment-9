import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../firebase/firebase.config";
import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const googleProvider = new GoogleAuthProvider();

	const createNewUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = (updatedData) => {
		return updateProfile(auth.currentUser, updatedData);
	};

	const userSignIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const userLogout = () => {
		setLoading(true);
		return signOut(auth);
	};

	const resetPassword = (email) => {
		setLoading(true);
		return sendPasswordResetEmail(auth, email);
	};

	const authenticateUserWithGooogle = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	}

	const authInfo = {
		createNewUser,
		user,
		setUser,
		updateUserProfile,
		userSignIn,
		userLogout,
		loading,
		setLoading,
		resetPassword,
		authenticateUserWithGooogle
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
