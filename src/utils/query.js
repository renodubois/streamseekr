import qs from "query-string";

export function addCategoryToURL(categoryID) {
	const parsedQuery = qs.parse(window.location.search);
	let categories = "";
	if ("categories" in parsedQuery) {
		categories = parsedQuery.categories + ",";
	}
	categories += categoryID;
	parsedQuery.categories = categories;
	return qs.stringify(parsedQuery);
}

export function removeCategoryFromURL(categoryID) {
	const parsedQuery = qs.parse(window.location.search);
	if ("categories" in parsedQuery) {
		let categories = parsedQuery.categories.split(",");
		categories = categories.filter((category) => category !== categoryID);
		if (categories.length === 0) {
			delete parsedQuery.categories;
		} else {
			parsedQuery.categories = categories.join(",");
		}
	}
	return qs.stringify(parsedQuery);
}
