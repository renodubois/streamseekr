import React, { useEffect } from "react";
import qs from "query-string";
import Browser from "./Browser";
import FiltersBar from "./FiltersBar";
import { getCategoryByID } from "./utils/twitch";

const MainPage = (props) => {
	const { location, onCategoryAdd } = props;
	const parsedQuery = qs.parse(location.search);
	useEffect(() => {
		const addCategories = async () => {
			const categoriesToAdd = [];
			if ("categories" in parsedQuery) {
				const categories = parsedQuery.categories.split(",");
				for (const categoryID of categories) {
					// get the name for the category
					const category = await getCategoryByID(categoryID);
					const categoryName = category.name;
					// add to the redux store
					categoriesToAdd.push({ name: categoryName, id: categoryID });
				}
			}
			if ("filters" in parsedQuery && !Array.isArray(parsedQuery.filters)) {
				parsedQuery.filters = [parsedQuery.filters];
			}
			categoriesToAdd.forEach((category) => onCategoryAdd(category.name, category.id));
		};
		addCategories();
	}, [parsedQuery, onCategoryAdd]);

	return (
		<>
			<FiltersBar {...props} />
			<Browser {...props} />;
		</>
	);
};

export default MainPage;
