import { useContext } from "react";
import { PageContext } from "../../context/page.context";
import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";
import { TopLevelCategory } from "../../intefaces/page.interface";
import styles from './Menu.module.css';
import cn from 'classnames';
import { FirstLevelMenuItem, PageItem } from "../../intefaces/menu.interface";

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: "courses", name: "Курсы", icon: <CoursesIcon />, id: TopLevelCategory.Courses},
	{ route: "services", name: "Сервисы", icon: <ServicesIcon />, id: TopLevelCategory.Services},
	{ route: "books", name: "Книги", icon: <BooksIcon />, id: TopLevelCategory.Books},
	{ route: "products", name: "Товары", icon: <ProductsIcon />, id: TopLevelCategory.Products}
];

export const Menu = (): JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext(PageContext);

	const buildFirstLevel = (): JSX.Element => {
		return (
			<>
				{ firstLevelMenu.map(m => (
						<div key={m.id}>
							<a 
								href={`/${m.route}`} 
								className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: m.id == firstCategory
								})}
							>
								{ m.icon }
								<span>{ m.name }</span>
							</a>
							{ m.id == firstCategory && buildSecondLevel(m) }
						</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
		return (
			<div className={styles.secondBlock}>
				{ menu.map(m => (
					<div className={styles.secondCategory} key={m._id.secondCategory}>
						<a href="#" className={styles.secondLevel}>{ m._id.secondCategory }</a>
						<div className={cn(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: m.isOpened
							})}
						>
							{ buildThirdLevel(m.pages, menuItem.route) }
						</div>
					</div>
				)) }
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element => {
		return(
			<>
				{ pages.map(page => (
					<a 
						key={page._id} 
						href={`/${route}/${page.alias}`} 
						className={cn(styles.thirdLevel, {
							[styles.thirdLevelActive]: false
						})}
					>
						{ page.category }
					</a>
				)) }
			</>
		);
	};

	return(
		<div className={styles.menu}>
			{ buildFirstLevel() }
			{/* { menu.map(item => <div key={item._id.secondCategory}>{item._id.secondCategory}</div>) } */}
		</div>
	);
};