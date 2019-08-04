import React from "react";

const StreamInfo = ({ gameID, userName, startedAt, streamTitle, streamThumbnailURL, tags, viewerCount }) => {
	const streamURL = `https://twitch.tv/${userName}`;
	let thumbnailImage = <div>Thumbnail loading...</div>;
	if (streamThumbnailURL) {
		thumbnailImage = <img alt={`A thumbnail preview of ${userName}'s stream.`} src={streamThumbnailURL} />;
	}
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<a href={streamURL}>{thumbnailImage}</a>
			{/* TODO: add '...' to a long title instead of just cutting it off */}
			<div style={{ maxWidth: 394, overflow: "hidden" }}>
				<a href={streamURL}>{streamTitle}</a>
			</div>
			<div>
				<a href={streamURL + "/videos"}>{userName}</a>
			</div>
		</div>
	);
};

export default StreamInfo;
