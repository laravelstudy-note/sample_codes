import { useState } from "react"

export default function SampleStateObject(){

	const [stateObjet, setStateObject] = useState({
		name: "",
		counter1: 0,
		counter2: 0,
		counter3: 0,
	});

	const handler = (index:number) => {
		
		if(index == 1){
			setStateObject({ 
				...stateObjet,
				name: "counter1を更新",
				counter1: stateObjet.counter1 + 1
			});
		}

		if(index == 2){
			setStateObject({ 
				...stateObjet,
				name: "counter2を更新",
				counter2: stateObjet.counter2 + 1
			});
		}

		if(index == 3){
			setStateObject({ 
				...stateObjet,
				name: "counter3を更新",
				counter3: stateObjet.counter3 + 1
			});
		}
	}
	
	return (
		<>
			<p>{ stateObjet.name }</p>
			<p>counter1={ stateObjet.counter1 }</p>
			<p>counter2={ stateObjet.counter2 }</p>
			<p>counter3={ stateObjet.counter3 }</p>

			<button onClick={() => handler(1) }>counter1 increment</button>
			<button onClick={() => handler(2) }>counter2 increment</button>
			<button onClick={() => handler(3) }>counter3 increment</button>
		</>
	)
}