import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import { Container, Row, Col } from "react-bootstrap";

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
				<div className="contact-content">
					<h1>
						Let’s create your next<br></br>
						<span className="amazing-color ml-5">experience together</span>
					</h1>
				</div>
			</Fade>

			<Row className="footer mb-0">
				<Col className="col-lg-6 col-sm-12">
					<span className="text-custom mr-1">developed with love by</span>
					<a href="mailto:ystamaritq@gmail.com">Yadira Tamarit</a>
				</Col>
				<Col className="col-lg-6 col-sm-12">
					<ul>
						{data.social.map((link, index) => (
							<li key={index}>
								<a target="_blank" rel="noopener noreferrer" href={link.url}>
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
