export type CareerProject = {
  name: string;
  image: string;
  link?: string;
};

export type CareerSkill = {
  name: string;
  icon: string;
};

export type CareerEntry = {
  id: string;
  role: string;
  company: string;
  period: string;
  badge: string;
  current: boolean;
  logo: string;
  overview: string;
  myRole: string;
  projects: CareerProject[];
  skills: CareerSkill[];
};

export const careersData: CareerEntry[] = [
  {
    id: "baifos",
    role: "Prácticas de Desarrollo de Aplicaciones Multiplataforma", 
    company: "Baifos Informática - Fran Soluciones", 
    period: "Marzo 2026 - Mayo 2026", 
    badge: "Prácticas DAM",
    current: false,
    logo: "/company/baifos.png", // Asegúrate de añadir este logo a tu carpeta public
    overview:
      "Empresa del sector tecnológico especializada en soluciones informáticas y desarrollo de software a medida.",
    myRole:
      "Participación activa en el desarrollo de aplicaciones multiplataforma. Experiencia trabajando con lenguajes como Kotlin y Python, integración de bases de datos (MySQL/PostgreSQL) y despliegue de entornos utilizando contenedores Docker.",
    projects: [
      {
        name: "TechNova (Gestor de Tickets)",
        image: "/projects/technova.webp",
      },
      {
        name: "App Peluquería SJR",
        image: "/projects/peluqueria.webp",
      },
    ],
    skills: [
      { name: "Kotlin", icon: "/tech/kotlin.svg" },
      { name: "Python", icon: "/tech/python.svg" },
      { name: "React Native", icon: "/tech/react.svg" },
      { name: "MySQL", icon: "/tech/mysql.svg" },
      { name: "Docker", icon: "/tech/docker.svg" },
    ],
  },
  {
    id: "hyronmc",
    role: "Administrador de Sistemas y Desarrollador",
    company: "HyronMC",
    period: "Enero 2026 - Actualidad",
    badge: "Proyecto Propio",
    current: true,
    logo: "/company/hyronmc.png",
    overview:
      "Red de servidores de Minecraft con infraestructura escalable y una comunidad activa.",
    myRole:
      "Administración y mantenimiento de infraestructura en Ubuntu Server. Gestión de nodos BungeeCord, configuración avanzada de permisos con LuckPerms, gestión de bases de datos y desarrollo de la web principal del servidor.",
    projects: [
      {
        name: "HyronMC Web",
        image: "/projects/hyronmc-web.webp",
      },
    ],
    skills: [
      { name: "Ubuntu", icon: "/tech/ubuntu.svg" },
      { name: "Java", icon: "/tech/java.svg" },
      { name: "Redes", icon: "/tech/network.svg" },
      { name: "Bases de Datos", icon: "/tech/database.svg" },
    ],
  },
  {
    id: "el-castillo",
    role: "Camarero", 
    company: "Bar Cafetería Heladería El Castillo", 
    period: "Agosto 2025 - Actualidad", 
    badge: "Hostelería",
    current: true,
    logo: "/company/elcastillo.png",
    overview:
      "Establecimiento local de restauración ubicado en Buenavista del Norte.",
    myRole:
      "Atención directa al cliente en sala y terraza, gestión ágil de pedidos y soporte general para asegurar un servicio eficiente y satisfactorio.",
    projects: [],
    skills: [
      { name: "Atención al Cliente", icon: "/tech/customerservice.svg" },
      { name: "Trabajo en Equipo", icon: "/tech/teamwork.svg" },
    ],
  },
  {
    id: "100-montaditos",
    role: "Ayudante de Camarero", 
    company: "100 Montaditos Garachico", 
    period: "Junio 2025 - Julio 2025", 
    badge: "Hostelería",
    current: false,
    logo: "/company/100montaditos.png",
    overview:
      "Franquicia reconocida del sector de la restauración.",
    myRole:
      "Apoyo integral en el servicio de atención al público, preparación de comandas y mantenimiento de las instalaciones durante la campaña de verano.",
    projects: [],
    skills: [
      { name: "Atención al Cliente", icon: "/tech/customerservice.svg" },
    ],
  },
  {
    id: "ayto-buenavista",
    role: "Prácticas de Sistemas Microinformaticos y Redes", 
    company: "Ayuntamiento de Buenavista del Norte", 
    period: "Abril 2024 - Junio 2024", 
    badge: "Prácticas SMR",
    current: false,
    logo: "/company/buenavista.png",
    overview:
      "Entidad pública responsable de la gestión municipal, infraestructura tecnológica y atención ciudadana.",
    myRole:
      "Experto en red e instalación de sistemas microinformáticos. Desempeñé funciones como instalador-reparador de equipos informáticos, asegurando el correcto funcionamiento de las infraestructuras de la administración local.", 
    projects: [],
    skills: [
      { name: "Hardware", icon: "/tech/hardware.svg" },
      { name: "Redes", icon: "/tech/network.svg" },
      { name: "Windows", icon: "/tech/windows.svg" },
      { name: "Soporte IT", icon: "/tech/support.svg" },
    ],
  },
];