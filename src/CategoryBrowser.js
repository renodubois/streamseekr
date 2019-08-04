import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { getTopCategories } from "./utils/twitch";

const CategoryBrowser = ({ match }) => {
	const [ topCategories, setTopCategories ] = useState([]);
	useEffect(() => {
		async function getCategories () {
			const data = await getTopCategories();
			setTopCategories(data);
		}
		getCategories();
	}, [])
	console.log(topCategories);
	let categoryList = null;
	
	if (topCategories.length > 0) {
		categoryList = topCategories.map((category) => {
			const formattedImgURL = category.box_art_url.replace("{width}", "140").replace("{height}", "190");
			return (
				<div style={{display:"flex",flexDirection:"column"}} key={category.id}>
					<Link to={`/categories/${category.id}`} style={{ display:"flex", flexDirection:"column", flexWrap:"wrap", maxWidth:"140px",margin:10 }}>
						<img src={formattedImgURL} alt={`Box art of the category/game ${category.name}`} />
						{category.name}
					</Link>
				</div>
			);
		})
		console.log("category list", categoryList);
	}
	return (
		<>
			<h1>Browse Top Categories</h1>
			<div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
				{ categoryList ? categoryList : "Loading categories..." }
			</div>
		</>
	)
}

export default CategoryBrowser;