import { useState } from "react";

export default function Calculator() {

	const [leftNumber, setLeftNumber] = useState("");
	const [rightNumber, setRightNumber] = useState("");
	const [answer, setAnswer] = useState("");
	const [operation, setOperation] = useState("");


	const onNumberKeyPress = (num: number) => {
		console.log("num", num);
	};

	const onOperationKeyPress = (op: string) => {
		console.log("op", op);
	};

	return (
		<div className="calculator" style={{ width: "300px" }}>
			<div className="display">{/* ここに数字が表示される */}</div>
			<div className="numbers">
				<button onClick={() => onNumberKeyPress(1)}>1</button>
				<button onClick={() => onNumberKeyPress(2)}>2</button>
				<button onClick={() => onNumberKeyPress(3)}>3</button>
				<button onClick={() => onNumberKeyPress(4)}>4</button>
				<button onClick={() => onNumberKeyPress(5)}>5</button>
				<button onClick={() => onNumberKeyPress(6)}>6</button>
				<button onClick={() => onNumberKeyPress(7)}>7</button>
				<button onClick={() => onNumberKeyPress(8)}>8</button>
				<button onClick={() => onNumberKeyPress(9)}>9</button>
				<button onClick={() => onNumberKeyPress(0)}>0</button>
				<button onClick={() => onOperationKeyPress("clear")}>C</button>
				<button onClick={() => onOperationKeyPress("=")}>=</button>
			</div>
			<div className="operation">
				<button onClick={() => onOperationKeyPress("/")}>/</button>
				<button onClick={() => onOperationKeyPress("*")}>*</button>
				<button onClick={() => onOperationKeyPress("-")}>-</button>
				<button onClick={() => onOperationKeyPress("+")}>+</button>
			</div>
		</div>
	);
}
