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
auth.useDeviceLanguage();

// Set up the authentication state observer
auth.onAuthStateChanged((user) => {
	if (user) {
		console.log("User is signed in:", user);
	} else {
		console.log("No user is signed in.");
	}
});

// Functions for Authentication
export const signInWithGooglePopup = async () => {
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential?.accessToken;
		const user = result.user;

		if (!user) {
			throw new Error("User not found");
		}

		console.log("User signed in:", result.user);
		return { user, token };
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

		const result = await getRedirectResult(auth);
		if (!result) throw new Error("No result from redirect");
		if (!result.user) throw new Error("User not found in redirect result");

		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential?.accessToken;
		const user = result.user;

		console.log("User signed in via redirect:", user);
		return { user, token };
	} catch (error) {
		console.error("Error during sign-in with redirect:", error);
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

export { auth, provider };
