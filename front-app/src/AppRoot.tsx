import { ReactNode, useEffect } from "react";
import { useAuth } from "./firebase";
import { AuthContext } from "./context/AuthContext";
import { useLocation } from "react-router-dom";

export default function AppRoot({ children } : { children: ReactNode }) {

	const auth = useAuth();
	
	//読み込み中の場合
	if(auth.loading){
		return (
			<>
				<p>Loading</p>
			</>
		)
	}

	//読み込み完了
	return (
		<>
			<AuthContext.Provider value={{ 
				loggdIn: auth.loggdIn,
				username: auth.username,
				userid: auth.userid
	 		}}>
				{children}
			</AuthContext.Provider>
		</>
	)
}