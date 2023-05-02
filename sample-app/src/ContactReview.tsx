import {
	Button,
	Box,
} from "@mui/material";
import Layout from "./layout/Layout";
import { useLocation } from "react-router";

export default function ContactReview() {

	const location = useLocation();
	const { name, message, check_items, select_age} = location.state;
	
	return (
		<Layout>
			<Box sx={{ p : 3 }}>
				<h2>入力内容を確認してください</h2>

				<p>名前: {name}</p>
				<p>メッセージ: {message}</p>
				<p>チェック: {check_items.join(",")}</p>
				<p>年齢: {select_age}</p>
				
				<Button variant="contained" type="submit">save</Button>
				
			</Box>
		</Layout>
	);
}
