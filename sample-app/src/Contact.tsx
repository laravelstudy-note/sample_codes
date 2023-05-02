import {
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	InputLabel,
	TextField,
	MenuItem,
	FormControl,
	Select,
	Stack,
	Box,
} from "@mui/material";
import Layout from "./layout/Layout";
import { useNavigate } from "react-router";

export default function Contact() {

	const navigate = useNavigate()
	
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		
		//TextField
		console.log("name",data.get("name"));

		//複数行テキスト
		console.log("message",data.get("message"));

		//※ チェックボックスだけgetAll()になることを注意
		console.log("check_items",data.getAll("check_items"));

		//select
		console.log("select_age",data.get("select_age"));

		navigate("/contact/review", {
			state: {
				name: data.get("name"),
				message: data.get("message"),
				check_items: data.getAll("check_items"),
				select_age: data.get("select_age"),
			}
		})
	}

	return (
		<Layout>
			<Box component="form" noValidate onSubmit={handleSubmit} sx={{ p : 3 }}>
				<h2>コンタクトフォーム</h2>

				<Stack spacing={2}>
					<h3>テキストフィールド</h3>

					<TextField
						name="name"
						type="text"
						label="ラベル"
						variant="outlined"
					/>

					<TextField
						name="message"
						label="複数行テキスト"
						multiline
						rows={4}
					/>

					<h3>チェックボックス</h3>

					<FormGroup>
						<FormControlLabel
							control={<Checkbox name="check_items" value={1} defaultChecked />}
							label="項目１"
						/>
						<FormControlLabel control={<Checkbox name="check_items" value={2} />} label="項目２" />
						<FormControlLabel control={<Checkbox name="check_items" value={3} />} label="項目３" />
					</FormGroup>

					<h3>セレクトボックス</h3>

					<FormControl>
						<InputLabel id="demo-simple-select-label">年齢</InputLabel>
						<Select
							label="年齢"
							name="select_age"
							defaultValue={10}
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>

					<Button variant="contained" type="submit">save</Button>
				</Stack>
			</Box>
		</Layout>
	);
}
