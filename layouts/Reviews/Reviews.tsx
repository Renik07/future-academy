import { ReviewsProps } from "./Reviews.props";
import styles from './Reviews.module.css';
import StarIcon from './images/star.svg';
import { useContext } from "react";
import { PageContext } from "../../context/page.context";

export const Reviews = ({ ...props }: ReviewsProps):JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext(PageContext);
/* 	console.log(menu);
	console.log(firstCategory); */
	/* console.log(product); */
	
	/* const { name, title, description, rating, createdAt } = review; */
	return (
		<section 
			className={styles.reviews} 
			{...props}
		>
			<h2 className={styles.title}>Отзывы наших студентов</h2>
			<div className={styles.content}>
				<div className={styles.review}>
					<div className={styles.head}>
						<div className={styles.avatar}></div>
						<div className={styles.name}>dasd</div>
						<div className={styles.subtitle}>Студент курса «WEB-разработчик»</div>
					</div>
					<div className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales, scelerisque eros non, ultrices magna. 
					</div>
					<div className={styles.rating}>
						<StarIcon />
						<span>4.87 / 5</span>
					</div>
				</div>
				<div className={styles.review}>
					<div className={styles.head}>
						<div className={styles.avatar}></div>
						<div className={styles.name}>dasd</div>
						<div className={styles.subtitle}>Студент курса «WEB-разработчик»</div>
					</div>
					<div className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales, scelerisque eros non, ultrices magna. 
					</div>
					<div className={styles.rating}>
						<StarIcon />
						<span>4.87 / 5</span>
					</div>
				</div>
				<div className={styles.review}>
					<div className={styles.head}>
						<div className={styles.avatar}></div>
						<div className={styles.name}>dasd</div>
						<div className={styles.subtitle}>Студент курса «WEB-разработчик»</div>
					</div>
					<div className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales, scelerisque eros non, ultrices magna. 
					</div>
					<div className={styles.rating}>
						<StarIcon />
						<span>4.87 / 5</span>
					</div>
				</div>
				<div className={styles.review}>
					<div className={styles.head}>
						<div className={styles.avatar}></div>
						<div className={styles.name}>dasd</div>
						<div className={styles.subtitle}>Студент курса «WEB-разработчик»</div>
					</div>
					<div className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales, scelerisque eros non, ultrices magna. 
					</div>
					<div className={styles.rating}>
						<StarIcon />
						<span>4.87 / 5</span>
					</div>
				</div>
				<div className={styles.review}>
					<div className={styles.head}>
						<div className={styles.avatar}></div>
						<div className={styles.name}>dasd</div>
						<div className={styles.subtitle}>Студент курса «WEB-разработчик»</div>
					</div>
					<div className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales, scelerisque eros non, ultrices magna. 
					</div>
					<div className={styles.rating}>
						<StarIcon />
						<span>4.87 / 5</span>
					</div>
				</div>
				<div className={styles.review}>
					<div className={styles.head}>
						<div className={styles.avatar}></div>
						<div className={styles.name}>dasd</div>
						<div className={styles.subtitle}>Студент курса «WEB-разработчик»</div>
					</div>
					<div className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales, scelerisque eros non, ultrices magna. 
					</div>
					<div className={styles.rating}>
						<StarIcon />
						<span>4.87 / 5</span>
					</div>
				</div>
				<div className={styles.review}>
					<div className={styles.head}>
						<div className={styles.avatar}></div>
						<div className={styles.name}>dasd</div>
						<div className={styles.subtitle}>Студент курса «WEB-разработчик»</div>
					</div>
					<div className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales, scelerisque eros non, ultrices magna. 
					</div>
					<div className={styles.rating}>
						<StarIcon />
						<span>4.87 / 5</span>
					</div>
				</div>
				<div className={styles.review}>
					<div className={styles.head}>
						<div className={styles.avatar}></div>
						<div className={styles.name}>dasd</div>
						<div className={styles.subtitle}>Студент курса «WEB-разработчик»</div>
					</div>
					<div className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales, scelerisque eros non, ultrices magna. 
					</div>
					<div className={styles.rating}>
						<StarIcon />
						<span>4.87 / 5</span>
					</div>
				</div>
				<div className={styles.review}>
					<div className={styles.head}>
						<div className={styles.avatar}></div>
						<div className={styles.name}>dasd</div>
						<div className={styles.subtitle}>Студент курса «WEB-разработчик»</div>
					</div>
					<div className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac habitasse platea dictumst. In ut dui sodales, scelerisque eros non, ultrices magna. 
					</div>
					<div className={styles.rating}>
						<StarIcon />
						<span>4.87 / 5</span>
					</div>
				</div>
			</div>
		</section>
	);
};