import { initializeApp } from "firebase/app";
import { getAuth, EmailAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_SENDER_ID,
};

initializeApp(firebaseConfig);

//firebase ui
export const auth = getAuth();

//firebaseuiの設定
export const uiConfig = {
	// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
	signInSuccessUrl: "/",
	// We will display Google and Facebook as auth providers.
	signInOptions: [EmailAuthProvider.PROVIDER_ID],
};

//ログインしているかの判定
const isLoggedIn = () : Boolean => {
	return auth.currentUser != null;
}

//ログインしているユーザー名
const getUserName = () : string | null => {
	if(auth.currentUser){
		return auth.currentUser.displayName;
	}
	return null;
}

//ログインしているユーザーID
const getUserId = () : string | null => {
	if(auth.currentUser){
		return auth.currentUser.uid;
	}
	return null;
}

type UserType = {
	loading: Boolean;
	loggdIn: Boolean;
	username: string|null;
	userid: string|null;
}

export const useAuth = () : UserType => {
	
	const [user, setUser] = useState<UserType>({
		loading: true,
		loggdIn: false,
		username: null,
		userid: null
	});

	useEffect(() => {
		auth.onAuthStateChanged(function(user) {
			if (user) {
				setUser({
					loading: false,
					loggdIn: isLoggedIn(),
					username: getUserName(),
					userid: getUserId()
				});
			}else{
				setUser({
					loading: false,
					loggdIn: false,
					username: null,
					userid: null
				});
			}
		});
		
	},[])

	return user;
};