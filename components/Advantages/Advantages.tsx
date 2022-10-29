import { AdvantagesProps } from "./Advantages.props";
import styles from './Advantages.module.css';
import cn from 'classnames';
import { Htag } from "../Htag/Htag";
import CheckIcon from './check-icon.svg';

export const Advantages = ({ advantages }: AdvantagesProps):JSX.Element => {
	return (
		<div className={styles.advantages}>
			<Htag tag="h2">Преимущества</Htag>
				{ advantages.map(a => (
					<div 
						key={a._id}
						className={styles.wrapper}
					>
						<div className={styles.icon}>
							<CheckIcon />
						</div>
						<div className={styles.title}>{ a.title }</div>
						<hr className={styles.line} />
						<p className={styles.description}>{ a.description }</p>
					</div>
				))}
		</div>
	);
};