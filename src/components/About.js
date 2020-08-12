import React from "react";
import Fade from "react-reveal/Fade";
import pic from "../components/pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
	return (
		<div className="about">
			<div className="about-content">
				<h1>
					<Fade bottom cascade>
						About Me
					</Fade>
				</h1>
				<Fade bottom>
					<p>
						My name is Yadira Tamarit. I’m originally from Cuba. I’m a mom of
						two wonderful boys.I have a Bachelor Degree in Computer Science. I
						am currently enrolled in a UT Coding Bootcamp(The University of
						Texas at Austin) at Full Stack Developer course in order to learn
						all new technologies and continue growing my career.
					</p>
					<p>
						I love mathematics for that reason I choose computer science as a
						career. Professionally, I have always liked to challenge myself by
						never giving up on any difficult task. I also consider myself a team
						player, able to collaborate and help others. I'm dedicated,
						hard-worker, highly organized and able to work under pressure.
					</p>
					<p>
						I love studying and I’m open to learn when is need it. I studied
						Computer Sciences in (Universidad de las Ciencias Informaticas)
						located in Havana, Cuba from (2003 - 2008).For more information
						about my professional career, please reference the provided links
						below:
						<a href="https://github.com/ystamaritq">
							<FontAwesomeIcon
								icon={faGithub}
								size="lg"
								s
								style={{ color: "#5E3719", margin: "5px" }}
							/>
						</a>
						<a href="https://www.linkedin.com/in/yadiratamarit/">
							<FontAwesomeIcon
								icon={faLinkedin}
								size="lg"
								style={{ color: "#5E3719", margin: "5px" }}
							/>
						</a>
						<a href="https://www.facebook.com/yadira.tamarit">
							<FontAwesomeIcon
								icon={faFacebook}
								size="lg"
								style={{
									color: "#5E3719",
									margin: "5px",
								}}
							/>
						</a>
					</p>
				</Fade>
			</div>

			<img src={pic} alt="me" />
		</div>
	);
};

export default About;
