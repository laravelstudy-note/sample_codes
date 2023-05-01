import { useNavigate } from "react-router-dom"

export default function Page1(){
	const navigator = useNavigate()

	return (
		<>
		<h1>Page1</h1>

		<a href={`/page2`}>Page2</a>
		<button onClick={() => navigator('/page2')}>Page2</button>
		</>
	)
}