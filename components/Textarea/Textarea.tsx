import { TextareaProps } from "./Textarea.props";
import styles from './Textarea.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from "react";

export const Textarea = forwardRef(({ type, className, error, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>):JSX.Element => {
	return (
		<div className={styles.textareaWrapper}>
			<textarea className={cn(styles.textarea, className, {
					[styles.error]: error,
					[styles.dark]: type == "dark",
					[styles.light]: type == "light",
				})} 
				{...props}
				ref={ref}
			>
			</textarea>
			{ error && <span className={styles.errorMessage}>{ error.message }</span> }
		</div>
	);
});

Textarea.displayName = "textarea";