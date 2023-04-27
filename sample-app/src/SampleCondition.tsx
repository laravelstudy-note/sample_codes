import { useState } from "react"

export default function SampleCondition(){
	const [toggle, setToggle] = useState(false);

	const renderToggle = () => {
		if(toggle){
			return <p>condition is true</p>
		}

		return <p>condition is false</p>
	}

	return (
		<div>
			<button onClick={ () => setToggle(!toggle) } className="btn btn-primary">Toggle</button>
			<h3>三項演算子</h3>
			<p>{ (toggle) ? "condition is true" : "condition is false" }</p>

			<h3>関数を使う</h3>
			{ renderToggle() }
		</div>
	);
}