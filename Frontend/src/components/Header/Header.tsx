import HamburgerMenu from '../Hamburger/HamburgerMenu';
import './Header.css';

type HeaderProps = {
	showHamburger: boolean;
};

function Header(props: HeaderProps) {
	return (
		<header className="header">
			<h1>Workout Tracker</h1>
			{props.showHamburger && <HamburgerMenu />}
		</header>
	);
}

export default Header;
