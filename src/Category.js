import React, { useEffect, useState } from "react";
import { getStreamsByCategoryID, getCategoryByID } from "./utils/twitch";

const Category = ({ match }) => {
	const { categoryID } = match.params;
	const [currentStreams, setCurrentStreams] = useState([]);
	const [categoryData, setCategoryData] = useState(false);
	useEffect(() => {
		async function getStreams() {
			const data = await getStreamsByCategoryID(categoryID);
			console.log("data", data);
			setCurrentStreams(data);
		}
		getStreams();
		async function getCategoryInfo() {
			const data = await getCategoryByID(categoryID);
			setCategoryData(data);
		}
		getCategoryInfo();
	}, [categoryID]);
	let streamList = [];
	let categoryPicture = null;
	if (currentStreams) {
		streamList = currentStreams.map((stream, index) => (
			<li key={stream.id}>
				{stream.user_name}: <a href={`https://twitch.tv/${stream.user_name}`}>{stream.title}</a>
			</li>
		));
	}
	if (categoryData) {
		const formattedURL = categoryData.box_art_url.replace("{width}", "140").replace("{height}", "190");
		categoryPicture = <img src={formattedURL} alt={`Box art for the game/category ${categoryData.name}`} />;
	}
	return (
		<div>
			{categoryPicture}
			<h1>{categoryData.name ? categoryData.name : "Loading..."}</h1>
			<ul>{streamList.length > 0 ? streamList : "Getting streams..."}</ul>
		</div>
	);
};

export default Category;
