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
 * Ellipse the constellation is plotted on, in percentage units
 * relative to the canvas. Keeping this data-driven (rather than a
 * CSS grid) is what lets every node sit off-axis like a real star
 * field instead of a tidy rows-and-columns layout.
 */
const RX = 36; // horizontal radius (%)
const RY = 32; // vertical radius (%)

const toRad = (deg) => (deg * Math.PI) / 180;

// angle: position around the ellipse (0deg = right, 90deg = top)
// radius: 0-1 multiplier, varied per node so distances feel organic
//
// 16 nodes total, spaced 22.5deg apart so each category cluster gets
// an arc proportional to its size (Frontend 6, Backend 4, Languages 4,
// Tools 2) while the whole ring stays evenly distributed.
const RAW_SKILLS = [
  // Frontend cluster (135deg arc)
  { id: "react", name: "React", category: "frontend", Icon: FaReact, angle: 100, radius: 0.85 },
  { id: "javascript", name: "JavaScript", category: "frontend", Icon: SiJavascript, angle: 122.5, radius: 1.0 },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", Icon: SiTailwindcss, angle: 145, radius: 0.65 },
  { id: "html", name: "HTML5", category: "frontend", Icon: FaHtml5, angle: 167.5, radius: 0.95 },
  { id: "css", name: "CSS3", category: "frontend", Icon: FaCss3Alt, angle: 190, radius: 0.72 },
  { id: "vite", name: "Vite", category: "frontend", Icon: SiVite, angle: 212.5, radius: 0.6 },

  // Backend cluster (90deg arc)
  { id: "nodejs", name: "Node.js", category: "backend", Icon: FaNodeJs, angle: 235, radius: 0.9 },
  { id: "express", name: "Express", category: "backend", Icon: SiExpress, angle: 257.5, radius: 0.62 },
  { id: "restapi", name: "RESTful API", category: "backend", Icon: TbApi, angle: 280, radius: 1.0 },
  { id: "mongodb", name: "MongoDB", category: "backend", Icon: SiMongodb, angle: 302.5, radius: 0.68 },

  // Languages cluster (90deg arc)
  { id: "java", name: "Java", category: "languages", Icon: FaJava, angle: 325, radius: 0.88 },
  { id: "python", name: "Python", category: "languages", Icon: FaPython, angle: 347.5, radius: 0.62 },
  { id: "cpp", name: "C++", category: "languages", Icon: SiCplusplus, angle: 10, radius: 1.0 },
  { id: "sql", name: "SQL", category: "languages", Icon: FaDatabase, angle: 32.5, radius: 0.7 },

  // Tools cluster (45deg arc)
  { id: "git", name: "Git", category: "tools", Icon: FaGitAlt, angle: 55, radius: 0.95 },
  { id: "github", name: "GitHub", category: "tools", Icon: FaGithub, angle: 77.5, radius: 0.65 },
];

// Accent per category, drawn only from the existing indigo/violet/cyan system
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

// Precompute x/y (%) for every node from its angle + radius
export const SKILLS = RAW_SKILLS.map((skill, index) => {
  const rad = toRad(skill.angle);
  const x = 50 + RX * skill.radius * Math.cos(rad);
  const y = 50 - RY * skill.radius * Math.sin(rad);
  return {
    ...skill,
    x,
    y,
    // deterministic variation for float timing, picked from a small
    // pool of preset durations/delays (kept in skills.css) instead of
    // inline styles
    floatVariant: index % 6,
  };
});

// Sequential "chain" links within each category — this is what makes
// the SVG draw real relationships instead of random lines.
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

export const CENTER = { x: 50, y: 50 };