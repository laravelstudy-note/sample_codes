import { Box, Button, Container } from "@mui/material";
import { useAuth } from "./firebase";

function Home() {

	const auth = useAuth();
	
	return (
		<Container maxWidth="md">
			<p>App</p>

			{
				(auth.loggdIn) ? <p>ログインしています({auth.username})</p> : <p>ログインしていません</p>
			}
		</Container>
	);
}

export default Home;
