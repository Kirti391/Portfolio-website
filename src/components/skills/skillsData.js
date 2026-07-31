import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiMongodb,
  SiCplusplus,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

/**
 * FIXED PIXEL DESIGN CANVAS
 * ---------------------------------------------------------------
 * Every coordinate below is a literal pixel inside a 940x680 design
 * canvas. There is no percentage math and no CSS aspect-ratio
 * dependency anywhere in this layout — SkillsCanvas.jsx renders this
 * fixed-size canvas once, then scales the *whole thing* down with a
 * single measured `transform: scale()` factor to fit the screen.
 *
 * This means the constellation's shape is 100% deterministic: it
 * looks exactly the same on every browser/build/Tailwind config,
 * because nothing here depends on the parent container's aspect
 * ratio ever resolving correctly.
 */
export const DESIGN_WIDTH = 940;
export const DESIGN_HEIGHT = 680;
export const CENTER = { x: 470, y: 340 };

const RX = 300; // horizontal radius in px
const RY = 235; // vertical radius in px

const toRad = (deg) => (deg * Math.PI) / 180;

// angle: position around the ellipse (0deg = right, 90deg = top)
// radius: 0-1 multiplier per node so distances vary organically
const RAW_SKILLS = [
  // Frontend cluster
  { id: "react", name: "React", category: "frontend", Icon: FaReact, angle: 100, radius: 0.85 },
  { id: "javascript", name: "JavaScript", category: "frontend", Icon: SiJavascript, angle: 122.5, radius: 1.0 },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", Icon: SiTailwindcss, angle: 145, radius: 0.65 },
  { id: "html", name: "HTML5", category: "frontend", Icon: FaHtml5, angle: 167.5, radius: 0.95 },
  { id: "css", name: "CSS3", category: "frontend", Icon: FaCss3Alt, angle: 190, radius: 0.72 },
  { id: "vite", name: "Vite", category: "frontend", Icon: SiVite, angle: 212.5, radius: 0.6 },

  // Backend cluster
  { id: "nodejs", name: "Node.js", category: "backend", Icon: FaNodeJs, angle: 235, radius: 0.9 },
  { id: "express", name: "Express", category: "backend", Icon: SiExpress, angle: 257.5, radius: 0.62 },
  { id: "restapi", name: "RESTful API", category: "backend", Icon: TbApi, angle: 280, radius: 1.0 },
  { id: "mongodb", name: "MongoDB", category: "backend", Icon: SiMongodb, angle: 302.5, radius: 0.68 },

  // Languages cluster
  { id: "java", name: "Java", category: "languages", Icon: FaJava, angle: 325, radius: 0.88 },
  { id: "python", name: "Python", category: "languages", Icon: FaPython, angle: 347.5, radius: 0.62 },
  { id: "cpp", name: "C++", category: "languages", Icon: SiCplusplus, angle: 10, radius: 1.0 },
  { id: "sql", name: "SQL", category: "languages", Icon: FaDatabase, angle: 32.5, radius: 0.7 },

  // Tools cluster
  { id: "git", name: "Git", category: "tools", Icon: FaGitAlt, angle: 55, radius: 0.95 },
  { id: "github", name: "GitHub", category: "tools", Icon: FaGithub, angle: 77.5, radius: 0.65 },
];

export const CATEGORY_ACCENT = {
  frontend: {
    text: "text-cyan-300",
    ring: "group-hover:border-cyan-400/70",
    bgGlow: "bg-cyan-400/40",
    activeShadow: "shadow-[0_0_35px_rgba(34,211,238,0.45)]",
    stroke: "#22d3ee",
  },
  backend: {
    text: "text-violet-300",
    ring: "group-hover:border-violet-400/70",
    bgGlow: "bg-violet-400/40",
    activeShadow: "shadow-[0_0_35px_rgba(167,139,250,0.45)]",
    stroke: "#a78bfa",
  },
  languages: {
    text: "text-indigo-300",
    ring: "group-hover:border-indigo-400/70",
    bgGlow: "bg-indigo-400/40",
    activeShadow: "shadow-[0_0_35px_rgba(99,102,241,0.45)]",
    stroke: "#6366f1",
  },
  tools: {
    text: "text-cyan-300",
    ring: "group-hover:border-cyan-400/70",
    bgGlow: "bg-cyan-400/40",
    activeShadow: "shadow-[0_0_35px_rgba(34,211,238,0.45)]",
    stroke: "#22d3ee",
  },
};

// Precompute literal x/y pixel coordinates for every node, once.
export const SKILLS = RAW_SKILLS.map((skill, index) => {
  const rad = toRad(skill.angle);
  const x = CENTER.x + RX * skill.radius * Math.cos(rad);
  const y = CENTER.y - RY * skill.radius * Math.sin(rad);
  return {
    ...skill,
    x: Math.round(x),
    y: Math.round(y),
    floatVariant: index % 6,
  };
});

// Sequential relationship links within each category
export const CONNECTIONS = [
  ["react", "javascript"],
  ["javascript", "tailwind"],
  ["tailwind", "html"],
  ["html", "css"],
  ["css", "vite"],

  ["nodejs", "express"],
  ["express", "restapi"],
  ["restapi", "mongodb"],

  ["java", "python"],
  ["python", "cpp"],
  ["cpp", "sql"],

  ["git", "github"],
];