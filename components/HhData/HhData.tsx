import { HhDataProps } from "./HhData.props";
import styles from './HhData.module.css';
import cn from 'classnames';
import StarIcon from "./star-icon.svg";
import { Card } from "../Card/Card";
import { salaryRu } from "../../helpers/helpers";

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps):JSX.Element => {
	return (
		<div className={styles.hh}>
			<Card className={styles.card}>
				<div className={styles.title}>Всего вакансий</div>
				<div className={styles.count}>{ count }</div>
			</Card>
			<Card className={styles.salary}>
				<div className={styles.salaryCard}>
					<div className={styles.level}>Начальный</div>
					<div className={styles.salaryValue}>{ salaryRu(juniorSalary) }</div>
					<div className={styles.rating}>
						<StarIcon className={styles.filled} />
						<StarIcon />
						<StarIcon />
					</div>
				</div>
				<div className={styles.salaryCard}>
					<div className={styles.level}>Средний</div>
					<div className={styles.salaryValue}>{salaryRu(middleSalary) }</div>
					<div className={styles.rating}>
						<StarIcon className={styles.filled} />
						<StarIcon className={styles.filled} />
						<StarIcon />
					</div>
				</div>
				<div className={styles.salaryCard}>
					<div className={styles.level}>Профессионал</div>
					<div className={styles.salaryValue}>{ salaryRu(seniorSalary) }</div>
					<div className={styles.rating}>
						<StarIcon className={styles.filled} />
						<StarIcon className={styles.filled} />
						<StarIcon className={styles.filled} />
					</div>
				</div>
			</Card>
		</div>
	);
};