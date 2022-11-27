import { MainLayoutProps } from "./MainLayout.props";
import styles from './MainLayout.module.css';
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { FC } from "react";
import { Up } from "../../components/Up/Up";

const MainLayout = ({ children }: MainLayoutProps):JSX.Element => {
	return (
		<div className={styles.main}>
			<Header className={styles.header}/>
			<main className={styles.body}>
				{ children }
			</main>
			<Footer className={styles.footer}/>
			<Up />
		</div>
	);
};

export const withMainLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
	return function withLayoutComponent(props: T):JSX.Element {
		return (
				<MainLayout>
					<Component {...props} />
				</MainLayout>
		);
	};
};