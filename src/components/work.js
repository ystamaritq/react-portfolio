import React from "react";
import Project from "./project";
import Fade from "react-reveal/Fade";
import data from "../projectdata";
import { Container, Row, Col } from "react-bootstrap";

const Work = () => {
	{
		return (
			<Container>
				<h1 className="heading">
					<Fade bottom cascade>
						Work.
					</Fade>
				</h1>
				<Row>
					{data.map((p) => (
						<Project
							key={p.id}
							title={p.title}
							service={p.service}
							imageSrc={p.imageSrc}
							url={p.url}
						></Project>
					))}
				</Row>
			</Container>
		);
	}
};

export default Work;
