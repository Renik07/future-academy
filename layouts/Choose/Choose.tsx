import { ChooseProps } from "./Choose.props";
import styles from './Choose.module.css';
import OwlImage from "./images/owl.svg";
import ChildrenIcon from "./images/children.svg";
import TeensIcon from "./images/teens.svg";
import AdultsIcon from "./images/adults.svg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const Choose = ({ ...props }: ChooseProps):JSX.Element => {
	return (
		<section 
			className={styles.choose} 
			{...props}
		>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.speech}>
						<div className={styles.speechTitle}>Кем вы хотите стать?</div>
						<p className={styles.speechText}>Пора найти себя и выбрать подходящий курс :)</p>
						<p className={styles.speechLuck}>Удачи!</p>
						<OwlImage className={styles.owl} />
					</div>
					<div className={styles.tabBlock}>
						<Tabs className={styles.tabs} selectedTabClassName={styles.tabSelected}>
							<TabList className={styles.tabList}>
								<Tab className={styles.tab}>
									<ChildrenIcon className={styles.tabIcon} />
									<h4 className={styles.tabTitle}>Дети</h4>
									<p className={styles.tabText}>8 — 14 лет</p>
								</Tab>
								<Tab className={styles.tab}>
									<TeensIcon className={styles.tabIcon} />
									<h4 className={styles.tabTitle}>Подростки</h4>
									<p className={styles.tabText}>14 — 18 лет</p>
								</Tab>
								<Tab className={styles.tab}>
									<AdultsIcon className={styles.tabIcon} />
									<h4 className={styles.tabTitle}>Взрослые</h4>
									<p className={styles.tabText}>18 — ∞ </p>
								</Tab>
							</TabList>

							<TabPanel className={styles.tabPanel}>
								<div className={styles.tabItem}>Робототехника</div>
								<div className={styles.tabItem}>Создание игр</div>
								<div className={styles.tabItem}>Web-разработка</div>
								<div className={styles.tabItem}>Мультимедиа</div>
								<div className={styles.tabItem}>Мультимедиа</div>
								<div className={styles.tabItem}>3D-моделирование и дизайн</div>
								<div className={styles.tabItem}>Английский язык</div>
								<div className={styles.tabItem}>Блогинг</div>
								<div className={styles.tabItem}>Soft skills</div>
							</TabPanel>
							<TabPanel className={styles.tabPanel}>
								<div className={styles.tabItem}>Web-разработка</div>
								<div className={styles.tabItem}>Прикладное программирование</div>
								<div className={styles.tabItem}>Графическое моделирование</div>
								<div className={styles.tabItem}>Game Development</div>
								<div className={styles.tabItem}>Soft skills</div>
								<div className={styles.tabItem}>Разработчик мобильных приложений</div>
								<div className={styles.tabItem}>Блогинг</div>
								<div className={styles.tabItem}>Создание игр</div>
								<div className={styles.tabItem}>Программирование</div>
								<div className={styles.tabItem}>Мультимедиа</div>
								<div className={styles.tabItem}>Soft skills</div>
							</TabPanel>
							<TabPanel className={styles.tabPanel}>
								<div className={styles.tabItem}>Разработчик игр на Unity</div>
								<div className={styles.tabItem}>Разработка ПО</div>
								<div className={styles.tabItem}>Графический Дизайн</div>
								<div className={styles.tabItem}>Тестировщик ПО</div>
								<div className={styles.tabItem}>Интернет Маркетинг</div>
								<div className={styles.tabItem}>Java-разработчик</div>
								<div className={styles.tabItem}>Python–разработчик</div>
								<div className={styles.tabItem}>IOS-разработчик</div>
								<div className={styles.tabItem}>Программирование</div>

							</TabPanel>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	);
};