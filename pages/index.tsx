import { GetStaticProps } from "next";
import { useState } from "react";
/* import { Htag, Button, P, Tag, Input, Textarea, Search } from "../components";
import { Rating } from "../components/Rating/Rating"; */
import axios from "axios";
import { MenuItem } from "../intefaces/menu.interface";
import { API } from "../helpers/api";
import { withMainLayout } from "../layouts/MainLayout/MainLayout";
import { Intro } from "../layouts/Intro/Intro";
import { Choose } from "../layouts/Choose/Choose";

function Home({ menu, firstCategory }:HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(5);
  return (
		<>
		<Intro />
		<Choose />
{/* 			<Htag tag="h1">Texttttt</Htag>
			<Button appearance="primary" arrow="right">Узнать подробнее</Button>
			<Button appearance="ghost" arrow="down">Узнать подробнее</Button>
			<Button appearance="form" arrow="none">Узнать подробнее</Button>
			<P size="s">adasdasdaddsad</P>
			<P size="m">adasdasdaddsad</P>
			<P size="l">adasdasdaddsad</P>
			<Htag tag="h1">H1</Htag>
			<Htag tag="h2">H2</Htag>
			<Htag tag="h3">H3</Htag>
			<Htag tag="h4">H4</Htag>
			<Tag size="m" color="red">dasdasdadasd</Tag>
			<Tag size="s" color="grey">dasdasdadasd</Tag>
			<Tag size="m" color="ghost" href="https://google.com">dasdasdadasd</Tag>
			<Tag color="green">dasdasdadasd</Tag>
			<Tag>dasdasdadasd</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />		
			<Input type="dark" placeholder="adasdasd" />
			<Input type="light" placeholder="adasdasd" />
			<Textarea type="dark" placeholder="adasdasd" />
			<Textarea type="light" placeholder="adasdasd" />
			<Search  /> */}
			{/* <Rating rating={rating} isEditable setRating={setRating} /> */}
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