import { Prefecture, PrefectureArray } from './prefecture'

export default function PrefectureSample(){

	PrefectureArray.map((prefecture) => console.log(prefecture))

	return (
		<>
			<h2>都道府県のプルダウン</h2>
		</>
	)
}