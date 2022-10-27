import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import { Htag, Tag, HhData } from "../../components";
import { TopLevelCategory } from "../../intefaces/page.interface";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps):JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag="h1">{ page.title }</Htag>
				{ products && <Tag color="grey" size="m">{ products.length }</Tag> }
				<div>Сортировка</div>
			</div>
			{ products && products.map(product => <div key={product._id}>{ product.title }</div>) }
			<div className={styles.hhTitle}>
				<Htag tag="h2">Вакансии - { page.category }</Htag>
				<Tag color="red" size="m">hh.ru</Tag>
			</div>
			{ firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} /> }
		</div>
	);
};