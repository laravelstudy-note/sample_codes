import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";

//yup
import { object, string, ValidationError } from "yup";
import Layout from "./layouts/Layout";

//フォームが管理するState
type State = {
	title: string;
	name: string;
	email: string;
	message: string;
};

//エラーのState
type ErrorState = {
	title: string | null;
	name: string | null;
	email: string | null;
	message: string | null;
};

//バリデーション
let schema = object({
	title: string().required("タイトルは必須です"),
	name: string().required("名前は必須です"),
	email: string()
		.email("正しいメールアドレスを入力してください")
		.required("メールアドレスは必須です"),
	message: string().required("本文を入力してください"),
});

export default function ContactWithValidate() {
	const [state, setState] = useState<State>({} as any);
	const [errors, setErrors] = useState<ErrorState>({} as any);

	const validate = (target: string) => {
		const key = target as keyof ErrorState;

		try {
			schema.validateSyncAt(key, state);
			errors[key] = null;
		} catch (err) {
			if (err instanceof ValidationError) {
				errors[key] = err.message;
			}
		}

		//Stateを更新する
		setErrors({ ...errors });
		setState({ ...state });
	};

	const onClickBtnSave = async () => {
		try {
			const result = await schema.validate(state);
			alert(JSON.stringify(state, null, 2));
		} catch (err) {
			alert("入力内容を確認してください");
		}
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
						validate("title");
					}}
					required
					error={errors.title != null}
					helperText={errors.title || ""}
				/>

				<TextField
					label="名前"
					value={state.name}
					onChange={(e) => {
						state.name = e.target.value;
						validate("name");
					}}
					required
					error={errors.name != null}
					helperText={errors.name || ""}
				/>

				<TextField
					label="メールアドレス"
					type="email"
					value={state.email}
					onChange={(e) => {
						state.email = e.target.value;
						validate("email");
					}}
					required
					error={errors.email != null}
					helperText={errors.email || ""}
				/>

				<TextField
					label="本文"
					multiline={true}
					value={state.message}
					onChange={(e) => {
						state.message = e.target.value;
						validate("message");
					}}
					required
					error={errors.message != null}
					helperText={errors.message || ""}
				/>

				<Button variant="contained" onClick={onClickBtnSave}>
					保存
				</Button>
			</Stack>
		</Layout>
	);
}
