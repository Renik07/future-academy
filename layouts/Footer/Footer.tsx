import { FooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import Logo from './logo.svg';
import FacebookIcon from './icon-facebook.svg';
import InstagramIcon from './icon-insta.svg';
import TelegramIcon from './icon-tg.svg';
import YoutubeIcon from './icon-tube.svg';
import VkIcon from './icon-vk.svg';

export const Footer = ({ className, ...props }: FooterProps):JSX.Element => {
	return (
		<footer 
			{...props}
			className={cn(className, styles.footer)}
		>
			<div className={styles.column1}>
				<Logo className={styles.logo} />
				<a className={styles.tel} href="tel:+78009503398">8 800 950-33-98 </a>
				<div className={styles.address}>г. Москва, ул. Ленина, д. 50</div>
				<a className={styles.email} href="mailto:info@hodfutureacademy.ru">info@future-academy.ru</a>
				<div className={styles.icons}>
					<a href="#"><FacebookIcon /></a>
					<a href="#"><InstagramIcon /></a>
					<a href="#"><TelegramIcon /></a>
					<a href="#"><YoutubeIcon /></a>
					<a href="#"><VkIcon /></a>
				</div>
				<div className={styles.copyright}>© Future Academy</div>
			</div>
			<div className={styles.column2}>
				<h3 className={styles.title}>Детям</h3>
				<a className={styles.link} href="#">Робототехника</a>
				<a className={styles.link} href="#">Создание игр</a>
				<a className={styles.link} href="#">Программирование</a>
				<a className={styles.link} href="#">Мультимедиа</a>
				<a className={styles.link} href="#">Soft skills</a>
				<a className={styles.link} href="#">Шахматы</a>
				<a className={styles.link} href="#">Блогинг</a>
				<a className={styles.link} href="#">Создание игр</a>
				<a className={styles.link} href="#">Программирование</a>
				<a className={styles.link} href="#">Мультимедиа</a>
				<a className={styles.link} href="#">Soft skills</a>
			</div>
			<div className={styles.column3}>
				<h3 className={styles.title}>Подросткам</h3>
				<a className={styles.link} href="#">Web-разработка</a>
				<a className={styles.link} href="#">Прикладное программирование</a>
				<a className={styles.link} href="#">Графическое моделирование</a>
				<a className={styles.link} href="#">Game Development</a>
				<a className={styles.link} href="#">Soft skills</a>
				<a className={styles.link} href="#">Разработчик мобильных приложений</a>
				<a className={styles.link} href="#">Блогинг</a>
				<a className={styles.link} href="#">Создание игр</a>
				<a className={styles.link} href="#">Программирование</a>
				<a className={styles.link} href="#">Мультимедиа</a>
				<a className={styles.link} href="#">Soft skills</a>
			</div>
			<div className={styles.column4}>
				<h3 className={styles.title}>Взрослым</h3>
				<a className={styles.link} href="#">Разработчик игр на Unity</a>
				<a className={styles.link} href="#">Разработка ПО</a>
				<a className={styles.link} href="#">Графический Дизайн</a>
				<a className={styles.link} href="#">Тестировщик ПО</a>
				<a className={styles.link} href="#">Интернет Маркетинг</a>
				<a className={styles.link} href="#">Java-разработчик</a>
				<a className={styles.link} href="#">Python–разработчик</a>
				<a className={styles.link} href="#">IOS-разработчик</a>
				<a className={styles.link} href="#">Программирование</a>
			</div>
			<div className={styles.column5}>
				<h3 className={styles.title}>Информация</h3>
				<a className={styles.link} href="#">Об академии</a>
				<a className={styles.link} href="#">Мероприятия</a>
				<a className={styles.link} href="#">Новости</a>
				<a className={styles.link} href="#">База знаний</a>
				<a className={styles.link} href="#">Карьера</a>
				<a className={styles.link} href="#">Контакты</a>
			</div>
		</footer>
	);
};