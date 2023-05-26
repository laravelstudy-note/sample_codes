import { useEffect } from "react";
import { Box, Container } from "@mui/material";

import * as firebaseui from 'firebaseui';
import "firebaseui/dist/firebaseui.css";

import { auth, uiConfig } from "../firebase";

const ui = new firebaseui.auth.AuthUI(auth);

export default function Login(){

	useEffect(() => {
		ui.start('#firebaseui-auth-container', uiConfig);
	}, []);
	
	return (
		<Container maxWidth="md">
			<Box p={3}>
				<div id="firebaseui-auth-container"></div>
			</Box>
		</Container>
	);
}