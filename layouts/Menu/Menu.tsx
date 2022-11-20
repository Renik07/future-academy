import { useContext } from "react";
import { PageContext } from "../../context/page.context";
import styles from './Menu.module.css';
import cn from 'classnames';
import { FirstLevelMenuItem, PageItem } from "../../intefaces/menu.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";
import { motion } from "framer-motion";

export const Menu = (): JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext(PageContext);
	const router = useRouter();

	const variants = {
		visible: {
			marginBottom: 20,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.1
			}
		},
		hidden: {
			marginBottom: 0,
		}
	};
	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 29
		},
		hidden: {
			opacity: 0,
			height: 0
		}
	};

	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory === secondCategory) {
				m.isOpened = !m.isOpened;
			}
			return m;
		}));
	};

	const buildFirstLevel = (): JSX.Element => {
		return (
			<>
				{ firstLevelMenu.map(m => (
						<div key={m.id}>
							<Link href={`/${m.route}`}>
								<a 
									className={cn(styles.firstLevel, {
										[styles.firstLevelActive]: m.id == firstCategory
									})}
								>
									{ m.icon }
									<span>{ m.name }</span>
								</a>
							</Link>
							{ m.id == firstCategory && buildSecondLevel(m) }
						</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
		return (
			<div className={styles.secondBlock}>
				{ menu.map(m => {
					// если alias из API содержит текущий URL
					if (m.pages.map(page => page.alias).includes(router.asPath.split('/')[2])) {
						m.isOpened = true;
					}
					return(
						<div className={styles.secondCategory} key={m._id.secondCategory}>
							<div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{ m._id.secondCategory }</div>
							<motion.div 
								layout
								initial={m.isOpened ? "visible" : "hidden"}
								animate={m.isOpened ? "visible" : "hidden"}
								variants={variants}
								className={cn(styles.secondLevelBlock)}
							>
								{ buildThirdLevel(m.pages, menuItem.route) }
							</motion.div>
						</div>
					);
				}) }
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element => {
		return(
			<>
				{ pages.map(page => {
					return (
						<motion.div 
							key={page._id}
							variants={variantsChildren}
						>
							<Link href={`/${route}/${page.alias}`}>
								<a   
									className={cn(styles.thirdLevel, {
										[styles.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath
									})}
								>
									{ page.category }
								</a>
							</Link>
						</motion.div>
					);
				}) }
			</>
		);
	};

	return(
		<div className={styles.menu}>
			{ buildFirstLevel() }
		</div>
	);
};