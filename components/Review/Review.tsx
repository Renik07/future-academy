import { ReviewProps } from "./Review.props";
import styles from './Review.module.css';
import UserIcon from './user.svg';
import { Rating } from "../Rating/Rating";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const Review = ({ review, className, ...props }: ReviewProps):JSX.Element => {
	const { _id, name, title, description, rating, createdAt } = review;
	return (
		<div className={styles.review}>
			<UserIcon className={styles.icon} />
			<div className={styles.title}>
				<span>{ name }: </span>
				<h3>{ title }</h3>
			</div>
			<div className={styles.date}>{ format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru }) }</div>
			<Rating className={styles.rating} rating={rating} />
			<p className={styles.desc}>{ description }</p>
		</div>
	);
};