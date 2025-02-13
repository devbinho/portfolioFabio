import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import "./app.css";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	// Carrega o tema do localStorage quando o componente é montado
	useEffect(() => {
		const savedTheme = localStorage.getItem('darkMode');
		if (savedTheme === 'true') {
			setDarkMode(true);
		}
	}, []);

	// Alterna o tema e salva no localStorage
	const toggleDarkMode = () => {
		setDarkMode((prevMode) => {
			localStorage.setItem('darkMode', !prevMode);
			return !prevMode;
		});
	};


	return (		
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
				<Route path="/about" element={<About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
				<Route path="/projects" element={<Projects darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="/contact" element={<Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
				<Route path="*" element={<Notfound  darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} />
			</Routes>
		</div>
	);
}

export default App;
