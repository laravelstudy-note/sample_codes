export function writeToLocalStorage(value) {
	localStorage.setItem("memo-app-content", value);
}

export function readFromLocalStorage() {
	return localStorage.getItem("memo-app-content");
}
