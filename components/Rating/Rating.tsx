import { ForwardedRef, forwardRef, KeyboardEvent, useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import StarIcon from './star.svg';
import styles from './Rating.module.css';
import cn from 'classnames';

export const Rating = forwardRef(({isEditable = false, rating, setRating, error, ...props}:RatingProps, ref: ForwardedRef<HTMLSpanElement>):JSX.Element => {

	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
		<span className={styles.ratingWrapper} {...props} ref={ref}>
			{ ratingArray.map((r, i) => <span key={i}> {r} </span>) }
			{ error && <span className={styles.errorMessage}>{ error.message }</span> }
		</span>
	);
});

Rating.displayName = "rating";