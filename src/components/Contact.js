import React from "react";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";

const Contact = () => {
	const contactData = [
		{
			name: "Github",
			url: "https://github.com/ystamaritq",
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/yadiratamarit/",
		},

		{
			name: "Email",
			url: "mailto:ystamaritq@gmail.com",
		},
	];

	return (
		<Container className="py-5">
			<h1>
				<Fade bottom cascade>
					{" "}
					Contact
				</Fade>
			</h1>
			<Fade bottom>
				<div>
					<h1>
						Let’s create your next<br></br>
						<span className="amazing-color ml-5">experience together</span>
					</h1>
					<h4 className="rainbow-text">(404) 883-9494</h4>
				</div>
				<ul>
					{contactData.map((link, index) => (
						<li key={index}>
							<a target="_blank" rel="noopener noreferrer" href={link.url}>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</Fade>
		</Container>
	);
};

export default Contact;
