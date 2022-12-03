import { HTMLAttributes, DetailedHTMLProps } from 'react';
import circle from './icons/circle.svg';
import cross from './icons/cross.svg';
import triangle from './icons/triangle.svg';
import vector from './icons/vector.svg';

export const icons = {
	circle,
	cross,
	triangle,
	vector
};

export type IconName = keyof typeof icons;

export interface AnimatedIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	icon: IconName;
	rotate?: "right" | "left";
	speed?: "1" | "2" | "3"

}