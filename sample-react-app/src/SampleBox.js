export default function SampleBox() {
	const containerStyle = {
		margin: "0 auto",
		width: "300px",
		height: "300px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "lightgray",
	};

	return <div style={containerStyle}>SampleBox</div>;
}
