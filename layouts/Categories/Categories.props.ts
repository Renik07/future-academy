import { DetailedHTMLProps, HTMLAttributes } from "react";
import { MenuItem } from "../../intefaces/menu.interface";

export interface CategoriesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	menu: MenuItem[],
}