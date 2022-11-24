import { HeaderProps } from "./Header.props";
import styles from './Header.module.css';
import Logo from './logo.svg';
import CoursesIcon from './courses.svg';
import UserIcon from './user.svg';

export const Header = ({ ...props }: HeaderProps):JSX.Element => {
	return (
		<header 
			className={styles.header} 
			{...props}
		>
			<div className={styles.container}>
			<Logo className={styles.logo} />
			<nav className={styles.menu}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<a href="">
							<CoursesIcon />
							Все курсы
						</a>
					</li>
					<li className={styles.item}>
						<a href="">Мероприятия</a>
					</li>
					<li className={styles.item}>
						<a href="">Базы знаний</a>
					</li>
					<li className={styles.item}>
						<a href="">Карьера</a>
					</li>
				</ul>
			</nav>
			<a className={styles.tel} href="tel:+78009503398">
				8 800 950-33-98 
			</a>
			<a className={styles.enter} href="">
				<UserIcon />
				Войти
			</a>
			</div>
		</header>
	);
};