import { AppBar, Container, Drawer, Grid, ListItem, ListItemButton, Toolbar } from "@mui/material";
import { useContext } from "react";
import { AppStateContext } from "../contexts/AppState";
import DrawerMenu from "./DrawerMenu";

type LayoutProps = {
	children?: React.ReactNode;
}

export default function Layout({ children } : LayoutProps){

	const { state } = useContext(AppStateContext);

	return (
		<Container maxWidth="md">
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<AppBar position="static">
						<Toolbar>
							<h1>App</h1>
							
							{ state.loggedIn && <>{state.username}</> }
						</Toolbar>
					</AppBar>
				</Grid>
				<Grid item xs={8}>
					<div>{ children }</div>
				</Grid>
			</Grid>			
		</Container>
	)

}