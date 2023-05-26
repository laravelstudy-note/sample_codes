import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

export default function AppRouter(){

	const navigate = useNavigate()
	const location = useLocation();
	const auth = useAuthContext();

	useEffect(() => {

		//認証していない時は/loginに遷移する
		if(false == auth.loggdIn && location.pathname.indexOf("/login") === -1){
			navigate("/login")
		}

	}, [location]);
	
	return (
		<Outlet />
	)
}