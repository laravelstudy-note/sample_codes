import { useEffect, useState } from "react";
import Layout from "./layouts/Layout";
import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type PersonalInformation = {
	index: number;
	name: string;
	reading: string;
	gender: string;
	telephone: string;
	birthday: string;
};

type State = {
	items: PersonalInformation[];
};

function App() {

	const navigate = useNavigate()

	const [state, setState] = useState<State>({
		items: [],
	});

	const loadJson = async () => {
		const result = await fetch("/json/personal_information.json");

		const json = await result.json();

		const personal_infomations = json["personal-infomations"] as any;
		const items = personal_infomations["personal-infomation"] as any[];

		setState({
			...state,
			items: items.map((item) => {
				return {
					index: item["連番"] as number,
					name: item["氏名"] as string,
					reading: item["氏名_カタカナ"] as string,
					gender: item["性別"] as string,
					telephone: item["電話番号"] as string,
					birthday: item["生年月日"] as string,
				};
			}),
		});
	};

	useEffect(() => {
		loadJson();
	}, []);

	return (
		<Layout>
			<h1>App</h1>

			<Table>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>名前</TableCell>
						<TableCell>フリガナ</TableCell>
						<TableCell>性別</TableCell>
						<TableCell>電話番号</TableCell>
						<TableCell>生年月日</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{state.items.map((item) => (
						<TableRow key={item.index}>
							<TableCell>{item.index}</TableCell>
							<TableCell>{item.name}</TableCell>
							<TableCell>{item.reading}</TableCell>
							<TableCell>{item.gender}</TableCell>
							<TableCell>{item.telephone}</TableCell>
							<TableCell>{item.birthday}</TableCell>
							<TableCell>
								<Button onClick={ () => navigate('/detail/' + item.index)}>詳細</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Layout>
	);
}

export default App;
