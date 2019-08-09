import React from "react";
import CategorySelectorWrapper from "./wrappers/CategorySelectorWrapper";

const FiltersBar = (props) => {
	return (
		<div stlye={{ display: "flex" }}>
			<CategorySelectorWrapper {...props} />
		</div>
	);
};

export default FiltersBar;
