import { PromoProps } from "./Promo.props";
import styles from './Promo.module.css';
import { MouseEvent, useState } from "react";
import { AnimatedIcon } from "../../components";

export const Promo = ({ ...props }: PromoProps):JSX.Element => {
	const [isPlay, setIsPlay] = useState<boolean>(false);

	const playVideo = (e: MouseEvent<EventTarget & HTMLVideoElement>) => {
		setIsPlay(!isPlay);
		isPlay ? e.currentTarget.play() : e.currentTarget.pause();
	};
	return (
		<section 
			className={styles.promo} 
			{...props}
		>
			<div className={styles.container}>
				<div className={styles.content}>
					<video 
						poster="./promo-poster.jpg" 
						className={styles.video} 
						autoPlay 
						onClick={e => playVideo(e)}
					>
						<source src="./promo.mp4" />
						Sorry, your browser does not support HTML5 video.
					</video>
					<AnimatedIcon className={styles.triangle} icon="triangle" rotate="right" speed="3" />
					<AnimatedIcon className={styles.cross} icon="cross" rotate="left" />
				</div>
				<h2 className={styles.title}>Актуальные знания от признанных экспертов рынка для новичков и практикующих специалистов.</h2>
				<div className={styles.adv}>
					<div className={styles.column1}>
						<div className={styles.num}>600</div>
						<div className={styles.text}>Курсов</div>
					</div>
					<div className={styles.column2}>
						<div className={styles.num}>82</div>
						<div className={styles.text}>Ведущих преподавателей</div>
					</div>
					<div className={styles.column3}>
						<div className={styles.num}>14 795</div>
						<div className={styles.text}>Выпускников</div>
					</div>

				</div>
			</div>
		</section>
	);
};