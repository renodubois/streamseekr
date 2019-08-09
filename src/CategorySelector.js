import React, { useState } from "react";
import { addCategoryToURL, removeCategoryFromURL } from "./utils/query";
import { getCategoryID } from "./utils/twitch";

const onSubmit = async ({ e, category, history, pathname }) => {
	e.preventDefault();
	const categoryID = await getCategoryID(category);
	const newSearchParams = addCategoryToURL(categoryID);
	const newURL = `${pathname}?${newSearchParams}`;
	history.push(newURL);
};

const onRemove = ({ e, category, pathname, history, onCategoryRemove }) => {
	e.preventDefault();
	const newSearchParams = removeCategoryFromURL(category.id);
	const newURL = `${pathname}?${newSearchParams}`;
	history.push(newURL);
	onCategoryRemove(category.name);
};

const CategorySelector = (props) => {
	const [category, setCategory] = useState("");
	const { history, location, onCategoryRemove } = props;
	return (
		<div>
			<form
				onSubmit={(e) => {
					onSubmit({ e, category, history: props.history, pathname: location.pathname });
					setCategory("");
				}}
			>
				<input name="category" type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
			</form>
			<div>
				{props.categories.map((category) => (
					<a
						href="javscript://"
						onClick={(e) => {
							onRemove({ e, category, history, onCategoryRemove, pathname: location.pathname });
						}}
						key={category.id}
					>
						{category.name}
					</a>
				))}
			</div>
		</div>
	);
};

export default CategorySelector;
