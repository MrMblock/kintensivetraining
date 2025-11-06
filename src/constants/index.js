import { people01, people02, people03, facebook, instagram} from "../assets";
import { Star, Shield, Send } from "lucide-react";

export const navLinks = [
  {
    id: "home",
    title: "Accueil",
  },
  {
    id: "k",
    title: "K.",
  },
  {
    id: "intensive",
    title: "Intensive",
  },
  {
    id: "training",
    title: "Training",
  },
  {
    id: "club",
    title: "Club",
  },
  {
    id: "press",
    title: "Ils parlent de nous",
  },
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
      "Le K. m'a transformé : plus de confiance, une meilleure forme et des résultats concrets.",
    name: "Fernand Lopez",
    title: "Membre",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Ambiance motivante et coaching professionnel — j'atteins enfin mes objectifs.",
    name: "Gabriel",
    title: "Membre",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Des séances intenses et adaptées qui m'ont permis de gagner en puissance et en endurance.",
    name: "Sidonie",
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