import React from "react";
import Fade from "react-reveal/Fade";
import { Col, Card } from "react-bootstrap";

const Project = (props) => {
	return (
		<Col className="col-sm-12 col-md-6 col-lg-6 mb-3 p-4 my-3">
			<Fade bottom>
				<Card className="shadow-lg card-hover">
					<Card.Link href={props.url} target="_blank">
						<Card.Img variant="top" src={props.imageSrc} />
					</Card.Link>
					<Card.Body>
						<Card.Title className="project-title-card">
							{props.title}
						</Card.Title>
						<Card.Text className="card-text-style mt-1 m-auto ">
							{props.description}
						</Card.Text>
					</Card.Body>
					<Card.Body>
						<Card.Link href={props.url} target="_blank" className="proj-link">
							{props.service}
						</Card.Link>
						<Card.Link
							href={props.urldeploy}
							target="_blank"
							className="proj-link"
						>
							{props.deploy}
						</Card.Link>
						<Card.Text className="card-tech-style mt-2 m-auto">
							<hr />
							{props.tecnologies}
						</Card.Text>
					</Card.Body>
				</Card>
			</Fade>
		</Col>
	);
};

export default Project;
