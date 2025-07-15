import { Code, Database, Palette, Globe, BotIcon } from 'lucide-react';

export const skills = [
  {
    id: 1,
    name: "Frontend",
    icon: Code,
    items: ["React", "JavaScript", "HTML/CSS", "Tailwind"]
  },
  {
    id: 2,
    name: "Backend",
    icon: Database,
    items: ["Node.js", "Python", "Java", "MongoDB", "PostgreSQL"]
  },
  {
    id: 3,
    name: "Chatbot",
    icon: BotIcon,
    items: ["Google Dialogflow", "Microsoft Copilot Studio", "Azure Bot Framework", "Kore.AI"]
  },
  {
    id: 4,
    name: "Tools",
    icon: Globe,
    items: ["Git", "Docker", "Google Cloud", "Azure", "Jest"]
  }
];