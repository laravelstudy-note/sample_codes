import "bootstrap/dist/css/bootstrap.min.css";
import SampleCondition from "./SampleCondition";
import Calculator from "./Calculator";
import CalculatorImpl from "./CalculatorImpl";
import StopWatchImpl from "./StopWatchImpl";
import SampleModalImpl from "./SampleModalImpl";

function App() {
  return (
    <>
		<div className="container">
			<SampleModalImpl />
			<StopWatchImpl />
			<CalculatorImpl />
		</div>
	</>
  );
}

export default App;
