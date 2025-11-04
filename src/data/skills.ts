
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
    skills: ["JavaScript", "Java", "Python", "TypeScript (En progreso)", "HTML/CSS"],
  },
  {
    name: "Desarrollo Frontend",
    icon: Layout,
    skills: ["React", "React Native", "Next.js", "Tailwind CSS (En progreso)"],
  },
  {
    name: "Desarrollo Backend",
    icon: Code,
    skills: ["Node.js"],
  },
  {
    name: "Bases de Datos",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    name: "Herramientas y Tecnologías",
    icon: Cpu,
    skills: ["GitHub", "Docker", "Vercel", "Netlify"],
  },
  {
    name: "Diseño",
    icon: Palette,
    skills: ["Canva"],
  },
];
