import React from "react";
import Fade from "react-reveal/Fade";
import pic from ".././assets/imgs/pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Container, Col, Image } from "react-bootstrap";

const About = () => {
	return (
		<Container className="py-5">
			<div className="about-content d-sm-block d-lg-flex flex-lg-wrap">
				<Col className="col-lg-6 col-sm-12">
					<Fade bottom>
						<h1 className="heading mb-5">
							<Fade bottom cascade>
								About Me
							</Fade>
						</h1>
					</Fade>
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
							never giving up on any difficult task. I also consider myself a
							team player, able to collaborate and help others. I'm dedicated,
							hard-worker, highly organized and able to work under pressure.
						</p>
						<p>
							I love studying and I’m open to learn when is need it. I studied
							Computer Sciences in (Universidad de las Ciencias Informaticas)
							located in Havana, Cuba from (2003 - 2008).For more information
							about my professional career, please reference the provided links
							below:
						</p>
						<div>
							<a href="https://github.com/ystamaritq" target="_blank">
								<FontAwesomeIcon
									icon={faGithub}
									style={{ color: "#5E3719", margin: "10px", fontSize: "30px" }}
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/yadiratamarit/"
								target="_blank"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									style={{ color: "#5E3719", margin: "10px", fontSize: "30px" }}
								/>
							</a>
							<a href="https://www.facebook.com/yadira.tamarit" target="_blank">
								<FontAwesomeIcon
									icon={faFacebook}
									style={{
										color: "#5E3719",
										margin: "10px",
										fontSize: "30px",
									}}
								/>
							</a>
							<a
								href="https://drive.google.com/file/d/1WcYvlFhNcF9DI-MEwoAOi8kSBUl4Abqt/view?usp=sharing"
								target="_blank"
							>
								<FontAwesomeIcon
									icon={faFilePdf}
									style={{
										color: "#5E3719",
										margin: "10px",
										fontSize: "30px",
									}}
								/>
							</a>
						</div>
					</Fade>
				</Col>
				<Col className="about col-lg-6 col-sm-12 pt-5">
					<Image src={pic} alt="me" className="pt-5" />
				</Col>
			</div>
		</Container>
	);
};

export default About;
