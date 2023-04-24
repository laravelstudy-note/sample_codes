import { useState } from "react"

export default function SampleCounter(){

	const [counter, setCounter] = useState(0);

	return (
		<>
			<SampleCounterIncrement counter={counter} setCounter={setCounter}/>
			<SampleCounterView counter={counter} />
		</>
	)
}

function SampleCounterView(props: {counter:number}){
	return (
		<p>Counter={props.counter}</p>
	)
}

function SampleCounterIncrement(props: {
	setCounter: (num:number) => void,
	counter: number
}){
	return (
		<button onClick={ () => props.setCounter(props.counter+1) }>+</button>
	)
}
