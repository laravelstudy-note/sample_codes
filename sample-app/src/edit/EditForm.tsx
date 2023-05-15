import { useEffect, useState } from "react";
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
import NameReadingInput from "./NameReadingInput";
import BirthdayInput from "./BirthdayInput";

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
};

export default function EditForm(props: { item: PersonalInformation }) {
	const [state, setState] = useState<State>({
		item: props.item,
	});

	const onClickBtnSave = () => {
		alert(JSON.stringify(state.item, null, 2));
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
						setState({ ...state, item: state.item });
					}}
					required
					error={state.item.name.length < 1}
					helperText={ (state.item.name.length < 1) ? "名前を入力してください" : ""}
				/>

				<NameReadingInput
					value={state.item.reading}
					onChange={(e) => {
						state.item.reading = e.target.value;
						setState({ ...state, item: state.item });
					}}
					validate={(value:string) => {
						try {
							schema.validateSyncAt("reading", { reading: value })
							return null
						} catch (error) {
							return (error as ValidationError).message
						}
					}}
				/>

				<FormControl fullWidth>
					<InputLabel>性別</InputLabel>
					<Select
						value={state.item.gender}
						label="性別"
						onChange={(e) => {
							state.item.gender = e.target.value;
							setState({ ...state, item: state.item });
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
						setState({ ...state, item: state.item });
					}}
				/>

				<BirthdayInput
					value={state.item.birthday}
					onChange={(value) => {
						state.item.birthday = value;
						setState({ ...state, item: state.item });
					}}
					validate={(value:string) => {
						try {
							schema.validateSyncAt("birthday", { birthday: value})
							return null
						} catch (error) {
							return (error as ValidationError).message
						}
					}}
				/>

				<Button variant="contained" onClick={onClickBtnSave}>
					保存
				</Button>
			</Stack>
		</>
	);
}
