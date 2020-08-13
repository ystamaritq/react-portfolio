import React from "react";
import Fade from "react-reveal/Fade";
import { Col } from "react-bootstrap";

const Project = (props) => {
	{
		return (
			<Fade bottom>
				<Col className="project">
					<a href={props.url}>
						<img src={props.imageSrc}></img>
					</a>
					<h1>{props.title}</h1>
					<span>{props.service}</span>
				</Col>
			</Fade>
		);
	}
};

export default Project;
