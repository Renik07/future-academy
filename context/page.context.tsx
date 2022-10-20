import { useState } from 'react';
import { TopLevelCategory } from '../intefaces/page.interface';
import { createContext, PropsWithChildren } from "react";
import { MenuItem } from "../intefaces/menu.interface";

export interface IPageContext {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	setMenu?: (newMenu: MenuItem[]) => void;
}

export const PageContext = createContext<IPageContext>({menu: [], firstCategory: TopLevelCategory.Courses});

export const PageContextProvider = ({menu, firstCategory, children}: PropsWithChildren<IPageContext>): JSX.Element => {
	const [menuState, setMenuState] = useState<MenuItem[]>(menu);
	const setMenu = (newMenu: MenuItem[]) => setMenuState(newMenu);

	return (
		<PageContext.Provider value={{menu: menuState, firstCategory, setMenu}}>
			{ children }
		</PageContext.Provider>
	);
};