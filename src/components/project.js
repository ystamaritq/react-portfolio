import React from "react";
import Fade from "react-reveal/Fade";
import { Col, Card } from "react-bootstrap";

const Project = (props) => {
	{
		return (
			<Col className="col-lg-6 col-md-6 col-sm-12 p-4 my-3">
				<Fade bottom>
					<Card style={{ width: "100%" }} className="shadow-lg">
						<Card.Img variant="top" src={props.imageSrc} />
						<Card.Body>
							<Card.Title>{props.title}</Card.Title>
						</Card.Body>
						<Card.Body>
							<Card.Link href={props.url} target="_blank">
								{props.service}
							</Card.Link>
						</Card.Body>
					</Card>
				</Fade>
			</Col>
		);
	}
};

export default Project;
