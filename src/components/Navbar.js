import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Nav, Navbar, Image, NavLink } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import logo from "../assets/imgs/logo.png";

const NavigationBar = () => {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<Fade bottom cascade>
			<Navbar expand="md" className="p-md-5" fixed="top">
				<Navbar.Brand href="/">
					<Image src={logo} className="ml-md-5" style={{ width: "10em" }} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-nav" />
				<Navbar.Collapse>
					<Nav className="ml-auto">
						<Link
							className="link"
							activeClass="active"
							to="homw"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={scrollToTop}
						>
							Home
						</Link>
						<Link
							className="link"
							activeClass="active"
							to="About"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							About
						</Link>
						<Link
							className="link"
							activeClass="active"
							to="work"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Work
						</Link>
						<Link
							className="link"
							activeClass="active"
							to="contact"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Contact
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fade>
	);
};

export default NavigationBar;
