import { useRouter } from "next/router";
import { Htag } from "../components";
import { withLayout } from "../layouts/Layout/Layout";

const Search = (): JSX.Element => {
	const router = useRouter();
	
	return (
		<>
			<Htag tag="h1">Результаты поиска по запросу: {router.query.value}</Htag>
			<Htag tag="h2">Результаты не найдены.</Htag>

		</>
	);
};

export default withLayout(Search);