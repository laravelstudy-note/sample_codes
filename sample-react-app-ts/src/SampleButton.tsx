type Props = {
	handler: () => void,
	text: string
}

export default function SampleButton(props : Props) {
	return (
		<section>
			<button onClick={props.handler}>{props.text}</button>
		</section>
	);
}
