import React from "react";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";

const Header = () => {
	{
		return (
			<Container className="py-5">
				<h1 className="heading-background">Yadira's Portfolio</h1>
				<Fade bottom>
					<h2 className="header-title pb-md-5">
						Hi, my name is Yadira Tamarit<br></br>
						I'm a Full Stack Developer
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
					</h2>
				</Fade>
			</Container>
		);
	}
};

export default Header;
