import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import styles from './Error.module.css';

export function Error() {
	const navigate = useNavigate();

	return (
		<>
			<h2 className={cn(styles['error'])}>Error 404</h2>
			<span>
				Sorry, but this page not fing,{' '}
				<b
					className={cn(styles['clickMe'])}
					onClick={() => {
						navigate('/');
					}}
				>
					click me
				</b>{' '}
				to go to the main.
			</span>
		</>
	);
}
