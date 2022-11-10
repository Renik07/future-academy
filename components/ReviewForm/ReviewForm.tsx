import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import cn from 'classnames';
import { Rating } from "../Rating/Rating";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps):JSX.Element => {
	return (
		<>
			<div 
				className={styles.reviewForm}
				{...props}
			>
				<Input className={styles.name} placeholder="Имя" type="light" />
				<Input className={styles.title} placeholder="Заголовок отзыва" type="light" />
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Rating rating={0} />
				</div>
				<div className={styles.text}>
					<Textarea placeholder="Текст отзыва" type="light" />
				</div>
				<div className={styles.submit}>
					<Button className={styles.button} appearance="primary">Отправить</Button>
					<span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>
			<div className={styles.success}>
				<h4>Спасибо за отзыв.</h4>
				<p>Отзыв будет опубликован сразу же после модерации.</p>
				<CloseIcon className={styles.close} />
			</div>
		</>
	);
};