import Navbar from "./Navbar";
import Billing from "./Billing";
import CardDeal from "./CardDeal";
import Business from "./Business";
import CTA from "./CTA";
import Stats from "./Stats";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Hero from "./Hero";
import Admin from "./Admin";
import Try from "./Try";

export {
  Navbar,
  Billing,
  CardDeal,
  Business,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
  Admin,
  Try,
};


// test firebase
import { db, auth, storage } from '../firebase';

console.log("Firestore:", db);
console.log("Auth:", auth);
console.log("Storage:", storage);
