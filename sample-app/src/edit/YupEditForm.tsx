import { useState } from "react";
import PersonalInformation from "../PersonalInformation";
import {
	Button,
	FormControl,
	FormGroup,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
} from "@mui/material";

//yup
import { object, string, ValidationError } from "yup";

let schema = object({
	name: string().required("名前は必須です"),
	reading: string()
		.matches(/^[ァ-ヶ]+$/, {
			message: "フリガナは全角カタカナで入力してください",
		})
		.required("フリガナは必須です"),
	telephone: string()
		.matches(/^[0-9\-]+$/, { message: "有効な電話番号を入力してください。" })
		.required("電話番号は必須です"),
	birthday: string().required("生年月日が正しくありません"),
});

type State = {
	item: PersonalInformation;
	errors: {
		name: string | null;
		reading: string | null;
		telephone: string | null;
		birthday: string | null;
	};
};

export default function YupEditForm(props: { item: PersonalInformation }) {
	const [state, setState] = useState<State>({
		item: props.item,
		errors: {
			name: null,
			reading: null,
			telephone: null,
			birthday: null,
		},
	});

	const validate = async () => {

		try {
			//エラーをリセット
			state.errors = {
				name: null,
				reading: null,
				telephone: null,
				birthday: null,
			}
		
			schema.validateSync(state.item, { abortEarly: false });
		} catch (err) {
			if(err instanceof ValidationError){
				err.inner.forEach((e) => {
					const key = e.path as "name"|"reading"|"telephone"|"birthday";
					state.errors[key] = e.message
				})
			}
		}

		/*
		for(const key of ["name","reading","telephone","birthday"] as (keyof typeof state.errors)[]){
			try {
				schema.validateSyncAt(key, state.item)
				state.errors[key] = null
			}catch(err){
				if(err instanceof ValidationError){
					state.errors[key] = err.message
				}
			}
		}
		*/
		
		//nameのバリデーション
		/*
		try {
			schema.validateSyncAt("name", state.item);
			state.errors["name"] = null;
		} catch (err) {
			if (err instanceof ValidationError) {
				state.errors["name"] = err.message;
			}
		}
		*/

		/*
		for(const key of ["name","reading","telephone","birthday"] as (keyof typeof state.errors)[]){
			try {
				schema.validateSyncAt(key, state.item)
				state.errors[key] = null
			}catch(err){
				if(err instanceof ValidationError){
					state.errors[key] = err.message
				}
			}
		}
		*/

		/*
		const keys = Object.keys(state.errors) as (keyof typeof state.errors)[]

		keys.forEach((key) => {
			try {
				schema.validateSyncAt(key, state.item)
				state.errors[key] = null
			}catch(err){
				if(err instanceof ValidationError){
					state.errors[key] = err.message
				}
			}
		})
		*/
	};

	const onClickBtnSave = async () => {
		try {
			//エラーをリセット
			setState({...state, errors: {
				name: null,
				reading: null,
				telephone: null,
				birthday: null,
			}})

			const result = await schema.validate(state.item, { abortEarly: false });
			alert(JSON.stringify(state.item, null, 2));
		} catch (err) {
			if(err instanceof ValidationError){
				err.inner.forEach((e) => {
					const key = e.path as "name"|"reading"|"telephone"|"birthday";
					state.errors[key] = e.message
				})
				setState({...state, errors: {...state.errors}})
			}
		
		}
	};

	return (
		<>
			<h2>編集フォーム</h2>

			<Stack spacing={2}>
				<TextField
					label="名前"
					value={state.item.name}
					onChange={(e) => {
						state.item.name = e.target.value;
						validate();
						setState({ ...state });
					}}
					required
					error={state.errors.name != null}
					helperText={state.errors.name || ""}
				/>

				<TextField
					label="フリガナ"
					value={state.item.reading}
					onChange={(e) => {
						state.item.reading = e.target.value;
						validate();
						setState({ ...state });
					}}
					required
					error={state.errors.reading != null}
					helperText={state.errors.reading || ""}
				/>

				<FormControl fullWidth>
					<InputLabel>性別</InputLabel>
					<Select
						value={state.item.gender}
						label="性別"
						onChange={(e) => {
							state.item.gender = e.target.value;
							validate();
							setState({ ...state });
						}}
					>
						<MenuItem value="男">男性</MenuItem>
						<MenuItem value="女">女性</MenuItem>
						<MenuItem value="その他">その他</MenuItem>
					</Select>
				</FormControl>

				<TextField
					label="電話番号"
					value={state.item.telephone}
					type="tel"
					onChange={(e) => {
						state.item.telephone = e.target.value;
						validate();
						setState({ ...state });
					}}
					error={state.errors.telephone != null}
					helperText={state.errors.telephone || ""}
				/>

				<TextField
					label="生年月日"
					type="date"
					value={state.item.birthday.replaceAll("/", "-")}
					onChange={(e) => {
						console.log(e.target);
						state.item.birthday = e.target.value.replaceAll("-", "/");
						validate();
						setState({ ...state });
					}}
					error={state.errors.birthday != null}
					helperText={state.errors.birthday || ""}
				/>

				<Button variant="contained" onClick={onClickBtnSave}>
					保存
				</Button>
			</Stack>
		</>
	);
}
