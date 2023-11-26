import axiosInstance from "./axios";

export const login = ({ id, pw }) =>
	axiosInstance.post("/user/login", {
		id,
		pw,
	});
