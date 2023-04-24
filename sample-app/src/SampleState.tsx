import { useState } from "react";

export default function SampleState(){

	//let text = "ボタンを押してください"
	const [text, setText] = useState("ボタンを押してください");

	const onClickHandler = () => {
		//text = "ボタンがおされました";
		setText("ボタンがおされました");
		console.log(text);
	};

	return (
		<>
			<h1>Stateのサンプル</h1>
			<button onClick={onClickHandler}>{ text }</button>
		</>
	)
}