import { Htag, Button, P, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
		<>
			<Htag tag="h1">Texttttt</Htag>
			<Button appearance="primary" arrow="right">Узнать подробнее</Button>
			<Button appearance="ghost" arrow="down">Узнать подробнее</Button>
			<Button appearance="form" arrow="none">Узнать подробнее</Button>
			<P size="s">adasdasdaddsad</P>
			<P>adasdasdaddsad</P>
			<P size="l">adasdasdaddsad</P>
			<Tag size="m" color="red">dasdasdadasd</Tag>
			<Tag size="s" color="grey">dasdasdadasd</Tag>
			<Tag size="m" color="ghost" href="https://google.com">dasdasdadasd</Tag>
			<Tag color="green">dasdasdadasd</Tag>
			<Tag>dasdasdadasd</Tag>
		</>
  );
}
