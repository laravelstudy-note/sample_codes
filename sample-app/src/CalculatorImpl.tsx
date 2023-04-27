import { useState } from "react";
import style from "./Calculator.module.css";

export default function CalculatorImpl() {

	const [leftNumber, setLeftNumber] = useState("0");
	const [rightNumber, setRightNumber] = useState("0");
	const [answer, setAnswer] = useState("");
	const [operation, setOperation] = useState("");


	const onNumberKeyPress = (num: number) => {

		//現在の値を文字列 -> 数値に変換
		const currentNumber = (operation) ? parseInt(rightNumber) : parseInt(leftNumber)

		//前の値に10倍して現在の値を追加
		const newValue = currentNumber * 10 + num;

		//Stateを更新
		if(operation){
			setRightNumber(String(newValue))
		}else{
			setLeftNumber(String(newValue));
		}

	};

	const onOperationKeyPress = (op: string) => {
		if(op == "="){
			if(operation == "/"){
				setAnswer(
					String(
						parseInt(leftNumber) / parseInt(rightNumber)
					)
				)
			}

			if(operation == "*"){
				setAnswer(
					String(
						parseInt(leftNumber) * parseInt(rightNumber)
					)
				)
			}

			if(operation == "+"){
				setAnswer(
					String(
						parseInt(leftNumber) + parseInt(rightNumber)
					)
				)
			}

			if(operation == "-"){
				setAnswer(
					String(
						parseInt(leftNumber) - parseInt(rightNumber)
					)
				)
			}

			return
		}

		if(op == "clear"){
			//リセット機能
			setLeftNumber("0")
			setRightNumber("0")
			setOperation("")
			setAnswer("")
			return
		}

		//それ以外はleftNumberの値で入力可能かを切り替える
		if(leftNumber != "0"){
			setOperation(op);
			setRightNumber("0");
			return;
		}
		
	};

	const renderDisplay = () =>{
		if(answer){
			return <>{answer}</>
		}

		if(operation){
			return <>{rightNumber}</>
		}

		return <>{leftNumber}</>
	}

	return (
		<div className={style.calculator}>
			<div className={style.display}>
				{renderDisplay()}
			</div>
			<div className={style.numbers}>
				<button onClick={() => onNumberKeyPress(1)}>1</button>
				<button onClick={() => onNumberKeyPress(2)}>2</button>
				<button onClick={() => onNumberKeyPress(3)}>3</button>
				<button onClick={() => onNumberKeyPress(4)}>4</button>
				<button onClick={() => onNumberKeyPress(5)}>5</button>
				<button onClick={() => onNumberKeyPress(6)}>6</button>
				<button onClick={() => onNumberKeyPress(7)}>7</button>
				<button onClick={() => onNumberKeyPress(8)}>8</button>
				<button onClick={() => onNumberKeyPress(9)}>9</button>
				<button onClick={() => onOperationKeyPress("clear")}>C</button>
				<button onClick={() => onNumberKeyPress(0)}>0</button>
				<button onClick={() => onOperationKeyPress("=")}>=</button>
			</div>
			<div className={style.operation}>
				<button onClick={() => onOperationKeyPress("/")}>/</button>
				<button onClick={() => onOperationKeyPress("*")}>*</button>
				<button onClick={() => onOperationKeyPress("-")}>-</button>
				<button onClick={() => onOperationKeyPress("+")}>+</button>
			</div>
		</div>
	);
}
