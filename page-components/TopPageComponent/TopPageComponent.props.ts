import { TopLevelCategory, TopPageModel } from "../../intefaces/page.interface";
import { ProductModel } from "../../intefaces/product.interface";

export interface TopPageComponentProps {
	page: TopPageModel,
	products: ProductModel[],
	firstCategory: TopLevelCategory;
}