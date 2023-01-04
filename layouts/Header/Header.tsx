import { HeaderProps } from "./Header.props";
import styles from './Header.module.css';
import Logo from './logo.svg';
import CoursesIcon from './courses.svg';
import UserIcon from './user.svg';
import { ButtonIcon } from "../../components";
import { Sidebar } from "../Sidebar/Sidebar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const Header = ({ ...props }: HeaderProps):JSX.Element => {
	const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		setIsOpenedMenu(false);
	}, [router]);

	const variants = {
		closedMenu: {
			x: '-100%',
			transition: {
				duration: 1
			}
		},
		openedMenu: {
			x: 0,
			transition: {
				delay: 0.5,
				duration: 1
			}
		},
		hiddenButton: {
			x: '-100%',
			transition: {
				duration: 1.5
			}
		},
		showButton: {
			x: 0,
			transition: {
				duration: 1,
				delay: 0.5
			}
		},
	};

	return (
		<header 
			className={styles.header} 
			{...props}
		>
			<div className={styles.container}>
			<Link href="/">
				<a>
					<Logo className={styles.logo} />
				</a>
			</Link>
			<nav className={styles.menu}>
				<ul className={styles.list}>
					<li className={styles.item}>
					<Link href="/courses">
						<a href="">
							<CoursesIcon />
							Все курсы
						</a>
					</Link>
					</li>
					<li className={styles.item}>
						<Link href="/activity">
							<a href="">
								Мероприятия
							</a>
						</Link>
					</li>
					<li className={styles.item}>
						<Link href="/knowledge">
							<a href="">
								Базы знаний
							</a>
						</Link>
					</li>
					<li className={styles.item}>
						<Link href="/career">
							<a href="">
								Карьера
							</a>
						</Link>
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
			{router.asPath !== "/" && 
				<div>
					<motion.div 
						className={styles.buttonOpen}
						variants={variants}
						initial="showButton"
						animate={isOpenedMenu ? "hiddenButton" : "showButton"}
					>
						<ButtonIcon 
							appearance="white" 
							icon="burger" 
							onClick={() => setIsOpenedMenu(true)} />
					</motion.div>
					<motion.div 
						className={styles.menuMobile}
						variants={variants}
						initial="closedMenu"
						animate={isOpenedMenu ? "openedMenu" : "closedMenu"}
					>
						<ButtonIcon 
							className={styles.buttonClose} 
							appearance="primary" 
							icon="close" 
							onClick={() => setIsOpenedMenu(false)} />
						<Sidebar className={styles.sidebar} />
					</motion.div>
				</div>
			}
		</header>
	);
};