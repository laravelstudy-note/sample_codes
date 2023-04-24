import "bootstrap/dist/css/bootstrap.min.css";
import SampleCard from "./SampleCard";
import SampleCSSModule from "./SampleCSSModule";
import SampleBox from "./SampleBox";

function App() {
	return (
		<div className="container">
			{/* <SampleCard
				title="カード01"
				handler={() => alert("1枚目のカードが選ばれた")}
			>
				<h2>カードbody1</h2>
				<p>テキストを追加</p>
			</SampleCard>

			<SampleCard
				title="カード01"
				handler={() => alert("2枚目のカードが選ばれた")}
			>
				<h2>カードbody2</h2>
				<p>テキストを追加</p>
			</SampleCard> */}

			{/* <SampleCSSModule /> */}

			<SampleBox />
		</div>
	);
}

export default App;
