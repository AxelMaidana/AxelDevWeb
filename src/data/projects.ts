export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    videoCover?: string;
    category: "Development" | "Design" | "Fullstack" | "Internal Tooling" | "Web Architecture" | "Headless Commerce" | "Product Design & Frontend";
    technologies: string[];
    liveUrl?: string;
    repoUrl?: string;
    year: string;
    role: string;
    duration: string;
    features: {
        title: string;
        description: string;
    }[];
}

export const projectsData: Project[] = [
    {
        id: "1",
        title: "LB Consultoría",
        shortDescription: "Plataforma de consultoria y acompañamiento integral para una mejor trayectoria académica y profesional.",
        fullDescription: "Desarrollo de una plataforma integral para la gestión de una consultora educativa. El proyecto incluye un sistema de turnos con calendario interactivo y gestion de usuarios.",
        technologies: ["React", "TypeScript", "Vite", "Firebase", "Tailwind CSS"],
        image: "/projects/lb-consultoria.png",
        category: "Fullstack",
        year: "2025",
        role: "Desarrollador Fullstack",
        duration: "3 Meses",
        liveUrl: "https://lb-consultoria.netlify.app/",
        features: [
            {
                title: "Métricas en Tiempo Real",
                description: "Procesamiento y visualización de +1M de puntos de datos usando WebGL Canvas."
            },
            {
                title: "Modo Oscuro Optimizado",
                description: "Paletas de colores HSL especialmente calibradas para reducir la fatiga visual."
            },
            {
                title: "Widgets Modulares",
                description: "Arquitectura que permite a cada usuario configurar su propio espacio de trabajo."
            }
        ]
    },
    {
        id: "2",
        title: "Spa Sentirse Bien",
        shortDescription: "Plataforma de gestión de turnos, stock de productos y usuarios para un spa de belleza.",
        fullDescription: "Desarrollo de una plataforma integral para la gestión de un spa de belleza. El proyecto incluye un sistema de turnos con calendario interactivo, gestión de stock de productos y administración de usuarios. La plataforma permite a los administradores gestionar los servicios ofrecidos, los productos disponibles y los clientes que visitan el spa. Además, cuenta con un sistema de notificaciones para recordar a los clientes sus citas programadas.",
        technologies: ["React", "TypeScript", "Vite", "Firebase", "Tailwind CSS"],
        image: "/projects/SPA-Sentirse-Bien.webp",
        category: "Fullstack",
        year: "2025",
        role: "Desarrollador Fullstack",
        duration: "3 Meses",
        liveUrl: "https://spaweb-sentirsebien.netlify.app/",
        features: [
            {
                title: "Métricas en Tiempo Real",
                description: "Procesamiento y visualización de +1M de puntos de datos usando WebGL Canvas."
            },
            {
                title: "Modo Oscuro Optimizado",
                description: "Paletas de colores HSL especialmente calibradas para reducir la fatiga visual."
            },
            {
                title: "Widgets Modulares",
                description: "Arquitectura que permite a cada usuario configurar su propio espacio de trabajo."
            }
        ]
    },
    {
        id: "3",
        title: "Wally App",
        shortDescription: "Aplicación web para la gestión ingresos y egresos personales con inteligencia artificial.",
        fullDescription: "Aplicación web para la gestión ingresos y egresos personales con inteligencia artificial. La prioridad fue dar poder al usuario para gestionar sus finanzas personales de manera sencilla e intuitiva.",
        technologies: ["React", "TypeScript", "Vite", "Firebase", "Tailwind CSS"],
        image: "/projects/Wally-Ahorra-inteligente.webp",
        category: "Fullstack",
        year: "2026",
        role: "Desarrollador Fullstack",
        duration: "1 Mes",
        liveUrl: "https://wallydev.netlify.app/",
        features: [
            {
                title: "Sistema de Diseño",
                description: "Componentes encapsulados que garantizan consistencia en toda la plataforma."
            },
            {
                title: "Astro Islands",
                description: "Carga de Javascript 100% bajo demanda, enviando sólo HTML puro donde no hay interactividad."
            }
        ]
    },
    {
        id: "4",
        title: "Colegio de Enfermería del Chaco",
        shortDescription: "Plataforma de gestión de matriculas y usuarios para el Colegio de Enfermería del Chaco.",
        fullDescription: "Herramienta PWA para equipos de management que necesitaban consolidar métricas de 5 fuentes de datos distintas. El foco estuvo en la síntesis de información, usando espacios negativos para guiar el ojo y animaciones sutiles que comunican la carga de datos sin usar spinners bloqueantes. Un proyecto donde la UI desaparece y la atención se centra solo en la data.",
        technologies: ["Vue.js", "GraphQL", "Chart.js"],
        image: "/projects/colegio.png",
        category: "Fullstack",
        year: "2024",
        role: "Desarrollador Fullstack",
        duration: "3 Meses",
        liveUrl: "https://colegio-de-enfermeria-del-chaco-4ans.vercel.app/",
        features: [
            {
                title: "Agregación de Datos",
                description: "Capa de GraphQL que unifica múltiples fuentes de datos en un solo endpoint."
            }
        ]
    }
];
