import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Header.module.css';

function Header() {
	return (
		<div className={cn(styles['main'])}>
			<header className={cn(styles['header'])}>
				<div className={cn(styles['left-bar'])}>
					<div className={cn(styles['logo'])}></div>
					<div className={cn(styles['heading'])}>
						<h1>Forum</h1>
					</div>
				</div>

				<div className={cn(styles['right-bar'])}>
					<Link to="/signup" className={cn(styles['joinNow'])}>
						Sign Up
					</Link>
					<Link to="/login" className={cn(styles['joinNow'])}>
						Login
					</Link>
				</div>
			</header>
		</div>
	);
}

export default Header;
