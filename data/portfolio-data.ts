export const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Quem Sou', href: '#quem-sou' },
  { name: 'Formação', href: '#formacao' },
  { name: 'Projetos', href: '#projetos' },
  { name: 'Eventos', href: '#eventos' },
  { name: 'Contato', href: '#contato' },
]

export const socialLinks = [
  { name: 'WhatsApp', icon: 'MessageCircle', href: 'https://wa.me/5511999999999' },
  { name: 'GitHub', icon: 'Github', href: 'https://github.com/pablosantos' },
  { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com/in/pablosantos' },
  { name: 'Email', icon: 'Mail', href: 'mailto:pablo@email.com' },
  { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com/pablosantos' },
]

export const aboutText = `Desenvolvedor Full-Stack com experiência em tecnologias como: Java, Spring Boot, Vue.js, Nuxt, Flutter, JavaScript, Git, Postman, TypeScript, TailwindCSS, Banco de dados, APIs Rest e dentre outras. Como desenvolvedor estou sempre buscando por soluções práticas e eficientes para criar aplicações web escaláveis e funcionais. Desde então sempre me dedicando na construção de aplicações com foco em responsividade, otimizações de SEO, acessibilidade e performance. Nas próximas sessões você encontrará alguns projetos desenvolvidos por mim e as principais tecnologias que utilizo.`

export const floatingIcons = [
  { name: 'Vue', color: '#42b883' },
  { name: 'React', color: '#61dafb' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Java', color: '#f89820' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'Flutter', color: '#02569b' },
  { name: 'Angular', color: '#dd0031' },
  { name: 'NodeJS', color: '#68a063' },
]

export const certificates = [
  {
    id: 1,
    title: 'Bootcamp da Dio',
    institution: 'DIO',
    description: 'Participei do Bootcamp da DIO com HTML, CSS e JavaScript, onde pude melhorar meus conhecimentos e minhas habilidades.',
    image: '/certificates/dio.png',
  },
  {
    id: 2,
    title: 'Arduino Day',
    institution: 'IFCE',
    description: 'Participei no Arduino Day na programação de seguidores de linha e projeto de exposição utilizando a linguagem C++ para desenvolver os sistemas.',
    image: '/certificates/arduino.png',
  },
  {
    id: 3,
    title: 'Fundação Bradesco',
    institution: 'Microsoft',
    description: 'Participei do curso de criação de site usando HTML, CSS e JavaScript da fundação bradesco onde pude aprimorar minhas abilidades.',
    image: '/certificates/bradesco.png',
  },
]

export const courses = [
  {
    id: 1,
    name: '@nuxt/ui',
    description: 'The Intuitive UI Library powered by Reka UI and Tailwind CSS.',
    stars: '770.0K',
    forks: '6.2K',
  },
  {
    id: 2,
    name: '@nuxt/content',
    description: 'The file-based CMS with support for Markdown, YAML, JSON.',
    stars: '366.2K',
    forks: '3.8K',
  },
  {
    id: 3,
    name: '@nuxt/devtools',
    description: 'Visual tools that help you to know your Nuxt application better.',
    stars: '4.1M',
    forks: '3.2K',
  },
  {
    id: 4,
    name: '@nuxt/image',
    description: 'Optimized images for Nuxt with automatic srcset and lazy loading.',
    stars: '234.5K',
    forks: '2.1K',
  },
  {
    id: 5,
    name: '@nuxt/fonts',
    description: 'Automatically optimized fonts for Nuxt applications.',
    stars: '125.8K',
    forks: '1.5K',
  },
]

export const skills = {
  languages: {
    title: 'Languages',
    icon: 'Code2',
    items: [
      'Java 8+ (Core, Collections, Streams)',
      'Spring Boot',
      'Spring MVC & Data JPA',
      'Hibernate/JPA',
      'HTML5, CSS3, JavaScript',
      'TypeScript',
      'Angular',
    ],
  },
  database: {
    title: 'Database',
    icon: 'Database',
    items: [
      'MySQL & PostgreSQL',
      'MongoDB (NoSQL)',
      'SQL (queries, joins, procedures)',
      'Oracle Database',
    ],
  },
  devops: {
    title: 'DevOps',
    icon: 'Terminal',
    items: [
      'Git & GitHub',
      'Maven & Gradle',
      'Docker',
      'Postman & Insomnia',
      'IntelliJ IDEA & Eclipse',
    ],
  },
  patterns: {
    title: 'Patterns',
    icon: 'Layers',
    items: [
      'REST Architecture',
      'MVC, Factory, DAO',
      'Agile (Scrum)',
      'Test Driven Development',
    ],
  },
}
