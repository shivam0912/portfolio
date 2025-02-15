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
    "I’m a passionate [final year MCA Student](#education) with a deep love for coding and technology. My journey has led me to develop a strong foundation in [Web development, DevOps, and the emerging world of Web3](#education). I thrive on building innovative [products](#projects) and sharing my insights through blogging. Always eager to expand my skills and tackle new challenges, I’m actively seeking lucrative opportunities to leverage my tech expertise and drive impactful projects. Whether it’s through creating seamless web experiences or exploring the future of decentralized applications, I’m excited to contribute to the tech landscape and grow alongside it.",
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
      company: "Freelance Web Developer",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/memoji.jpeg",
      start: "2024",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Open Source",
      badges: [],
      href: "https://github.com/shivam0912",
      location: "Remote",
      title: "Contributor",
      logoUrl: "/github-mark.png",
      start: "2023",
      end: "Present",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "100xDevs",
      href: "https://app.100xdevs.com",
      degree: "Full Stack Web Development, DevOps & Web3 Bootcamp",
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
      title: "Campus Connect",
      href: "https://campus-connect-8pea.vercel.app",
      dates: "April 2024",
      active: true,
      description:'Campus Connect is a MERN stack platform that helps students buy and sell pre-owned items within their campus community. It allows students to list new, old, or leftover items, making it easier for others to find affordable options and save money.',
      technologies: [
        "ReactJS",
        "Javascript",
        "Node.js",
        "CSS",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://campus-connect-8pea.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shivam0912/campus-connect",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/campus-connect.png",
      video: "",
    },
    {
      title: "The Ultimate Blog",
      href: "https://the-ultimate-blog.vercel.app",
      dates: "December 2024",
      active: true,
      description:
        "The Ultimate Blog is a modern blogging platform built with React.js, Tailwind CSS, Clerk, and MongoDB, designed for seamless content creation and management. It features a sleek, user-friendly interface, real-time data handling, and secure authentication, making it an ideal solution for writers and readers alike.",
      technologies: [
        "ReactJS",
        "Node.js",
        "MongoDB",
        "TailwindCSS",
        "Clerk",

      ],
      links: [
        {
          type: "Website",
          href: "https://the-ultimate-blog.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shivam0912/theultimate-blog",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tub.png",
      video: "",
    },
    {
      title: "Spotify-but-Better",
      href: "https://spotify-but-better-e0ep.onrender.com/",
      dates: "February 2025",
      active: true,
      description:
        "A modern music streaming application with real-time chat, user authentication, and a sleek UI. Built using Node.js, Express, Socket.io, Clerk for authentication, React, TailwindCSS, and ShadCN.",
      technologies: [
        "ReactJS",
        "Javascript",
        "Typescript",
        "MongoDB",
        "Clerk",
        "Socket.io",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://spotify-but-better-e0ep.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shivam0912/spotify-but-better",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/portfolio.png",
      video: "",
    },
    {
      title: "p2p video calling app",
      href: "https://github.com/shivam0912/webRTC-p2p-call-app",
      dates: "July 2024",
      active: true,
      description:
        "This real-time video calling app enables seamless peer-to-peer communication with high-quality video and audio. Built using WebRTC and Socket.io, it provides a smooth and reliable calling experience without requiring third-party servers for media streaming.",
      technologies: [
        "ReactJS",
        "Javascript",
        "socket.io",
        "WebRTC",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/shivam0912/webRTC-p2p-call-app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shivam0912/webRTC-p2p-call-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Todolist.png",
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
