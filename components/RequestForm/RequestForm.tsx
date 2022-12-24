import { RequestFormProps } from "./RequestForm.props";
import styles from "./RequestForm.module.css";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import { IRequestForm } from "./RequestForm.interface";
import { useState } from "react";

export const RequestForm = ({ className, ...props}: RequestFormProps): JSX.Element => {
	const { register, handleSubmit, formState: {errors}, reset } = useForm<IRequestForm>();
	const [isSuccessSentForm, setIsSuccessSentForm] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>();

	const onSubmit = async (data: IRequestForm) => {
		try {
			if (data) {
				setIsSuccessSentForm(true);
				reset();
			} else {
				setErrorMessage('Что-то пошло не так');
			}
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			}
		}
	};
	return(
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div 
				className={styles.requestForm} 
				{...props}
			>
				<Input className={styles.name} error={errors.name} {...register("name", {required: {value: true, message: "Заполните имя"}})} placeholder="Ваше имя" type="dark" />
				<Input className={styles.tel} error={errors.tel} {...register("tel", {required: {value: true, message: "Заполните номер телефона"}, pattern: {
            value: /^\d+$/,
            message: 'Введите цифры',
        }})} placeholder="Ваш телефон" type="dark" />
				<Input className={styles.email} error={errors.email} 
					{...register("email", {required: {value: true, message: "Заполните эл. почту"}, pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Введите корректный e-mail',
        },})} 
					placeholder="Ваш e-mail" type="dark" />
				<p className={styles.terms}>Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформой</p>
				<Button className={styles.button} appearance="form">Отправить</Button>
				{ isSuccessSentForm && <div className={styles.success}>Спасибо! Ваша заявка отправлена. Мы с вами свяжемся в самое ближайшее время</div> }
			</div>
		</form>
	);
};