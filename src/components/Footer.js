import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Footer = () => {
	return (
		<div className="footer text-center">
			<span className="mr-1 text-muted">developed with love by</span>
			<OverlayTrigger
				placement="top"
				overlay={<Tooltip id="tooltip-email-footer">Contact Me</Tooltip>}
			>
				<a href="mailto:ystamaritq@gmail.com" className="text-muted">
					Yadira Tamarit
				</a>
			</OverlayTrigger>
		</div>
	);
};

export default Footer;
