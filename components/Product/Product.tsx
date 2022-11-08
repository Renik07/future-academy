import { ProductProps } from "./Product.props";
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { salaryRu, wordDecl } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider";

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
	return (
		<Card className={styles.product}>
			<div className={styles.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} /></div>
			<h3 className={styles.title}>{ product.title }</h3>
			<div className={styles.price}>{ salaryRu(product.price) }</div>
			<div className={styles.credit}>
				{ salaryRu(product.credit) }
				<span className={styles.month}>/мес</span>
			</div>
			<span className={styles.rating}> <Rating rating={product.reviewAvg ?? product.initialRating} /> </span>
			<div className={styles.tags}>{ product.categories.map(tag => <Tag size="s" key={tag}>{tag}</Tag>) }</div>
			<div className={styles.priceTitle}>цена</div>
			<div className={styles.creditTitle}>кредит</div>
			<div className={styles.ratingTitle}>{product.reviewCount} {wordDecl(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}</div>
			<Divider className={styles.hr} />
			<p className={styles.desc}>{ product.description }</p>
			<div className={styles.features}>
				{ product.characteristics.map(c => {
					return (
						<div className={styles.characteristics} key={c.name}>
							<span className={styles.characteristicName}>{ c.name }</span>
							<span className={styles.dots}></span>
							<span className={styles.characteristicValue}>{ c.value }</span>
						</div>
					);
				}) }
			</div>
			<div className={styles.advBlock}>
				{ product.advantages &&
					<div className={styles.advantages}>
						<h4>Преимущества</h4>
						<p>{ product.advantages }</p>
					</div>
				}
				{ product.disadvantages &&
				<div className={styles.disadvantages}>
					<h4>Недостатки</h4>
					<p>{ product.disadvantages }</p>
				</div>
				}
			</div>
			<Divider className={cn(styles.hr, styles.hr2)} />
			<div className={styles.actions}>
				<Button className={styles.moreButton} appearance="primary">Узнать подробнее</Button>
				<Button appearance="ghost" arrow="right">Читать отзывы</Button>
			</div>
		</Card>
	);
};