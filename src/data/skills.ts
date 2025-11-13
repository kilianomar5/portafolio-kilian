
import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Lenguajes de Programación",
    icon: Terminal,
    skills: ["JavaScript", "Java", "Python", "MySQL"],
  },
  {
    name: "Desarrollo Frontend",
    icon: Layout,
    skills: ["Node.js", "Next.js", "CSS Frameworks"],
  },
  {
    name: "Desarrollo Backend",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Bases de Datos",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    name: "Herramientas y Tecnologías",
    icon: Cpu,
    skills: ["GitHub", "Docker", "Vercel", "Netlify", "Figma", "Visual Studio Code"],
  },
  {
    name: "Diseño",
    icon: Palette,
    skills: ["Canva"],
  },
];
