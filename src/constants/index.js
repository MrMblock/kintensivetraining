import { people01, people02, people03, facebook, instagram} from "../assets";
import { Star, Shield, Send } from "lucide-react";

export const navLinks = [
  {
    link: "home",
    title: "Accueil",
  },
  {
    link: "k",
    title: "K.",
  },
  {
    link: "intensive",
    title: "Intensive",
  },
  {
    link: "training",
    title: "Training",
  },
  {
    link: "club",
    title: "Club",
  },
  {
    link: "press",
    title: "Ils parlent de nous",
  },
  {
    link: "try",
    title: "Séance d'essai",
  }
];

export const features = [
  {
    id: "feature-1",
    icon: Star,
    title: "Intensité",
    content:
      "Cours HIIT et Cross Training pour repousser tes limites et améliorer rapidement ta condition.",
  },
  {
    id: "feature-2",
    icon: Shield,
    title: "Sécurité",
    content:
      "Des coachs certifiés et un encadrement attentif pour t'entraîner en toute sécurité.",
  },
  {
    id: "feature-3",
    icon: Send,
    title: "Coaching",
    content:
      "Programmes personnalisés et suivi pour atteindre tes objectifs de forme et de performance.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Meilleur endroit pour le dépassement de soi, une ambiance que tu ne trouves pas ailleurs🔥",
    name: "Mady",
    title: "Membre",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Vous pouvez y allez les yeux fermés! Il y en a pour tous les niveaux et le coach s'adapte à tes besoins.",
    name: "Didiverte",
    title: "Membre",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Cours de yoga au top👍 un complément essentiel au cross-training pour gagner en mobilité et en souplesse.",
    name: "Nono9475",
    title: "Membre",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Clients",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Entreprises",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Coachs diplômés",
    value: "30+",
  },
];

export const footerLinks = [
  {
    title: "Liens utiles",
    links: [
      {
        name: "Contenu",
        link: "#",
      },
      {
        name: "Comment ça marche",
        link: "#",
      },
      {
        name: "Créer",
        link: "#",
      },
      {
        name: "Explorer",
        link: "#",
      },
      {
        name: "Conditions générales",
        link: "#",
      },
    ],
  },
  {
    title: "Communauté",
    links: [
      {
        name: "Centre d'aide",
        link: "#",
      },
      {
        name: "Partenaires",
        link: "#",
      },
      {
        name: "Suggestions",
        link: "#",
      },
      {
        name: "Blog",
        link: "#",
      },
      {
        name: "Newsletters",
        link: "#",
      },
    ],
  },
  {
    title: "Partenaires",
    links: [
      {
        name: "Nos partenaires",
        link: "#",
      },
      {
        name: "Devenir partenaire",
        link: "#",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/k.intensive.training.club/?hl=en",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/profile.php?id=100066828435077",
  },
];

export const testimonials = [
  {
    id: "testimonial-1",
    type: "written",
    name: "Mady",
    title: "Membre",
    content: "Meilleur endroit pour le dépassement de soi, une ambiance que tu ne trouves pas ailleurs🔥",
    date: "2024"
  },
  {
    id: "testimonial-2",
    type: "written",
    name: "Didiverte",
    title: "Membre",
    content: "Vous pouvez y allez les yeux fermés! Il y en a pour tous les niveaux et le coach s'adapte à tes besoins.",
    date: "2024"
  },
  {
    id: "testimonial-3",
    type: "written",
    name: "Nono9475",
    title: "Membre",
    content: "Cours de yoga au top👍 un complément essentiel au cross-training pour gagner en mobilité et en souplesse.",
    date: "2024"
  },
  {
    id: "testimonial-4",
    type: "video",
    name: "Témoignage vidéo",
    title: "Membre",
    content: "Bientôt disponible",
    date: "2024"
  }
];