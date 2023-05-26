import { useEffect } from "react";
import { Box, Container } from "@mui/material";
import { useAuth } from "../firebase";


export default function LoginCheck(){

	const auth = useAuth();

	if(auth.loggdIn){

		return (
			<Container maxWidth="md">
				<Box p={3}>
					<p>ログインユーザー名={ auth.username }</p>
					<p>ログインユーザーID={ auth.userid }</p>
				</Box>
			</Container>
		);

	}

	return (
		<Container maxWidth="md">
			<Box p={3}>
				<p>ログインしていません</p>
			</Box>
		</Container>
	);
}