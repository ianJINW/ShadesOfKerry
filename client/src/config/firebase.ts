import { initializeApp } from "@firebase/app";
import {
	getAuth,
	getRedirectResult,
	GoogleAuthProvider,
	signInWithRedirect,
	signInWithPopup,
	signOut,
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Configure Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

// Functions for Authentication
export const signInWithGooglePopup = async () => {
	try {
		const result = await signInWithPopup(auth, provider);
		console.log("User signed in:", result.user);
		return result.user;
	} catch (error) {
		console.error("Error during sign-in with popup:", error);
		if (error instanceof Error) {
			alert(`Error during sign-in: ${error.message}`);
		} else {
			alert("An unknown error occurred during sign-in.");
		}
		throw error;
	}
};

export const signInWithGoogleRedirect = async () => {
	try {
		await signInWithRedirect(auth, provider);
	} catch (error) {
		console.error("Error during sign-in with redirect:", error);
		throw error;
	}
};

export const handleRedirectResult = async () => {
	try {
		const result = await getRedirectResult(auth);
		if (result) {
			console.log("User signed in via redirect:", result.user);
			return result.user;
		} else {
			console.log("No user signed in via redirect");
		}
	} catch (error) {
		console.error("Error during redirect result handling:", error);
		throw error;
	}
};

export const logout = async () => {
	try {
		await signOut(auth);
		console.log("User signed out");
	} catch (error) {
		console.error("Error signing out:", error);
		throw error;
	}
};

// Export Auth and Provider
export { auth, provider };
