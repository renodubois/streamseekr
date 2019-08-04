import React, { useState } from "react";
import { addCategoryToURL } from "./utils/query";
import { getCategoryID } from "./utils/twitch";

const onSubmit = async ({ e, category, history, pathname }) => {
	e.preventDefault();
	const categoryID = await getCategoryID(category);
	const newSearchParams = addCategoryToURL(categoryID);
	const newURL = `${pathname}?${newSearchParams}`;
	history.push(newURL);
	// set input to blank again
};

const CategorySelector = (props) => {
	const [category, setCategory] = useState("");
	return (
		<form
			onSubmit={(e) => {
				onSubmit({ e, category, history: props.history, pathname: props.location.pathname });
				setCategory("");
			}}
		>
			<input name="category" type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
		</form>
	);
};

export default CategorySelector;
