import Cookies from "js-cookie";

export function writeToCookie(value) {
	Cookies.set("memo-app-content", value);
}

export function readFromCookie() {
	return Cookies.get("memo-app-content");
}
