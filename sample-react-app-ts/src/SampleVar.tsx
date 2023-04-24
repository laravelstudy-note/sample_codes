export default function SampleVar() {
	const hogeVar = "変数";

	const hogeFunc = () => {
		return "あいうえお";
	};

	const name = "山田";

	const renderFunc = () => {
		const message = "JSXを返却する関数1";
		return <p>{message}</p>;
	};

	const InnerComponent = () => {
		const message = "JSXを返却する関数2";
		return <p>{message}</p>;
	};

	return (
		<section>
			<p>変数: {hogeVar}</p>
			<p>関数: {hogeFunc()}</p>
			<p>JavaScriptと組み合わせる: {"Mr." + name}</p>

			<div>{renderFunc()}</div>
			<InnerComponent />
		</section>
	);
}
