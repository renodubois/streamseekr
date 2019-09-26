import { connect } from "react-redux";
import CategorySelector from "../CategorySelector";
import { categorySlice } from "../stores/main";

const mapStateToProps = (store) => {
	return {
		categories: store.categories
	};
};

const { actions } = categorySlice;
const { addCategory, removeCategory } = actions;
const mapDispatchToProps = {
	addCategory,
	removeCategory
};

const CategorySelectorWrapper = connect(
	mapStateToProps,
	mapDispatchToProps
)(CategorySelector);

export default CategorySelectorWrapper;
