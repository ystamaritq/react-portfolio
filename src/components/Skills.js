import React from "react";
import RadialBarChart from "@bit/recharts.recharts.radial-bar-chart";
import RadialBar from "@bit/recharts.recharts.radial-bar";
import Legend from "@bit/recharts.recharts.legend";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import ResponsiveContainer from "@bit/recharts.recharts.responsive-container";

const data = [
	{
		name: "",
		uv: 0,
		pv: 360,
		fill: "white",
	},
	{
		name: "Html",
		uv: 100,
		pv: 360,
		fill: "#f94144",
	},
	{
		name: "Css",
		uv: 100,
		pv: 360,
		fill: "#f3722c",
	},
	{
		name: "JavaScript",
		uv: 90,
		pv: 360,
		fill: "#f8961e",
	},
	{
		name: "React",
		uv: 100,
		pv: 360,
		fill: "#f9c74f",
	},
	{
		name: "Node",
		uv: 99,
		pv: 360,
		fill: "#90be6d",
	},
	{
		name: "Rest APIs",
		uv: 90,
		pv: 360,
		fill: "#43aa8b",
	},
	{
		name: "ORM",
		uv: 90,
		pv: 360,
		fill: "#577590",
	},
	{
		name: "MySQL",
		uv: 75,
		pv: 360,
		fill: "#a37774",
	},
	{
		name: "Postgres",
		uv: 75,
		pv: 360,
		fill: "#484a47",
	},
	{
		name: "Mongo",
		uv: 80,
		pv: 360,
		fill: "#8a817c",
	},
	{
		name: "Java",
		uv: 50,
		pv: 360,
		fill: "#c97c5d",
	},
];

const style = {
	lineHeight: "35px",
	right: 0,
};

const Skills = () => {
	{
		return (
			<Container className="skills">
				<Fade bottom>
					<h1 className="heading mb-2">
						<Fade bottom cascade>
							Skills
						</Fade>
					</h1>
				</Fade>
				<Fade bottom>
					<ResponsiveContainer height={700}>
						<RadialBarChart data={data}>
							<Legend
								iconSize={20}
								layout="vertical"
								verticalAlign="middle"
								hizontalAlign="end"
								wrapperStyle={style}
							/>
							<RadialBar
								innerRadius={100}
								minAngle={25}
								label={{
									position: "insideStart",
									fill: "#fff",
									fontWeight: "bolder",
								}}
								background
								clockWise
								dataKey="uv"
							/>
						</RadialBarChart>
					</ResponsiveContainer>
				</Fade>
			</Container>
		);
	}
};

export default Skills;
