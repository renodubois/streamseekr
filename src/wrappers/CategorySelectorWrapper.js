import { connect } from "react-redux";
import CategorySelector from "../CategorySelector";
import { addCategory, removeCategory } from "../stores/main";

const mapStateToProps = (store) => {
	return {
		categories: store
	};
};
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onCategoryAdd: (name, id) => {
// 			dispatch(addCategory, { name, id });
// 		},
// 		onCategoryRemove: (name) => {
// 			dispatch(removeCategory, { name });
// 		}
// 	};
// };

const mapDispatchToProps = {
	addCategory,
	removeCategory
};

const CategorySelectorWrapper = connect(
	mapStateToProps,
	mapDispatchToProps
)(CategorySelector);

export default CategorySelectorWrapper;
