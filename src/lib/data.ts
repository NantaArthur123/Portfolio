import type { Project, Tag } from "./datatype";

export const tagPool: Tag[] = [
	{ id: 1, name: "Java" },
	{ id: 2, name: "Kotlin" },
	{ id: 3, name: "Golang" },
	{ id: 4, name: "Javascript" },
	{ id: 5, name: "Typescript" },
	{ id: 6, name: "Godot" },
	{ id: 7, name: "Svelte" },
	{ id: 8, name: "Laravel" },
	{ id: 9, name: "React Next" },
	{ id: 10, name: "React" },
	{ id: 11, name: "TailwindCSS" },
	{ id: 12, name: "BulmaCSS" },
	{ id: 13, name: "Bootstrap" },
	{ id: 14, name: "Github" },
	{ id: 15, name: "Firebase" },
	{ id: 16, name: "PostgreSQL" },
	{ id: 17, name: "MongoDB" },
	{ id: 18, name: "Android Studio" }
];

export const projects: Project[] = [
	{ id: 1, name: "PPID App", tags: [2, 15, 18], img: "/image/ppid.png", source: false },
	{ id: 2, name: "VKesra", tags: [2, 15, 18], img: "/image/vkesra.png", source: false },
	{ id: 3, name: "JAMUDB", tags: [9, 5, 14, 11, 16], img: "/image/jamudb.png", source: true }
];
