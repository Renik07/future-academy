import { useContext } from "react";
import { PageContext } from "../../context/page.context";
import styles from './Menu.module.css';
import cn from 'classnames';
import { FirstLevelMenuItem, PageItem } from "../../intefaces/menu.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";

export const Menu = (): JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext(PageContext);
	const router = useRouter();

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
						<div className={cn(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: m.isOpened
							})}
						>
							{ buildThirdLevel(m.pages, menuItem.route) }
						</div>
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
						<Link href={`/${route}/${page.alias}`} key={page._id}>
							<a   
								className={cn(styles.thirdLevel, {
									[styles.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath
								})}
							>
								{ page.category }
							</a>
						</Link>
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