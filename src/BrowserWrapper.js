import React from "react";
import qs from "query-string";
import Browser from "./Browser";
import FiltersBar from "./FiltersBar";

const BrowserWrapper = (props) => {
	const parsedQuery = qs.parse(window.location.search);
	if ("categories" in parsedQuery) {
		parsedQuery.categories = parsedQuery.categories.split(",");
	}
	if ("filters" in parsedQuery && !Array.isArray(parsedQuery.filters)) {
		parsedQuery.filters = [parsedQuery.filters];
	}
	return (
		<>
			<FiltersBar {...props} />
			<Browser {...parsedQuery} />;
		</>
	);
};

export default BrowserWrapper;
