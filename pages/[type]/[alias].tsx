import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { API } from "../../helpers/api";
import { firstLevelMenu } from "../../helpers/helpers";
import { MenuItem } from "../../intefaces/menu.interface";
import { TopLevelCategory, TopPageModel } from "../../intefaces/page.interface";
import { ProductModel } from "../../intefaces/product.interface";
import { withLayout } from "../../layouts/Layout/Layout";
import { TopPageComponent } from "../../page-components";
import Head from "next/head";

export const TopPage = ({ page, products, firstCategory }:TopPageProps ): JSX.Element => {
	
	return(
		<>
		<Head>
			<title>{page.metaTitle}</title>
			<meta name="description" content={page.metaDescription}></meta>
			<meta property="og:title" content={page.metaTitle}></meta>
			<meta property="og:description" content={page.metaDescription}></meta>
			<meta property="og:type" content="article" />
		</Head>
			<TopPageComponent page={page} products={products} firstCategory={firstCategory} />
		</>
	);
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: string[] = [];

	for (const m of firstLevelMenu) {
		const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory: m.id });
		paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
	}
	return {
		paths,
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		}; 
	}

	const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
	if (!firstCategoryItem) {
		return {
			notFound: true
		};
	}
	try {
		const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory:  firstCategoryItem.id});
		if (menu.length == 0) {
			return {
				notFound: true
			};
		}
		const { data: page } = await axios.get<TopPageModel>(`${API.topPage.byAlias}/${params.alias}`);
		const { data: products } = await axios.post<ProductModel[]>(API.product.find, {
				category: page.category,
				limit: 10
		});
	
		return {
			props: {
				menu,
				page,
				products,
				firstCategory: firstCategoryItem.id
			}
		};
	} catch {
		return {
			notFound: true
		};
	}
};

interface TopPageProps extends Record<string, unknown> {
	menu: MenuItem[];
	page: TopPageModel,
	products: ProductModel[],
	firstCategory: TopLevelCategory;
}