import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import { Rating } from "../Rating/Rating";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps):JSX.Element => {
	const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>();

	const onSubmit = (data: IReviewForm) => {
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div 
				className={styles.reviewForm}
				{...props}
			>
				<Input 
					className={styles.name} 
					{...register("name", { required: {value: true, message: "Заполните имя"} })} 
					error={errors.name}
					placeholder="Имя" 
					type="light" />
				<Input 
					className={styles.title} 
					{...register("title", { required: {value: true, message: "Заполните заголовок отзыва"} })} 
					error={errors.title}
					placeholder="Заголовок отзыва" 
					type="light" />
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller 
						control={control}
						name="rating"
						rules={{ required: {value: true, message: "Оцените курс"}}}
						render={({ field }) => (
							<Rating 
								isEditable 
								setRating={field.onChange} 
								rating={field.value} 
								ref={field.ref}
								error={errors.rating}
							/>
						)}
					/>
				</div>
				<div className={styles.text}>
					<Textarea 
						{...register("description", { required: {value: true, message: "Заполните текст отзыва"} })} 
						error={errors.description}
						placeholder="Текст отзыва" 
						type="light" />
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
		</form>
	);
};