import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import { Container } from "react-bootstrap";

const Contact = () => {
	return (
		<Container className="py-5">
			<h1>
				<Fade bottom cascade>
					{" "}
					Contact.
				</Fade>
			</h1>
			<Fade bottom>
				<div className="contact-content">
					<h1>
						Let’s create your next<br></br>
						<span className="amazing-color">experience together</span>
					</h1>
					<a href={`mailto:${data.contactEmail}`} className="email">
						{data.contactEmail}
					</a>
					<ul>
						{data.social.map((link, index) => (
							<li key={index}>
								<a target="_blank" rel="noopener noreferrer" href={link.url}>
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</Fade>

			<span className="footer m-auto">
				developed with love by
				<a href="mailto:ystamaritq@gmail.com" className="ml-1">
					Yadira Tamarit
				</a>
			</span>
		</Container>
	);
};

export default Contact;
