import { useContext } from "react";
import { PageContext } from "../../context/page.context";

export const Menu = (): JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext(PageContext);

	return(
		<>
			{ menu.map(item => <div key={item._id.secondCategory}>{item._id.secondCategory}</div>) }
		</>
	);
};