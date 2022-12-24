import { SearchProps } from "./Search.props";
import styles from './Search.module.css';
import cn from 'classnames';
import { Input } from "../Input/Input";
import { useState } from "react";
import SearchIcon from './icon-search.svg';
import { Button } from "../Button/Button";
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [value, setValue] = useState<string>("");
	const router = useRouter();

	const handleSearch = () => {
		router.push({
			pathname: '/search',
			query: {value: value}
		});
	};

	return (
		<div
			className={cn(styles.search, className)}
			{...props}
		>
			<Input 
				className={styles.input}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				type="light" 
				placeholder="поиск..." />
			<Button
				onClick={handleSearch} 
				className={styles.button} 
				appearance='primary'>
				<SearchIcon />
			</Button>
		</div>
	);
};