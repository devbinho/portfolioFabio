import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experiência"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./toolssoftware_logo.jpeg"
								alt="toolssoftware_logo"
								className="work-image"
							/>
							<div className="work-title">Tools Software</div>
							<div className="work-subtitle">
								Desenvolvedor de software
							</div>
							<div className="work-duration">Jan de 2024 - Out de 2024</div>
						</div>

						<div className="work">
							<img
								src="./arphoenixoficial_logo.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">A.R.Phoenix</div>
							<div className="work-subtitle">
								Desenvolvedor Front-End
							</div>
							<div className="work-duration">Out de 2021 - Set de 2023</div>
						</div>

						<div className="work">
							<img
								src="./1730739126191.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Valec Engenharia</div>
							<div className="work-subtitle">
								Estagiário de TI
							</div>
							<div className="work-duration">ago de 2018 - fev de 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
