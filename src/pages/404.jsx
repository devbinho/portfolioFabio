import React, { useEffect,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";

import INFO from "../data/user";

import "./styles/404.css";

const Notfound = (props) => {
		// Estado para armazenar o tema atual
		const {darkMode, toggleDarkMode} = props 
	
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className={darkMode ? 'dark-theme' : 'light-theme'}>
			<div className="not-found page-content">
			<NavBar active="home" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
				<div className="content-wrapper">
					<div className="notfound-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="notfound-container">
						<div className="notfound-message">
							<div className="notfound-title">
								Oops! <FontAwesomeIcon icon={faFaceSadTear} />
							</div>
							<div className="not-found-message">
								We can't seem to find the page you're looking
								for.
								<br />
								The requested URL "{window.location.href}" was
								not found on this server.
							</div>
							<a href="/" className="not-found-link">
								Go back to the home page
							</a>
						</div>
					</div>
				</div>
			</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
