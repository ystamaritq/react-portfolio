import React from "react";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const skillsData = [
	{ name: "html", color: "#00a896" },
	{ name: "css", color: "#457b9d" },
	{ name: "react", color: "#d90429" },
	{ name: "node", color: "#6d6875" },
	{ name: "express", color: "#f77f00" },
	{ name: "jquery", color: "#003049" },
	{ name: "apis", color: "#fca311" },
	{ name: "mongodb", color: "#14213d" },
	{ name: "postgres", color: "#432818" },
	{ name: "mysql", color: "#83944C" },
	{ name: "testing", color: "#4361ee" },
	{ name: "bootstrap", color: "#e0b1cb" },
	{ name: "pure", color: "#3e1f47" },
	{ name: "ui/ux", color: "#333533" },
	{ name: "materialize", color: "#7f7f7f" },
	{ name: "git", color: "#5e503f" },
	{ name: "graphql", color: "#7fb800" },
	{ name: "antd", color: "#abc4ff" },
];

const Skills = () => {
	return (
		<Container className="skills">
			<Fade bottom>
				<h1 className="heading mb-5">
					<Fade bottom cascade>
						Skills
					</Fade>
				</h1>
			</Fade>
			<Fade bottom>
				<div className="d-flex align-content-start flex-wrap">
					{skillsData.map((skill, index) => (
						<span
							key={index}
							style={{
								borderRadius: "12px",
								background: skill.color,
								padding: "12px",
								width: "100px",
								marginRight: "10px",
								height: "50px",
								marginBottom: "10px",
								textAlign: "center",
								color: "white",
							}}
						>
							{skill.name}
						</span>
					))}

					{/* <span
						style={{
							borderRadius: "20px",
							background: "#73AD21",
							padding: "2px",
							width: "100px",
							marginRight: "10px",
							height: "50px",
						}}
					>
						Html
					</span>
					<span
						style={{
							borderRadius: "20px",
							background: "#73AD21",
							padding: "2px",
							width: "100px",
							marginRight: "10px",
							height: "50px",
						}}
					>
						Html
					</span>
					<span
						style={{
							borderRadius: "20px",
							background: "#73AD21",
							padding: "2px",
							width: "100px",
							marginRight: "10px",
							height: "50px",
						}}
					>
						Html
					</span>
					<span
						style={{
							borderRadius: "20px",
							background: "#73AD21",
							padding: "2px",
							width: "100px",
							marginRight: "10px",
							height: "50px",
						}}
					>
						Html
					</span>
					<span
						style={{
							borderRadius: "20px",
							background: "#73AD21",
							padding: "2px",
							width: "100px",
							marginRight: "10px",
							height: "50px",
						}}
					>
						Html
					</span>
					<span
						style={{
							borderRadius: "20px",
							background: "#73AD21",
							padding: "2px",
							width: "100px",
							marginRight: "10px",
							height: "50px",
						}}
					>
						Html
					</span>
					<span
						style={{
							borderRadius: "20px",
							background: "#73AD21",
							padding: "2px",
							width: "100px",
							marginRight: "10px",
							height: "50px",
						}}
					>
						Html
					</span>
					<span
						style={{
							borderRadius: "20px",
							background: "#73AD21",
							padding: "2px",
							width: "100px",
							marginRight: "10px",
							height: "50px",
						}}
					>
						Html
					</span> */}
				</div>
			</Fade>
		</Container>
	);
};

export default Skills;
