import { InputProps } from "./Input.props";
import styles from './Input.module.css';
import cn from 'classnames';
import React, { ForwardedRef, forwardRef } from "react";

export const Input = forwardRef(({ type, className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>):JSX.Element => {
	return (
		<div className={styles.inputWrapper}>
			<input className={cn(styles.input, className, {
					[styles.error]: error,
					[styles.dark]: type == "dark",
					[styles.light]: type == "light",
				})} 
				{...props} 
				ref={ref}
			/>
			{ error && <span className={styles.errorMessage}>{ error.message }</span> }
		</div>
	);
});

Input.displayName = 'Input';