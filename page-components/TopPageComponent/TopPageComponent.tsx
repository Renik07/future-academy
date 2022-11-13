import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import { Htag, Tag, HhData, Advantages, Sort, Product } from "../../components";
import { TopLevelCategory } from "../../intefaces/page.interface";
import { sortEnum } from "../../components/Sort/Sort.props";
import { useEffect, useReducer } from "react";
import { SortReducer } from "./sort.reducer";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps):JSX.Element => {
	const [{products: sortProducts, sort}, dispatchSortProducts] = useReducer(SortReducer, {products, sort: sortEnum.Rating});

	const setSort = (sort: sortEnum) => {
		dispatchSortProducts({type: sort});
	};

	useEffect(() => {
		dispatchSortProducts({type: "reset", initialState: products});
	}, [products]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag="h1">{ page.title }</Htag>
				{ products && <Tag color="grey" size="m">{ products.length }</Tag> }
				<Sort sort={sort} setSort={setSort} />
			</div>
			{ sortProducts && sortProducts.map(product => <Product key={product._id} product={product} />) }
			<div className={styles.hhTitle}>
				<Htag tag="h2">Вакансии - { page.category }</Htag>
				<Tag color="red" size="m">hh.ru</Tag>
			</div>
			{ firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} /> }
			{ page.advantages && page.advantages.length > 0 && <Advantages advantages={page.advantages} /> }
			{ page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}></div> }
			<Htag tag="h2">Получаемые навыки</Htag>
			{ page.tags.map(tag => <Tag key={tag} color="primary">{ tag }</Tag>) }
		</div>
	);
};