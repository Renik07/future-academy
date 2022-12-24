import { WelcomeProps } from "./Welcome.props";
import styles from './Welcome.module.css';
import ApproachIcon from './images/approach.svg';
import BookIcon from './images/book.svg';
import StudyIcon from './images/study.svg';
import TeacherIcon from './images/teacher.svg';

export const Welcome = ({ ...props }: WelcomeProps):JSX.Element => {

	return (
		<section 
			className={styles.welcome} 
			{...props}
		>
			<div className={styles.container}>
				<h2 className={styles.title}>Добро пожаловать в Академию будущего</h2>
				<ul className={styles.list}>
					<li className={styles.item}>
						<ApproachIcon className={styles.icon}/>
						<span>Передовой подход к образовательному процессу</span>
					</li>
					<li className={styles.item}>
						<BookIcon className={styles.icon}/>
						<span>Непрерывное усовершенствование и пополнение базы курсов</span>
					</li>
					<li className={styles.item}>
						<StudyIcon className={styles.icon}/>
						<span>Только практикующие преподаватели</span>
					</li>
					<li className={styles.item}>
						<TeacherIcon className={styles.icon}/>
						<span>Сопровождение на всех этапах. От начала обучения до трудоустройства</span>
					</li>
				</ul>
			</div>
		</section>
	);
};