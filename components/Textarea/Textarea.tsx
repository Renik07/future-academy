import { TextareaProps } from "./Textarea.props";
import styles from './Textarea.module.css';
import cn from 'classnames';

export const Textarea = ({ type, className, ...props }: TextareaProps):JSX.Element => {
	return (
		<textarea className={cn(styles.textarea, className, {
			[styles.dark]: type == "dark",
			[styles.light]: type == "light",
		})} {...props}>

		</textarea>
	);
};