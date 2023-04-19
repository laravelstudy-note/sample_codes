export default function initMemo() {
	const btnSave = document.getElementById("save-btn");
	const textarea = document.getElementById("textarea");

	//イベントの設定
	btnSave.addEventListener("click", () => {
		alert(textarea.value);
	});
}
