import { useState } from "react";

export default function SampleInput() {
	const [name, setName] = useState("お名前");

	return (
		<>
			<p>お名前: {name}</p>
			<SampleInputForm name={name} setName={setName} />
		</>
	);
}

function SampleInputForm(props: {
	name: string;
	setName: (name: string) => void;
}) {
	const [value, setValue] = useState(props.name);
	return (
		<>
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={() => props.setName(value)}>変更</button>
		</>
	);
}
