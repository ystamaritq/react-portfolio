import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";

const Contact = () => {
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
				</div>
				<ul>
					{data.social.map((link, index) => (
						<li key={index}>
							<a target="_blank" rel="noopener noreferrer" href={link.url}>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</Fade>

			<div className="footer text-center">
				<span className="mr-1 text-muted">developed with love by</span>
				<OverlayTrigger
					placement="bottom"
					overlay={<Tooltip id="tooltip-email-footer">Contact Me</Tooltip>}
				>
					<a href="mailto:ystamaritq@gmail.com" className="text-muted">
						Yadira Tamarit
					</a>
				</OverlayTrigger>
			</div>
		</Container>
	);
};

export default Contact;
