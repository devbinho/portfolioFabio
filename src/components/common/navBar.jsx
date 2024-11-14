import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active, darkMode, toggleDarkMode } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">Sobre</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projetos</Link>
							</li>
							{/* <li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles">Artigos</Link>
							</li> */}
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contato</Link>
							</li>
						</ul>
					</div>
				</nav>
				<button onClick={toggleDarkMode} className="dark-mode-switch">
					<input type="checkbox" id="theme-toggle" className="checkbox" checked={darkMode} onChange={toggleDarkMode} />
					<label htmlFor="theme-toggle" className="label">
						<span className="icon-moon">🌙</span>
						<span className="icon-sun">☀️</span>
						<div className="ball"></div>
					</label>
				</button>
			</div>

		</React.Fragment>
	);
};

export default NavBar;
