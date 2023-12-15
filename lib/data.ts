import React from "react";
import wikiNookImg from "@/public/images/wikinook.png";
import proyectoGCImg from "@/public/images/proyectoGC.png";
import { LuBookOpen } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
	{ name: "Home", path: "/", },
	{ name: "Education", path: "/education", },
	{ name: "Projects", path: "/projects", }
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"MySQL",
	"Git + GitHub",
	"Bootstrap",
	"Java",
	"Maven",
	"React",
	"Tailwind",
	"Responsive Design",
] as const;

export const projectsData = [
	{
		id: 1,
		title: "WikiNook",
		description:
			"My first React App of the Animal Crossing game, powered by the Nookipedia API. Features filtering, search, and pagination for enhanced user experience.",
		tags: ["React", "Next.js", "React Paginate", "Tailwind", "Framer Motion", "Fetch API"],
		imageUrl: wikiNookImg,
		url: "https://wikinook.vercel.app/",
	},
	{
		id: 2,
		title: "Proyecto GC",
		description:
			"Responsive web app about the 'Proyecto Gonzáles Catán'. It shows information about the organization, such as activities, how to contribute and how to enroll.",
		tags: ["HTML", "CSS", "Bootstrap", "Slick Slider"],
		imageUrl: proyectoGCImg,
		url: "https://sheidiz.github.io/bootcamp-java-universidad-2023-integrador-fase1/index.html",
	},
] as const;

export const formationData = [
	{
		title: "Java Developer Bootcamp",
		institution: "Educacion IT",
		description: [
			{ title: "General Skills:", skills: "Git, GitHub, Databases, Web Development, Responsive Design" },
			{ title: "Languages and Technologies:", skills: "HTML, CSS, Bootstrap, MySQL, Java, Maven" }
		],
		icon: React.createElement(LuBookOpen),
		date: "June 2023 - Present",
	},
	{
		title: "Tecnicatura Universitaria en Programación",
		institution: "Universidad Tecnologica Nacional",
		description: [
			{ title: "General Skills:", skills: "System Architecture, Databases, Introduction to Programming, Object-Oriented Programming, Databases, Web Development" },
			{ title: "Languages and Technologies:", skills: "C++, C#, .NET, HTML, CSS, Bootstrap, MySQL" }
		],
		icon: React.createElement(LuGraduationCap),
		date: "2018 - 2019",
	},
] as const;
export const coursesData = [
	{
		title: "Programa de Inglés como Lengua Extranjera - Inglés - Nivel 11",
		institution: "Universidad de Buenos Aires",
		description: [
			{ title: "Focus:", skills: "Learning of English as a foreign language" },
			{ title: "About:", skills: "64-hour course. Integrates the upper intermediate stage of the English as a Foreign Language Program –Resolution (CD) No 2080/1990 and RESCD-2022-67-E-UBA-DCT#FFYL–, equivalent to level B2 of the Common European Framework of Reference (CEFR)." }
		],
		icon: React.createElement(LuGraduationCap),
		date: "August 2022 - December 2022",
	},
] as const;