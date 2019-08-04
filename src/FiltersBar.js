import React from "react";
import CategorySelector from "./CategorySelector";

const FiltersBar = (props) => {
	return (
		<div stlye={{ display: "flex" }}>
			<CategorySelector {...props} />
		</div>
	);
};

export default FiltersBar;
