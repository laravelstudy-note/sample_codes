import { useNavigate } from "react-router-dom"

export default function Page2(){

	const navigator = useNavigate()

	return (
		<>
		<h1>Page2</h1>
		<a href={`/page1`}>Page1</a>
		<button onClick={() => navigator('/page1')}>Page1</button>
		</>
	)
}
