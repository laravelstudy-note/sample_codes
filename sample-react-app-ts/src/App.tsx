import SampleButton from './SampleButton';
import SampleVar from './SampleVar';

function App() {
  return (
    <div className="App">
      <SampleButton text="ボタンが押された" handler={ () => alert("ボタンが押された")} />

		{/* <SampleVar /> */}
    </div>
  );
}

export default App;
