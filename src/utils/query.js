import qs from "query-string";

export function addCategoryToURL(categoryID) {
	console.log("adding to URL");
	const parsedQuery = qs.parse(window.location.search);
	let categories = "";
	if ("categories" in parsedQuery) {
		categories = parsedQuery.categories + ",";
	}
	categories += categoryID;
	parsedQuery.categories = categories;
	return qs.stringify(parsedQuery);
}
