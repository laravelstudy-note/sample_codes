import { readFromLocalStorage, writeToLocalStorage } from "./local-storage";

export default function initMemo() {
	const btnSave = document.getElementById("save-btn");
	const textarea = document.getElementById("textarea");

	//イベントの設定
	btnSave.addEventListener("click", () => {
		writeToLocalStorage(textarea.value);
	});

	//初期値
	textarea.value = readFromLocalStorage();
}
