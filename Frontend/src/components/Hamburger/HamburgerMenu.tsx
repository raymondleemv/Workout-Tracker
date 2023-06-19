import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

export default function Hamburger() {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const button = e.target as HTMLButtonElement;
		button.classList.toggle('close');
	};
	return (
		<nav className="hamburger-menu">
			<button
				className="hamburger-menu__button flex-center flex-column"
				onClick={(e) => handleClick(e)}
			>
				<div className="hamburger-menu__stripes"></div>
				<div className="hamburger-menu__stripes"></div>
				<div className="hamburger-menu__stripes"></div>
			</button>
			<ul className="hamburger-menu__list">
				<li>
					<Link to="/account/exercises">Exercises</Link>
				</li>
				<li>
					<Link to="/account/workouts">Workouts</Link>
				</li>
			</ul>
		</nav>
	);
}
