import { KeyboardEvent, useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import StarIcon from './star.svg';
import styles from './Rating.module.css';
import cn from 'classnames';

export const Rating = ({isEditable = false, rating, setRating, ...props}:RatingProps):JSX.Element => {

	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i:number) => {
			return (
				<span key={i}
					className={cn(styles.star, {
						[styles.filled] : i < currentRating,
						[styles.editable] : isEditable
					})}
					onMouseEnter = {() => changeDisplay(i + 1)}
					onMouseLeave = {() => changeDisplay(rating)}
					onClick = {() => onclick(i + 1)}
				>
					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(event: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(event, i + 1)}
					/>
				</span>
			);
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const onclick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};

	const handleSpace = (event: KeyboardEvent<SVGAElement>, i: number) => {
		if (event.code != "Space" || !setRating) {
			return;
		}
		setRating(i);
	};


	return (
		<div {...props}>
			{ ratingArray.map((r, i) => <span key={i}> {r} </span>) }
		</div>
	);
};