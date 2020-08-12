import React from "react";
import Fade from "react-reveal/Fade";

const Project = (props) => {
	{
		return (
			<Fade bottom>
				<div className="project">
					<a href={props.url}>
						<img src={props.imageSrc}></img>
					</a>
					<h1>{props.title}</h1>
					<span>{props.service}</span>
				</div>
			</Fade>
		);
	}
};

export default Project;
