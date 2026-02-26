export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    technologies: string[];
    image: string;
    videoCover: string;
    category: string;
    year: string;
    role: string;
    liveUrl?: string;
    repoUrl?: string;
    features: { title: string; description: string }[];
}

export const projectsData: Project[] = [
    {
        id: "fintech-dashboard",
        title: "Fintech Dashboard",
        shortDescription: "Plataforma de gestión de activos en tiempo real con visualización de datos complejos.",
        fullDescription: "Un ecosistema financiero completo diseñado para traders institucionales. El desafío fue procesar WebSockets de alta frecuencia (100+ ticks por segundo) y renderizar data densa sin penalizar el framerate. Se implementó una arquitectura de estado atómica y WebGL para los gráficos principales. El resultado es una interfaz limpia que prioriza la legibilidad de datos en estrés operativo, reduciendo la carga cognitiva del usuario en decisiones críticas.",
        technologies: ["React", "TypeScript", "D3.js", "Zustand", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        videoCover: "https://assets.mixkit.co/videos/download/mixkit-software-developer-working-on-code-on-a-computer-40018-medium.mp4",
        category: "Product Design & Frontend",
        year: "2025",
        role: "Lead Frontend Engineer",
        liveUrl: "https://example.com/fintech",
        features: [
            {
                title: "Real-time Metrics",
                description: "Procesamiento y pintado de +1M de puntos de datos usando WebGL Canvas."
            },
            {
                title: "Dark Mode Optimizied",
                description: "Paletas de colores HSL especialmente calibradas para reducir fatiga visual en sesiones largas."
            },
            {
                title: "Modular Widgets",
                description: "Arquitectura que permite a cada usuario configurar su propio espacio de trabajo (drag & drop)."
            }
        ]
    },
    {
        id: "ecommerce-modular",
        title: "E-commerce Modular",
        shortDescription: "Arquitectura headless para una marca de moda high-end con integración de pagos.",
        fullDescription: "Rediseño completo de la experiencia de compra para enfocarse en la fotografía de producto y microinteracciones fluidas. Al desacoplar el frontend del monolito de e-commerce, logramos un TTFB (Time to First Byte) en el percentil 99 de 50ms alrededor del mundo. Las transiciones de página son parecidas a una app nativa, creando una experiencia inmersiva que incrementó la retención de usuarios un 40%.",
        technologies: ["Next.js", "Framer Motion", "Stripe", "Shopify Storefront API"],
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
        videoCover: "https://assets.mixkit.co/videos/download/mixkit-hands-typing-on-a-laptop-keyboard-close-up-1616-medium.mp4",
        category: "Headless Commerce",
        year: "2024",
        role: "Fullstack Developer",
        features: [
            {
                title: "Performance First",
                description: "Score de 100 en Core Web Vitals en mobile a pesar de ser image-heavy."
            },
            {
                title: "Transiciones Fluidas",
                description: "Navegación sin interrupciones preservando el estado de contexto del carrito y filtros."
            }
        ]
    },
    {
        id: "saas-landing-system",
        title: "SaaS Landing System",
        shortDescription: "Sistema de diseño escalable para startup de IA, enfocado en conversión y performance.",
        fullDescription: "Construcción desde cero de un generador de landings dinámico gobernado por un Headless CMS. La prioridad fue dar poder al equipo de marketing para iterar sobre tests A/B en minutos sin tocar código. Implementé un motor de renderizado basado en bloques astrictos que obligatoriamente siguen el Design System (espaciados matemáticos, jerarquía tipográfica automatizada).",
        technologies: ["Astro", "Tailwind CSS", "Sanity IO"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2069&auto=format&fit=crop",
        videoCover: "https://assets.mixkit.co/videos/download/mixkit-abstract-technology-lines-in-motion-33230-medium.mp4",
        category: "Web Architecture",
        year: "2024",
        role: "Web Engineer",
        repoUrl: "https://github.com/example/saas",
        features: [
            {
                title: "Design System",
                description: "Componentes encapsulados que garantizan consistencia sin importar la combinación que arme el editor."
            },
            {
                title: "Astro Islands",
                description: "Carga de Javascript 100% bajo demanda, enviando sólo HTML puro donde no hay interactividad."
            }
        ]
    },
    {
        id: "analytics-app",
        title: "Analytics App",
        shortDescription: "Dashboard interno para visualización de KPIs corporativos.",
        fullDescription: "Herramienta PWA para equipos de management que necesitaban consolidar métricas de 5 fuentes de datos distintas. El foco estuvo en la síntesis de información, usando espacios negativos para guiar el ojo y animaciones sutiles que comunican la carga de datos sin usar spinners bloqueantes. Un proyecto donde la UI desaparece y la atención se centra solo en la data.",
        technologies: ["Vue.js", "GraphQL", "Chart.js"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        videoCover: "https://assets.mixkit.co/videos/download/mixkit-woman-working-on-laptop-at-home-40019-medium.mp4",
        category: "Internal Tooling",
        year: "2023",
        role: "Frontend Developer",
        features: [
            {
                title: "Data Aggregation",
                description: "Resolución de capas de datos complejas mediante un gateway de GraphQL optimizado."
            },
            {
                title: "Offline Support",
                description: "Service workers y IndexedDB para permitir revisión de métricas guardadas sin conexión a internet."
            }
        ]
    }
];
