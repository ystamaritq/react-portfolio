import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactLink = ({ name, url, icon }) => {
	return (
		<OverlayTrigger
			placement="bottom"
			overlay={<Tooltip id="tooltip">{name}</Tooltip>}
		>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon
					icon={icon}
					style={{
						color: "#5E3719",
						margin: "10px",
						fontSize: "30px",
					}}
				/>
			</a>
		</OverlayTrigger>
	);
};

export default ContactLink;

// Github
// "https://github.com/ystamaritq"
// faGithub
