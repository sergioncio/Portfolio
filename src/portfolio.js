import emoji from "react-easy-emoji";

import DHlogo from "./assets/img/icons/common/DH.png";
import Pdf from './Resume.pdf';

export const greetings = {
	name: "Sergio Garcia",
	title: "Hi, I'm Sergio",
	description:
		"A last year Telematics Engineering Student passionate with Software Development and Web Development. Also I have worked with Object Detection AI algorithms. I am looking for a full time job where I can grow as a professional",
	resumeLink: Pdf,
};

export const openSource = {
	githubUserName: "sergioncio",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/sergioncio",
	linkedin: "https://www.linkedin.com/in/sergio-garc%C3%ADa-vicente-557682169/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"SOFTWARE DEVELOPER AND WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop interactive Front end / User Interfaces for your web applications"
		),
		emoji(
			"⚡ Progressive Web Applications"
		),
		emoji(
			"⚡ Develop efficient Desktop applications"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "angularjs",
			fontAwesomeClassname: "logos:angular-icon",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "php",
			fontAwesomeClassname: "logos:php-alt",
		},
		{
			skillName: "CSharp",
			fontAwesomeClassname: "logos:c-sharp",
		},
		{
			skillName: "matlab",
			fontAwesomeClassname: "vscode-icons:file-type-matlab",
		}
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Technical University of Cartagena",
		subHeader: "Bachelor of Science in Telematics Engineering",
		duration: "September 2017 - Present",
		desc: "",
		descBullets: [
			"Telecommunications",
			"Cybersecurity",
			"Software Development",
		],
	},
	{
		schoolName: "University Miguel Hernández of Elche",
		subHeader: "PCAP: Programming essentials in Python",
		duration: "November 2020 - February 2021",
		desc: "",
	},
	{
		schoolName: "HoGent University",
		subHeader: "7th International Smart Cities Intensive Programme",
		duration: "February 2020",
		desc: "Improved the connectivity and the security in a library",
	},
	{
		schoolName: "Cisco Netacad",
		subHeader: "CCNA CyberSecurity Operations",
		duration: "September 2019 - June 2020",
		desc: "Cybersecurity Analist Formation",
	},
];

export const experience = [
	{
		role: "Product Engineer",
		company: "Decision Habitat",
		companylogo: DHlogo,
		date: "November 2020 – April 2021",
		desc: "Object Detection AI.",
		descBullets: [
			"Python",
			"YOLO",
		],
	},
];

export const projects = [
	{
		name: "Front-End",
		desc: "Front-End for a REST API",
		github: "https://github.com/sergioncio/FrontEnd-forAjaxBackEnd",
	},
	{
		name: "WorkFlow Back-End",
		desc: "Back-End for a workfow web application made with angujarjs",
		github: "https://github.com/sergioncio/WorkFlow-Back-End",
	},
	{
		name: "FilmWeb",
		desc: "Web application that gets the films from a sql database with a recommendation algorithm built in MATLAB",
		github: "https://github.com/sergioncio/Movies-web",
	},	
	{
		name: "CatsAndMice",
		desc: "Videogame where you are a mouse and you have to eat all the fruits avoiding poissons",
		github: "https://github.com/sergioncio/CatsAndMice",
	},	
	{
		name: "UDP Streaming",
		desc: "Basic videostream app like skype",
		github: "https://github.com/sergioncio/UDPVideoMulticast",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
