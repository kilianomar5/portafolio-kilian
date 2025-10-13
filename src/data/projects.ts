
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Kilian Reparaciones",
    description: "Página web dedicada a la reparación de equipos informáticos, ofreciendo servicios rápidos y confiables para PCs y laptops.",
    image: "/imgs/p1.png",
    tags: ["Web", "Servicios", "Informática", "Reparaciones"],
    links: {
      github: "", 
      live: "https://kilianreparaciones.es",
    },
  },
  {
    id: 2,
    title: "Álbum Antisocial y Retiro",
    description: "Proyecto musical: un álbum original llamado 'Antisocial y Retiro', con temas propios y estilo personal.",
    image: "/imgs/p2.png",
    tags: ["Música", "Álbum", "Producción", "Creatividad"],
    links: {
      github: "",
      live: "https://open.spotify.com/intl-es/album/6LZxVnZKWOsNeZkRufADYB?si=35tMIm0ySBe0_L18ykf3FQ", 
    },
  },
  {
    id: 3,
    title: "Videojuego - Cookie Clicker",
    description: "Un juego de tipo 'clicker' donde los jugadores hacen clic en una galleta para ganar puntos.",
    image: "/imgs/p3.png",
    tags: ["Videojuego", "Godot Engine", "PGL", "Clicker", "Galleta"],
    links: {
      github: "",
      live: "https://mc.hyronmc.me", 
    },
  },
  {
    id: 4,
    title: "Servidor Discord",
    description: "Servidor de Discord para gaming y comunidad, con canales organizados y roles personalizados.",
    image: "/imgs/p4.png",
    tags: ["Discord", "Comunidad", "Gaming", "Chat"],
    links: {
      github: "",
      live: "https://discord.gg/fZgqGBmMbh", 
    },
  },
];
