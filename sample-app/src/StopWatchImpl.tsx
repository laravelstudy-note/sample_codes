import { useEffect, useState } from "react";

export default function StopWatchImpl(){

	const [now, setNow] = useState(0);
	const [start, setStart] = useState(0);
	const [timerId, setTimerId] = useState(0);

	useEffect(() => {
		return () => clearInterval(timerId);
	}, [])

	const onClickStart = () => {
		setStart((new Date()).getTime());

		const timer = setInterval(() => {
			setNow((new Date()).getTime());
		},100);
		setTimerId(timer as any);
	};

	const onClickStop = () => {
		clearInterval(timerId);
	};
	
	const renderTime = () => {
		if(start < 1)return <> - </>

		const diff = (now - start) / 1000.0;
	
		return <>{diff}</>
	}

	return (
		<>
			<h2>ストップウォッチ</h2>
			<p>{ renderTime() }</p>
			<button onClick={onClickStart}>スタート</button>
			<button onClick={onClickStop}>ストップ</button>
		</>
	);


}