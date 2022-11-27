import { AnimatedIconProps, icons } from './AnimatedIcon.props';
import styles from './AnimatedIcon.module.css';
import cn from 'classnames';

export const AnimatedIcon = ({ rotate, speed, icon, className, ...props }:AnimatedIconProps): JSX.Element => {
	const IconCopm = icons[icon];

	return (
		<div 
			className={cn(styles.icon, className, {
				[styles.right]: rotate == 'right',
				[styles.left]: rotate == 'left',
				[styles.speedx1]: speed == '1',
				[styles.speedx2]: speed == '2',
				[styles.speedx3]: speed == '3',
			})}
			{...props}
		>
			<IconCopm />
		</div>
	);
};