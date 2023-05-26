import { Box, Button, Stack } from "@mui/material";
import { auth } from "../firebase";

export default function CheckAPI(){

	const checkApi = async() => {
		//アクセストークンの取得
		const token = await auth.currentUser?.getIdToken()
		
		const url = "http://localhost:8000/api/check-token";
		const data = {}
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': "Bearer " + token,	//IDトークンを渡す
		};
		const response = await fetch(url, {
			method : "POST",
			headers: headers,
			body: JSON.stringify(data)
		})
		const json = await response.json();
		alert(JSON.stringify(json));

	}

	const checkApiNoToken = async () => {

		const url = "http://localhost:8000/api/check-token";
		const data = {}
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		};
		const response = await fetch(url, {
			method : "POST",
			headers: headers,
			body: JSON.stringify(data)
		})
		const json = await response.json();
		alert(JSON.stringify(json));
		
	}

	const checkApiInvalidToken = async () => {

		const token = "-----dummy---token------";
		
		const url = "http://localhost:8000/api/check-token";
		const data = {}
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': "Bearer " + token,	//IDトークンを渡す
		};
		const response = await fetch(url, {
			method : "POST",
			headers: headers,
			body: JSON.stringify(data)
		})
		const json = await response.json();
		alert(JSON.stringify(json));

	}

	return (
		<>	
			<Stack spacing={2} width="50%" mx="auto" my={5}>
				<Button variant="contained" onClick={checkApi}>APIテスト(firebase tokenあり)</Button>
				<Button variant="contained" onClick={checkApiNoToken}>APIテスト(firebase tokenなし)</Button>
				<Button variant="contained" onClick={checkApiInvalidToken}>APIテスト(出鱈目なトークン)</Button>
			</Stack>
		</>
	)
}