import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagram,
} from "react-icons/fa";

export const footerLinks = [
  { name: "home", pathname: "/" },
  { name: "stories", pathname: "/stories" },
  { name: "features", pathname: "/features" },
  { name: "pricing", pathname: "/pricing" },
];

export const footerSocials = [
  { pathname: "https://www.facebook.com/", icon: <FaFacebookSquare /> },
  { pathname: "https://www.youtube.com/", icon: <FaYoutube /> },
  { pathname: "https://www.twitter.com/", icon: <FaTwitterSquare /> },
  { pathname: "https://www.pinterest.com/", icon: <FaPinterestSquare /> },
  { pathname: "https://www.instagram.com/", icon: <FaInstagram /> },
];
