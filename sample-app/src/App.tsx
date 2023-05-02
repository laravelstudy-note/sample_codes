import Button from "@mui/material/Button";
import Layout from "./layout/Layout";

function App() {
	return (
		<Layout>
			<Button
				variant="contained"
				onClick={() => {
					alert("clicked");
				}}
			>
				Hello World
			</Button>
		</Layout>
	);
}

export default App;
