export function writeToSessionStorage(value) {
	sessionStorage.setItem("memo-app-content", value);
}

export function readFromSessionStorage() {
	return sessionStorage.getItem("memo-app-content");
}
