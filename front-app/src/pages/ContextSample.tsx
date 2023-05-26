import { useState } from "react";
import { SampleContext, useSampleContext } from "../context/SampleContext";


export default function ContextSample(){

	const [counter, setCounter] = useState(0);

	return (
		<SampleContext.Provider value={{ counter, setCounter }}>
			<ChildA />
			<ChildB />
		</SampleContext.Provider>
	)
	
}

function ChildA(){

	const sampleContext = useSampleContext();

	return <>
		<p>A = {sampleContext.counter}</p>
	</>
}

function ChildB(){

	const { counter, setCounter } = useSampleContext();

	return <>
		<p>B = {counter}</p>
		<button onClick={() => setCounter(counter+1) }>+</button>
	</>
}