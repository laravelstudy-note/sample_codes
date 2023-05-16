import Layout from "./layouts/Layout";
import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";

//フォームが管理するState
type State = {
	title: string;
	name: string;
	email: string;
	message: string;
};

export default function Contact() {
	const [state, setState] = useState<State>({} as any);

	const onClickBtnSave = async () => {
		alert(JSON.stringify(state, null, 2));
	};

	return (
		<Layout>
			<h2>お問い合わせ</h2>

			<Stack spacing={2}>
				<TextField
					label="件名"
					value={state.title}
					onChange={(e) => {
						state.title = e.target.value;
						setState({...state})
					}}
					required
				/>

				<TextField
					label="名前"
					value={state.name}
					onChange={(e) => {
						state.name = e.target.value;
						setState({...state})
					}}
					required
				/>

				<TextField
					label="メールアドレス"
					type="email"
					value={state.email}
					onChange={(e) => {
						state.email = e.target.value;
						setState({...state})
					}}
					required
				/>

				<TextField
					label="本文"
					multiline={true}
					value={state.message}
					onChange={(e) => {
						state.message = e.target.value;
						setState({...state})
					}}
					required
				/>

				<Button variant="contained" onClick={onClickBtnSave}>
					保存
				</Button>
			</Stack>
		</Layout>
	);
}
