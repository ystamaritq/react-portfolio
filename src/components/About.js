import React from "react";
import Fade from "react-reveal/Fade";
import pic from ".././assets/imgs/pic.png";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Container, Col, Image } from "react-bootstrap";
import ContactLink from "./ContactLink";

const About = () => {
	const aboutData = [
		{
			name: "Github",
			url: "https://github.com/ystamaritq",
			icon: faGithub,
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/yadiratamarit/",
			icon: faLinkedin,
		},

		{
			name: "Resume",
			url:
				"https://drive.google.com/file/d/1oqKjDZpeLm11BEUKZXrX0imVPo9zN3Oi/view?usp=sharing",
			icon: faFilePdf,
		},
	];

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
							I’m originally from Cuba. I’m a mom of two wonderful boys. I have
							a Bachelor Degree in Computer Science. I am passionate about
							coding, solving problems and UI design. In order to further expand
							my coding expertise and learn new web technologies, I am currently
							enrolled in the Full Stack Developer Coding Bootcamp, at The
							University of Texas at Austin.
						</p>
						<p>
							I love mathematics for that reason I choose computer science as a
							career. Professionally, I have always liked to challenge myself by
							never giving up on any difficult task. I also consider myself a
							team player, able to collaborate and help others. I'm dedicated,
							hard-worker, highly organized and able to work under pressure.
						</p>
						<p>
							I’m open to learning as needed. I studied Computer Sciences in
							(Universidad de las Ciencias Informaticas) in Havana, Cuba from
							(2003 - 2008). For more information about my professional career,
							please reference the provided links below:
						</p>
						<div>
							{aboutData.map((d) => (
								<ContactLink name={d.name} url={d.url} icon={d.icon} />
							))}
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
