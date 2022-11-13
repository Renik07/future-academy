import { ProductModel } from '../../intefaces/product.interface';
import { sortEnum } from './../../components/Sort/Sort.props';

export type SortActions = {type: sortEnum.Rating} | {type: sortEnum.Price} | {type: 'reset', initialState: ProductModel[]};

export interface SortReducerState {
	sort: sortEnum;
	products: ProductModel[];
}

export const SortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
	switch(action.type) {
		case sortEnum.Rating:
			return {
				sort: sortEnum.Rating,
				products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
			};
		case sortEnum.Price:
			return {
				sort: sortEnum.Price,
				products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
			};
		case 'reset':
			return {
				sort: sortEnum.Rating,
				products: action.initialState
			};
		default:
			throw new Error("sort error");
	}
};