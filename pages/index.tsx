import { Htag, Button } from "../components";

export default function Home(): JSX.Element {
  return (
		<>
			<Htag tag="h1">Texttttt</Htag>
			<Button appearance="primary" arrow="right">Узнать подробнее</Button>
			<Button appearance="ghost" arrow="down">Узнать подробнее</Button>
			<Button appearance="form" arrow="none">Узнать подробнее</Button>
		</>
  );
}
