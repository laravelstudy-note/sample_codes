export default function SampleButton(props) {
	return (
		<section>
			<button onClick={props.handler}>{props.text}</button>
		</section>
	);
}
