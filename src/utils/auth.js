import axios from "axios";

const twitchClientID = "uq5u5u107gn88handsd0ai75kygkks";

export const twitchAPI = axios.create({
	baseURL: "https://api.twitch.tv/helix/",
	headers: { "Client-ID": twitchClientID }
});

export const validateResponse = (response) => {
	const returnValue = {
		success: true,
		message: ""
	};
	if (response.status > 299) {
		returnValue.success = false;
		returnValue.message = `Found a non-success status code: ${response.status}`;
		return returnValue;
	}
	return returnValue;
};
