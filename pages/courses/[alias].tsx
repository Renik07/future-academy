import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { MenuItem } from "../../intefaces/menu.interface";
import { TopPageModel } from "../../intefaces/page.interface";
import { ProductModel } from "../../intefaces/product.interface";
import { withLayout } from "../../layouts/Layout/Layout";

const firstCategory = 0;

export const Course = ({ menu, page, products, firstCategory }:CourseProps ): JSX.Element => {
	console.log(menu);
	console.log(products);
	console.log(page);
	
	return(
		<>
			{ products && products.length }
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, { firstCategory });
	return {
		paths: menu.flatMap(m => m.pages.map(p => `/courses/${p.alias}`)),
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}

	const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, { firstCategory });
	const { data: page } = await axios.get<TopPageModel>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`);
	const { data: products } = await axios.post<ProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
			category: page.category,
			limit: 10
	});

	return {
		props: {
			menu,
			page,
			products,
			firstCategory
		}
	};
};

interface CourseProps extends Record<string, unknown> {
	menu: MenuItem[];
	page: TopPageModel,
	products: ProductModel[],
	firstCategory: number;
}

export default withLayout(Course);