import { twitchAPI } from "./auth";

const TwitchClientID = "uq5u5u107gn88handsd0ai75kygkks";

export const baseApiLink = "https://api.twitch.tv/helix/";
export const baseApiHeaders = new Headers({ "Client-ID": TwitchClientID });

export async function getTopCategories() {
	// TODO: check for errors/bad response codes
	const response = await twitchAPI.get("games/top");
	return response.data.data;
}

export function getCategoryID(categoryName) {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await twitchAPI.get(`games`, { params: { name: categoryName } });
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
	return new Promise((resolve, reject) => {
		twitchAPI
			.get("games?id=" + categoryID)
			.then((res) => {
				const { data } = res;
				if (data.data.length > 0) {
					return resolve(data.data[0]);
				} else {
					return resolve(false);
				}
			})
			.catch((err) => {
				return reject(err);
			});
	});
}

export function getTopStreams() {
	return new Promise((resolve, reject) => {
		fetch(baseApiLink + "streams", { headers: baseApiHeaders })
			.then((res) => {
				res.json().then((data) => {
					return resolve(data.data);
				});
			})
			.catch((err) => {
				return reject(err);
			});
	});
}

export function getStreamsByCategoryID(categoryID) {
	return new Promise((resolve, reject) => {
		fetch(baseApiLink + "streams?game_id=" + categoryID, { headers: baseApiHeaders })
			.then((res) => {
				res.json().then((data) => {
					if (data.data.length > 0) {
						return resolve(data.data);
					} else {
						console.error("returning false", data);
						return resolve(false);
					}
				});
			})
			.catch((err) => {
				return reject(err);
			});
	});
}

export function getStreamsByUsernames(usernames) {
	return new Promise((resolve, reject) => {
		const formattedUsernames = usernames.map((username) => "user_login=" + username).join("&");
		twitchAPI
			.get("streams?" + formattedUsernames)
			.then((res) => {
				return resolve(res.data);
			})
			.catch((err) => {
				return reject(err);
			});
	});
}

// TODO: these should be optional params
export async function getStreamsByCategoryIDAndUsernames(categoryID, usernames = "") {
	const urlParams = {
		game_id: categoryID
	};
	if (usernames) {
		urlParams.user_login = usernames;
	}
	const response = await twitchAPI.get("streams", { params: urlParams });
	return response.data.data;
}
