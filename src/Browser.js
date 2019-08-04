import React, { useEffect, useState } from "react";
import StreamInfo from "./components/StreamInfo";
import { getStreamsByCategoryID, getStreamsByCategoryIDAndUsernames, getTopStreams } from "./utils/twitch";

const thumbnailHeight = "227";
const thumbnailWidth = "394";

function rehydrateFilters(filters) {
	const parsedFilters = [];
	if (filters) {
		for (const filter of filters) {
			const parsedFilter = JSON.parse(filter);
			parsedFilter.settings = JSON.parse(parsedFilter.settings);
			parsedFilters.push(parsedFilter);
		}
	}

	return parsedFilters;
}

const Browser = ({ categories, filters }) => {
	const [streams, setStreams] = useState([]);
	const parsedFilters = rehydrateFilters(filters);
	useEffect(() => {
		async function getStreams() {
			const streamsData = [];
			if (categories) {
				for (const id of categories) {
					try {
						const streams = await getStreamsByCategoryIDAndUsernames(id);
						const data = await getStreamsByCategoryID(id);
						streamsData.push(...data);
					} catch (err) {
						// TODO: deal with this in a real way
						console.error(err);
					}
				}
			} else {
				try {
					const streams = await getTopStreams();
					streamsData.push(...streams);
				} catch (err) {
					// TODO: handle errors
					console.error(err);
				}
			}

			setStreams(streamsData);
		}
		getStreams();
	}, [categories]);
	let streamList = null;
	if (streams.length > 0) {
		// TODO: have this be handled by the user and their sort setting
		streams.sort((a, b) => b.viewer_count - a.viewer_count);
		streamList = streams.map((stream) => {
			let imageThumbnailURL = stream.thumbnail_url.replace("{width}", thumbnailWidth).replace("{height}", thumbnailHeight);
			return <StreamInfo userName={stream.user_name} streamTitle={stream.title} streamThumbnailURL={imageThumbnailURL} key={stream.id} />;
		});
	}
	return (
		<div>
			<div style={{ display: "flex", flexWrap: "wrap" }}>{streams.length > 0 ? streamList : "Loading streams..."}</div>
		</div>
	);
};

export default Browser;
