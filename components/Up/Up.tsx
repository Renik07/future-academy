import { useScrollY } from '../../hooks/useScrollY';
import styles from './Up.module.css';
import UpIcon from './up.svg';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const Up = ():JSX.Element => {
	const y = useScrollY();
	const controls = useAnimation();

	useEffect(() => {
		controls.start({
			opacity: y / document.body.scrollHeight
		});
	}, [y, controls]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
	return (
		<motion.button 
			className={styles.up}
			animate={controls}
			initial={{ opacity: 0 }}
			onClick={scrollToTop}
		>
			<UpIcon />
		</motion.button>
	);
};