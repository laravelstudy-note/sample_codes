import { useParams } from "react-router-dom";
import Layout from "./layouts/Layout";
import { useEffect, useState } from "react";

type PersonalInformation = {
	index: number;
	name: string;
	reading: string;
	gender: string;
	telephone: string;
	birthday: string;
};

type State = {
	item?: PersonalInformation;
};

export default function Detail(){

	const { id } = useParams();

	const [state, setState] = useState<State>({});
	
	const loadJson = async () => {
		const result = await fetch("/json/personal_information.json");

		const json = await result.json();

		const personal_infomations = json["personal-infomations"] as any;
		const items = personal_infomations["personal-infomation"] as any[];

		const item = items.find((item) => item["連番"] == id);
		if(!item){
			alert("データの読み込みに失敗しました")
			return;
		}

		setState({
			...state,
			item: {
				index: item["連番"] as number,
				name: item["氏名"] as string,
				reading: item["氏名_カタカナ"] as string,
				gender: item["性別"] as string,
				telephone: item["電話番号"] as string,
				birthday: item["生年月日"] as string,
			}
		});
	};

	useEffect(() => {
		loadJson();
	}, []);

	return (
		<Layout>
			<h1>詳細画面(#{id})</h1>

			{ state.item && <PersonalInformationTable item={ state.item } />}
		</Layout>
	)
}

function PersonalInformationTable({ item } : { item: PersonalInformation }){
	return (
		<p>aaa</p>
	)
}