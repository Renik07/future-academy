import { FieldError } from 'react-hook-form';
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	error?: FieldError;
	isEditable?: boolean,
	rating: number,
	setRating?: (rating: number) => void
}