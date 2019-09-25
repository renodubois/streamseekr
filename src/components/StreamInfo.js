import React from "react";
import { getTimeDifference } from "../utils/date";

const StreamInfo = ({ gameID, userName, startedAt, streamTitle, streamThumbnailURL, tags, viewerCount }) => {
	// some channels have spaces in the name we get from the API for some reason
	const cleanUsername = userName.replace(/\s/g, "");
	const streamURL = `https://twitch.tv/${cleanUsername}`;
	const startedAtDate = new Date(startedAt);
	const currentDate = new Date();
	const uptime = getTimeDifference(startedAtDate, currentDate);
	let thumbnailImage = <div>Thumbnail loading...</div>;
	if (streamThumbnailURL) {
		thumbnailImage = <img alt={`A thumbnail preview of ${userName}'s stream.`} src={streamThumbnailURL} />;
	}
	return (
		<div className="streamContainer" style={{ display: "flex", flexDirection: "column" }}>
			<a className="streamThumbnail" href={streamURL}>
				{thumbnailImage}
				<span className="streamUptime">{uptime}</span>
				<span className="viewerCount">{viewerCount} viewers</span>
			</a>
			<div className="streamTitleWrapper">
				<a className="streamTitle" href={streamURL} title={streamTitle}>
					{streamTitle}
				</a>
			</div>
			<div>
				<a className="streamSubTitle" href={streamURL + "/videos"}>
					{userName}
				</a>
			</div>
		</div>
	);
};

export default StreamInfo;
