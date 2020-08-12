import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

const About = () => {
	return (
		<div className="about">
			<div className="about-content">
				<h1>
					<Fade bottom cascade>
						About
					</Fade>
				</h1>
				<Fade bottom>
					<p>{data.abouttext}</p>
				</Fade>
			</div>
			{data.ShowAboutImage ? (
				<img src={data.aboutImage} alt="about iamge"></img>
			) : null}
		</div>
	);
};

export default About;
