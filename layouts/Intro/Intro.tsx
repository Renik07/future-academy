import { IntroProps } from "./Intro.props";
import styles from './Intro.module.css';
import { AnimatedIcon } from "../../components";

export const Intro = ({ ...props }: IntroProps):JSX.Element => {

	return (
		<section 
			className={styles.intro} 
			{...props}
		>
			<div className={styles.content}>
				<div className={styles.container}>
					<h1 className={styles.title}>Образовательная платформа Future Academy</h1>
					<p className={styles.text}>Актуальные знания для новичков и профессионалов</p>
					<AnimatedIcon className={styles.crossIcon} icon="cross" rotate="right" />
					<AnimatedIcon className={styles.circleIcon} speed="3" icon="circle" rotate="left" />
					<AnimatedIcon className={styles.trianleIcon} speed="1" icon="triangle" rotate="left" />
					<AnimatedIcon className={styles.vectorIcon} icon="vector" />
				</div>
			</div>
			<div className={styles.promo}></div>
		</section>
	);
};