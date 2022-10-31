import { InputProps } from "./Input.props";
import styles from './Input.module.css';
import cn from 'classnames';

export const Input = ({ type, className, ...props }: InputProps):JSX.Element => {
	return (
		<input className={cn(styles.input, className, {
			[styles.dark]: type == "dark",
			[styles.light]: type == "light",
		})} {...props} />
	);
};