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
				</div>
				<AnimatedIcon speed="1" icon="cross" rotate="right" />
				<AnimatedIcon icon="cross" rotate="right" />
				<AnimatedIcon speed="3" icon="cross" rotate="right" />
			</div>
			<div className={styles.promo}></div>
		</section>
	);
};