import { ReactNode, createContext, useContext, useState } from "react";
import { useAuth } from "../firebase";

//認証のState
type AuthState = {
	loggdIn: Boolean;
	username: string|null;
	userid: string|null;
}

export const AuthContext = createContext<AuthState>({
	loggdIn: false,
	username: null,
	userid: null
});

export const useAuthContext = () => {
	return useContext(AuthContext);
}
