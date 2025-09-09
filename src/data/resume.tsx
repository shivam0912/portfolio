import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shivam Gupta",
  initials: "Shivam",
  url: "https://github.com/shivam0912",
  location: "Ayodhya, Uttar Pradesh, India",
  locationLink: "https://www.google.com/maps/place/ayodhya",
  description:
    "Tech Enthusiast turned Software Engineer . I love building things and helping people. Very active on Twitter.",
  summary:
    "I'm a passionate [Full Stack Developer](#education) with extensive expertise in AI-powered development tools and modern web technologies. My journey has led me to develop a strong foundation in [Web development](#education). I specialize in working with cutting-edge AI tools like Lovable, Cursor, Replit, and modern platforms like Supabase to build innovative [products](#projects) efficiently. I thrive on creating seamless web experiences and sharing my insights through blogging. Always eager to expand my skills and tackle new challenges, I'm actively seeking lucrative opportunities to leverage my tech expertise and AI tool proficiency to drive impactful projects and deliver exceptional results for clients.",
  avatarUrl: "/profile.png",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "Git",
    "MongoDB",
    "Postgres",
    "Docker",
    "Prisma",
    "WebSocket",
    "WebRTC",
    "AWS",
    "CI/CD",
    "OpenAPI",
    "Lovable",
    "Cursor",
    "Supabase",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    
  ],
  contact: {
    email: "shivam.gupta.idplc@gmail.com",
    tel: "+91 8840748023",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shivam0912",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/shivam-gupta-19y",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/hmmm_shivam",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:shivam.gupta.idplc@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Upwork Freelancer",
      href: "https://www.upwork.com/freelancers/shivamxdev",
      badges: ["Top Rated", "100% Job Success"],
      location: "Remote",
      title: "Full Stack Developer & AI Specialist",
      logoUrl: "/memoji.jpeg",
      start: "2024",
      end: "Present",
      description:
        "Top Rated freelancer on Upwork with 100% Job Success Score, delivering high-quality web development solutions using modern technologies. Specializing in Full Stack Development with expertise in MERN stack, Lovable.dev, Cursor, and Replit. Successfully completed projects involving React/Next.js applications, Supabase integration, and AI-powered web solutions for clients worldwide.",
    },
  ],
  education: [
    {
      school: "100xDevs",
      href: "https://app.100xdevs.com",
      degree: "Full Stack Web Development Bootcamp",
      logoUrl: "/100xDevs.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "NIT Bhopal, India",
      href: "https://manit.ac.in/",
      degree: "Master of Computer Applications",
      logoUrl: "/manit-logo.jpg",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "PeachHaus Property Management Platform",
      href: "https://www.peachhausgroup.com/",
      dates: "December 2024 - January 2025",
      active: true,
      description:
        "Enhanced Georgia's premier property management platform by resolving critical form-related issues, implementing automated n8n workflows for business process optimization, and integrating GoHighLevel CRM system. Improved user experience for 345+ satisfied property owners and streamlined operations for short-term, mid-term, and long-term rental management.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Javascript",
        "n8n Automation",
        "GoHighLevel CRM",
        "API Integration",
        "Form Validation",
        "Workflow Automation",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.peachhausgroup.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/peachhouse.png",
      video: "",
    },
    {
      title: "MyndfulMind AI Chatbot Platform",
      href: "https://www.myndfulmind.com/",
      dates: "November 2024 - December 2024",
      active: true,
      description:
        "Developed an advanced AI chatbot system with multiple personas, each equipped with unique system prompts to deliver personalized conversational experiences. Implemented sophisticated prompt engineering techniques to ensure each persona maintains distinct personality traits, communication styles, and expertise areas, significantly enhancing user engagement and satisfaction.",
      technologies: [
        "ReactJS",
        "Node.js",
        "OpenAI API",
        "Prompt Engineering",
        "AI Development",
        "System Prompts",
        "Chatbot Architecture",
        "Persona Management",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.myndfulmind.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/myndfull.png",
      video: "",
    },
    {
      title: "MasterTrade Schools Learning Platform",
      href: "https://www.mastertradeschools.com/",
      dates: "October 2024 - November 2024",
      active: true,
      description:
        "Built a comprehensive MVP from scratch for a professional trade learning platform featuring AI-powered personalized learning paths, course management system, and interactive training modules. Developed the entire platform architecture including user authentication, course delivery system, progress tracking, and instructor dashboard for electrical, plumbing, HVAC, welding, and carpentry programs.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "Supabase",
        "AI Integration",
        "Course Management",
        "User Authentication",
        "Progress Tracking",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.mastertradeschools.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mastertradeschool.png",
      video: "",
    },
    {
      title: "Portfolio",
      href: "",
      dates: "January 2025",
      active: true,
      description:
        "Developed an amazing Portfolio to showase my work to potentiol recruiters. I used latest web desiging techniques like [TailwindCSS](https://tailwindcss.com/) and [Shadcn UI](https://ui.shadcn.com/) to make it look good and [Next.js](https://nextjs.org/) to make it fast.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portfolio.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "SIH Hackathon",
      dates: "September 2024 - Present",
      location: "Kolkata, India",
      description:
        "Developed a web application that helps in ships re-routing using cuttinf edge traffic and optimizing the time taken to reach the destination.",
      image: "Smart-India-Hackathon-2023.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/shivam0912",
        },
      ],
    },
  ],
} as const;
