import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "competition" | "academic" | "certification";
  year: string;
  description: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "2º Lugar - Hackathon Código Extremo",
    type: "competition",
    year: "2024",
    description: "Obtuve el segundo lugar en un evento de programación competitiva desarrollando una app innovadora.",
    icon: Trophy,
  },
  {
    id: 2,
    title: "3º Lugar - Maratón de Programación INTELLECT",
    type: "competition",
    year: "2024",
    description: "Gané el tercer lugar creando una solución creativa en un hackathon de 24 horas.",
    icon: Trophy,
  },
  {
    id: 3,
    title: "Lista del Decano",
    type: "academic",
    year: "2023",
    description: "Reconocido por excelencia académica, incluido en la lista del decano de la universidad.",
    icon: Star,
  },
  {
    id: 4,
    title: "Certificación en Python",
    type: "certification",
    year: "2023",
    description: "Completé una certificación completa de programación en Python.",
    icon: Award,
  },
  {
    id: 5,
    title: "Certificación en SQL",
    type: "certification",
    year: "2022",
    description: "Obtuve certificación en gestión y consultas de bases de datos SQL.",
    icon: Award,
  },
  {
    id: 6,
    title: "Certificación en Inteligencia Artificial",
    type: "certification",
    year: "2023",
    description: "Realicé formación especializada en técnicas de ingeniería de prompts para IA.",
    icon: Award,
  },
];
