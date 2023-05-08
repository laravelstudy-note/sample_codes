import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";

export default function DrawerMenu() {

	const closeDrawer = () => {
		//drawerを閉じる
		//setState({ ...state, drawer_open: false }
	}

	return (
		<Drawer anchor="left" open={true} onClose={ closeDrawer }>
			<List>
				<ListItem>
					<ListItemButton>
						<ListItemText>MenuItem1</ListItemText>
					</ListItemButton>
				</ListItem>

				<ListItem>
					<ListItemButton>
						<ListItemText>MenuItem2</ListItemText>
					</ListItemButton>
				</ListItem>

				<ListItem>
					<ListItemButton>
						<ListItemText>MenuItem3</ListItemText>
					</ListItemButton>
				</ListItem>
			</List>
		</Drawer>
	);
}
