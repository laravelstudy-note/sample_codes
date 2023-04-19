import { readFromCookie, writeToCookie } from "./cookie";

export default function initMemo() {
	const btnSave = document.getElementById("save-btn");
	const textarea = document.getElementById("textarea");

	//イベントの設定
	btnSave.addEventListener("click", () => {
		writeToCookie(textarea.value);
	});

	//初期値
	textarea.value = readFromCookie();
}
