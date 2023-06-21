import { Link, useNavigate } from 'react-router-dom';
import './HamburgerMenu.css';
import { logout } from '../../utils/auth';

export default function HamburgerMenu() {
	const navigate = useNavigate();

	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const button = e.target as HTMLButtonElement;
		button.classList.toggle('close');
	};

	const handleLinkClick = () => {
		const hamburgerMenuButton: HTMLButtonElement = document.querySelector(
			'.hamburger-menu__button'
		)!;
		hamburgerMenuButton.classList.remove('close');
	};

	const handleLogoutClicked = async () => {
		await logout();
		navigate('/');
	};

	return (
		<nav className="hamburger-menu">
			<button
				className="hamburger-menu__button flex-center flex-column"
				onClick={(e) => handleButtonClick(e)}
			>
				<div className="hamburger-menu__stripes"></div>
				<div className="hamburger-menu__stripes"></div>
				<div className="hamburger-menu__stripes"></div>
			</button>
			<ul className="hamburger-menu__list">
				<li>
					<Link to="/account/exercises" onClick={handleLinkClick}>
						Exercises
					</Link>
				</li>
				<li>
					<Link to="/account/workouts" onClick={handleLinkClick}>
						Workouts
					</Link>
				</li>
				<li>
					<button onClick={handleLogoutClicked}>Log out</button>
				</li>
			</ul>
		</nav>
	);
}
