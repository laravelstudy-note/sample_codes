export default function SampleArray(){

	return <>
		<SampleArray01 />
		<SampleArray02 />
		<SampleArray03 />
	</>
	
}

function SampleArray01(){

	const arr = ["a", "b", "c"]

	return (
		<>
			<h2>map()関数を使ってJSXに変換する</h2>

			{
				arr.map((item, index) => {
					return <p>{index}: {item}</p>
				})
			}

		</>
	)
}

function SampleArray02(){

	const arr = ["あいうえお", "かきくけこ", "さしすせそ"]

	let arryConvered : JSX.Element[] = []

	for(const item of arr){
		arryConvered.push(<p>{item}</p>)
	}

	return (
		<>
			<h2>forを使ってJSXを入れた配列にする</h2>

			{
				arr.map((item, index) => {
					return <p>{index}: {item}</p>
				})
			}

		</>
	)
}

function SampleArray03(){

	const arr = ["あいうえお", "かきくけこ", "さしすせそ"]

	const renerArrayItem = (item:string, index:number) => {
		return <p>{index}: {item}</p>
	}

	return (
		<>
			<h2>map()関数とJSXに変換する関数を組み合わせる</h2>

			{
				arr.map((item, index) => {
					return renerArrayItem(item, index)
				})
			}

		</>
	)
}

type SampleArrayType = {
	key: string,
	value: string
}

function SampleArray04(){

	const arr : SampleArrayType[] = [
		{ key: "a", value: "あいうえお"},
		{ key: "b", value: "かきくにこ"},
		{ key: "c", value: "さしすせば"}
	]

	const renerArrayItem = (item:SampleArrayType) => {
		return <p>{item.key}: {item.value}</p>
	}

	return (
		<>
			<h2>map()関数とJSXに変換する関数を組み合わせる</h2>

			{
				arr.map((item) => {
					return renerArrayItem(item)
				})
			}

		</>
	)
}