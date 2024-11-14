import React from "react";

function artigo_1() {
	return {
		date: "7 de maio de 2023",
		title: "Os Benefícios da Computação em Nuvem",
		description:
			"A computação em nuvem oferece uma série de benefícios, incluindo economia de custos e maior flexibilidade. Descubra por que mais empresas estão migrando para a nuvem.",
		keywords: [
			"Os Benefícios da Computação em Nuvem",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Conteúdo do artigo 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="aleatório"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function artigo_2() {
	return {
		date: "7 de maio de 2023",
		title: "Inteligência Artificial na Saúde",
		description:
			"A IA está transformando a indústria da saúde, desde a melhoria nos resultados dos pacientes até a otimização das operações. Descubra as últimas aplicações dessa tecnologia revolucionária.",
		style: ``,
		keywords: [
			"Inteligência Artificial na Saúde",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Conteúdo do artigo 2</h1>
			</React.Fragment>
		),
	};
}

const meusArtigos = [artigo_1, artigo_2];

export default meusArtigos;
