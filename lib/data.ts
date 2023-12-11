import wikiNookImg from "@/public/images/wikinook.png";
import proyectoGCImg from "@/public/images/proyectoGC.png";

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
		tags: ["React", "Bootstrap", "React Paginate", "React Router"],
		imageUrl: wikiNookImg,
		url: "https://wikinook.vercel.app/",
	},
	{
		id: 2,
		title: "Proyecto GC",
		description:
			"Responsive web app about the 'Proyecto Gonzáles Catán'. It shows information about the organization, such as activities, how to contribute and how to enroll.",
		tags: ["HTML", "CSS", "Bootstrap", "Slider"],
		imageUrl: proyectoGCImg,
		url: "https://sheidiz.github.io/bootcamp-java-universidad-2023-integrador-fase1/index.html",
	},
] as const;