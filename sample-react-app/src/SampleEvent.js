export default function SampleEvent() {
	const onClickHandler = () => {
		alert("ボタンが押されました");
	};

	const buttonEventHander = (button) => {
		if (button == 0) {
			alert("❌ボタンが押されました");
		}
		if (button == 1) {
			alert("⭕ボタンが押されました");
		}
	};

	return (
		<section>
			<button onClick={onClickHandler}>ボタン</button>

			<div>
				<button onClick={() => buttonEventHander(0)}>❌</button>
				<button onClick={() => buttonEventHander(1)}>⭕</button>
			</div>
		</section>
	);
}
