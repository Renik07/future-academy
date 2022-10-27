import { CardProps } from "./Card.props";
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({ color = "white", children, className, ...props }: CardProps):JSX.Element => {
	return (
		<div
			className={cn(styles.card, className, {
				[styles.blueLight]: color == "blue-light",
				[styles.blue]: color == "blue",
				[styles.red]: color == "red",
				[styles.green]: color == "green",
				[styles.orange]: color == "orange",
				[styles.pink]: color == "pink"
			})}
			{...props}
		>
			{ children }
		</div>
	);
};