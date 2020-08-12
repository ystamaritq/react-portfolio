import React from "react";
import Project from "./project";
import Fade from "react-reveal/Fade";
import data from "../projectdata";

const Work = () => {
	{
		return (
			<div>
				<h1 className="heading">
					<Fade bottom cascade>
						Work.
					</Fade>
				</h1>
				<div className="work-content">
					{data.map((p) => (
						<Project
							key={p.id}
							title={p.title}
							service={p.service}
							imageSrc={p.imageSrc}
							url={p.url}
						></Project>
					))}
				</div>
			</div>
		);
	}
};

export default Work;
