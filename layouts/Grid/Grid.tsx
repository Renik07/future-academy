import { GridProps } from "./Grid.props";
import styles from './Grid.module.css';
import { Button, Card } from "../../components";
import CompIcon from './images/comp.svg';
import DiagramIcon from './images/diagram.svg';
import LogoIcon from './images/logo.svg';
import NewspaperIcon from './images/newspaper.svg';

export const Grid = ({ ...props }: GridProps):JSX.Element => {
	return (
		<section 
			className={styles.grid} 
			{...props}
		>
			<div className={styles.container}>
				<div className={styles.blocks}>
					<Card className={styles.openday} color="red">
						<div className={styles.opendayCol1}>
							<div className={styles.num}>
								25
							</div>
							<div className={styles.month}>
								ноября
							</div>
						</div>
						<div className={styles.opendayCol2}>
							<h2 className={styles.title}>День открытых дверей</h2>
							<p className={styles.text}>Приглашаем всех желающих на бесплатную экскурсию в мир востребованных профессий и полезных навыков</p>
						</div>
						<div className={styles.opendayCol3}>
							<Button arrow="right" appearance='ghost' >Записаться</Button>
						</div>
					</Card>
					<Card className={styles.program} color="blue">
						<CompIcon className={styles.icon} />
						<h3 className={styles.subtitle}>Программы обучения</h3>
						<p className={styles.text}>В списке наших курсов вы сможете найти профессию и занятие по душе, изучить новое и получить практические знания, которые помогут получить работу мечты.</p>
						<Button arrow="right" appearance='ghost' >Подробнее</Button>
					</Card>
					<Card className={styles.news} color="green">
						<NewspaperIcon />
						<h3 className={styles.subtitle}>Новости Академии</h3>
					</Card>
					<Card className={styles.it} color="pink">
						<DiagramIcon />
						<h3 className={styles.subtitle}>Мир IT</h3>
					</Card>
					<Card className={styles.try} color="orange">
						<LogoIcon className={styles.logo} />
						<h3 className={styles.subtitle}>Попробуй!</h3>
						<p className={styles.text}>Пройдите тест и узнайте свои способности в сфере информационных технологий</p>
					</Card>
				</div>
			</div>
		</section>
	);
};