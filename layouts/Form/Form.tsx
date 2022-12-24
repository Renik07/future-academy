import { FormProps } from "./Form.props";
import styles from "./Form.module.css";
import { RequestForm } from "../../components";
import OwlImage from "./owl.svg";

export const Form = (): JSX.Element => {
	return(
		<section className={styles.form}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.speech}>
						<div className={styles.speechTitle}>Помочь с выбором?</div>
						<p className={styles.speechLuck}>Оставьте заявку и наши специалисты свяжутся с вами, ответят на все вопросы и подберут подходящий вариант обучения.</p>
						<OwlImage className={styles.owl} />
					</div>
					<div className={styles.requestForm}>
						<RequestForm />
					</div>
				</div>
			</div>
		</section>
	);
};