import { twitchAPI, validateResponse } from "./auth";

const TwitchClientID = "uq5u5u107gn88handsd0ai75kygkks";

export const baseApiLink = "https://api.twitch.tv/helix/";
export const baseApiHeaders = new Headers({ "Client-ID": TwitchClientID });

export function getCategoryID(categoryName) {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await twitchAPI.get(`games`, { params: { name: categoryName } });
			const { success, message } = validateResponse(res);
			if (!success) {
				return reject(message);
			}
			const data = res.data.data;
			if (data.length > 0) {
				return resolve(data[0].id);
			} else {
				return resolve(false);
			}
		} catch (err) {
			return reject(err);
		}
	});
}

export function getCategoryByID(categoryID) {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await twitchAPI.get("games", { params: { id: categoryID } });
			const { success, message } = validateResponse(res);
			if (!success) {
				return reject(message);
			}
			const data = res.data.data;
			if (data.length > 0) {
				return resolve(data[0]);
			} else {
				return resolve(false);
			}
		} catch (err) {
			return reject(err);
		}
	});
}

export function getTopStreams() {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await twitchAPI.get("streams");
			const { success, message } = validateResponse(res);
			if (!success) {
				return reject(message);
			}
			const data = res.data.data;
			if (data.length > 0) {
				return resolve(data);
			}
			return resolve(false);
		} catch (err) {
			return reject(err);
		}
	});
}

export function getStreamsByCategoryID(categoryID) {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await twitchAPI.get("streams", { params: { game_id: categoryID } });
			const { success, message } = validateResponse(res);
			if (!success) {
				return reject(message);
			}
			return resolve(res.data.data);
		} catch (err) {
			return reject(err);
		}
	});
}

export function getStreamsByUsernames(usernames) {
	return new Promise(async (resolve, reject) => {
		try {
			const formattedUsernames = usernames.map((username) => "user_login=" + username).join("&");
			const res = await twitchAPI.get(`streams?${formattedUsernames}`);
			const { success, message } = validateResponse(res);
			if (!success) {
				return reject(message);
			}
			return resolve(res.data.data);
		} catch (err) {
			return reject(err);
		}
	});
}
