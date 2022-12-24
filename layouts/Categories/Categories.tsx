import { CategoriesProps } from "./Categories.props";
import styles from './Categories.module.css';

export const Categories = ({ menu, ...props }: CategoriesProps):JSX.Element => {

	return (
		<div 
			className={styles.courses} 
			{...props}
		>
			<h2 className={styles.title}>Курсы</h2>
			<div className={styles.content}>
				{ menu.map(m => 
					<div 
						className={styles.card} 
						color="blue" 
						key={m._id.secondCategory}
					>
						<div className={styles.program}>Программа</div>
						<h3 className={styles.subtitle}>«{ m._id.secondCategory }»</h3>
						{m.pages.map(c => 
							<ul className={styles.list} key={c._id}>
								<li className={styles.item}>{ c.category }</li>
							</ul>)}
					</div>
					)}
			</div>
		</div>
	);
};