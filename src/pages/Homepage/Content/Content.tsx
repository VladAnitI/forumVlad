import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Content.module.css';

function Content() {
	return (
		<div className={cn(styles['content'])}>
			<div className={cn(styles['z'], styles['z1'])}>Forum bla bla bla</div>
			<div className={cn(styles['z'], styles['z2'])}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
				soluta iure, expedita porro, placeat a veniam magnam incidunt, ipsa
				nobis odio recusandae enim.
			</div>
			<div className={cn(styles['buttonBlock'])}>
				<div></div>
				<Link to="/signup" className={cn(styles['buttonLogIn'])}>
					Join Now
				</Link>
				<div></div>
			</div>
		</div>
	);
}

export default Content;
