import React from "react";
import CategorySelectorWrapper from "./wrappers/CategorySelectorWrapper";
import FilterSelectorWrapper from "./wrappers/FilterSelectorWrapper";

const OptionsBar = (props) => {
	return (
		<div className="optionsBar">
			<CategorySelectorWrapper {...props} />
			<FilterSelectorWrapper {...props} />
		</div>
	);
};

export default OptionsBar;
