import { sortEnum, SortProps } from "./Sort.props";
import styles from './Sort.module.css';
import cn from 'classnames';
import SortIcon from './sort-icon.svg';

export const Sort = ({ sort, setSort, className, ...props }: SortProps):JSX.Element => {
	return (
		<div className={cn(styles.sort, className)} {...props}>
			<div className={cn({
				[styles.active] : sort === sortEnum.Rating
			})}
				onClick={() => setSort(sortEnum.Rating)}
			>
				<SortIcon className={styles.sortIcon} /> 
				<span className={styles.text}>По рейтингу</span>
			</div>
			<div className={cn({
				[styles.active] : sort === sortEnum.Price
			})}
				onClick={() => setSort(sortEnum.Price)}
			>
				<SortIcon className={styles.sortIcon} /> 
				<span className={styles.text}>По цене</span>
			</div>
		</div>
	);
};