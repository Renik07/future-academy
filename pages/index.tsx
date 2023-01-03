import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../intefaces/menu.interface";
import { API } from "../helpers/api";
import { withMainLayout } from "../layouts/MainLayout/MainLayout";
import { Intro } from "../layouts/Intro/Intro";
import { Choose } from "../layouts/Choose/Choose";
import { Promo } from "../layouts/Promo/Promo";
import { Grid } from "../layouts/Grid/Grid";
import { Reviews } from "../layouts/Reviews/Reviews";
import { Welcome } from "../layouts/Welcome/Welcome";
import { Form } from "../layouts/Form/Form";
import Head from "next/head";

function Home(): JSX.Element {
  return (
		<>
			<Head>
				<title>Future Academy</title>
				<meta name="description" content="Future Academy - лучшие курсы во всем интернете"></meta>
				<meta property="og:title" content="Future Academy"></meta>
				<meta property="og:description" content="Future Academy - лучшие курсы во всем интернете"></meta>
				<meta property="og:type" content="article" />
			</Head>
			<Intro />
			<Choose />
			<Promo />
			<Grid />
			<Reviews />
			<Welcome />
			<Form />
		</>
  );
}

export default withMainLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});
	
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[],
	firstCategory: number
}