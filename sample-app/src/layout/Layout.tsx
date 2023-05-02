import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Header from './Header';
import SideMenu from './SideMenu';
import Footer from './Footer';

type LayoutProps = {
	children?: React.ReactNode;
}

export default function Layout({ children } : LayoutProps) {
	return (
		<Container maxWidth="md">
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Header />
				</Grid>
				<Grid item xs={12} md={4}>
					<SideMenu />
				</Grid>
				<Grid item xs={12} md={8}>
					<div>{ children }</div>
				</Grid>
				<Grid item xs={12}>
					<Footer />
				</Grid>
			</Grid>
		</Container>
	);
}
