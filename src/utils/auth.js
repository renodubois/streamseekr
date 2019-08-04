import axios from "axios";

const twitchClientID = "uq5u5u107gn88handsd0ai75kygkks";

export const twitchAPI = axios.create({
	baseURL: "https://api.twitch.tv/helix/",
	headers: { 'Client-ID': twitchClientID},
})