import { useEffect, useState } from "react";

export default function StopWatch(){

	const [now, setNow] = useState(0);
	const [start, setStart] = useState(0);
	const [timerId, setTimerId] = useState(0);

	useEffect(() => {
		return () => clearInterval(timerId);
	}, [])

	const onClickStart = () => {
		const timer = setInterval(() => {
			setNow((new Date()).getTime());
		},100);
		setTimerId(timer as any);
	};

	const onClickStop = () => {
		clearInterval(timerId);
	};
	
	return (
		<>
			<h2>ストップウォッチ</h2>
			{ now }
			<button onClick={onClickStart}>スタート</button>
			<button onClick={onClickStop}>ストップ</button>
		</>
	);


}