import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/storybookcover.png";
import psale2 from "../assets/novelcover.png";
import psale3 from "../assets/textbookcover.png";
import physbook from "../assets/physicsbook.png"
import physadv from "../assets/physicsadv.png"

import thnovel from "../assets/thriller-novel.png"
import students from "../assets/collegestudents.png"

import product1 from "../assets/storybookcover.png";
import product2 from "../assets/novelcover.png";
import product3 from "../assets/physicsadv.png"
import product4 from "../assets/thriller-novel.png";
import product5 from "../assets/textbookcover.png";
import product6 from "../assets/physicsbook.png";
import product7 from "../assets/storybookcover.png";
import product8 from "../assets/textbookcover.png";
import product9 from "../assets/novelcover.png";
import product10 from "../assets/physicsadv.png";
import product11 from "../assets/textbookcover.png";
import product12 from "../assets/thriller-novel.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Top Achievers",
  subtitle: "Are All-Time Learners",
  img: product2,
  btntext: "Explore Product",
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Popular Categories",
  items: [
    {
      id: "0p0x1",
      title: "PAMPHLETS",
      text: "Secondary Level For All Grades.",
      rating: "4.9",
      btn: "Shop Now",
      img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "STORY BOOKS",
      text: "Joy Time For Kids",
      rating: "4.5",
      btn: "Shop Now",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "NOVELS",
      text: "Thrilling Stories",
      rating: "5+",
      btn: "Shop Now",
      img: psale2,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "Havard Institute",
  text: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636 as Harvard College and named for its first benefactor, the Puritan clergyman John Harvard.",
  btn: "Explore More",
  url: "",
  img: students,
};

const sneaker = {
  heading: "BOOK LAUNCH SEGMENT",
  title: "Iron Sniper By David Healey",
  text: "A thrilling novel of a young man seeking revenge against his town.",
  btn: "Explore More",
  url: "",
  img: thnovel,
};

const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: "Think And Grow Rich",
      text: "Napoleon Hill",
      rating: "5+",
      btn: "Buy Now",
      img: product7,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "SpongeBob",
      text: "Nicolodean Series",
      rating: "5+",
      btn: "Buy Now",
      img: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Physics",
      text: "Advanced Level",
      rating: "5+",
      btn: "Buy Now",
      img: product3,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Biology",
      text: "Advanced Level",
      rating: "5+",
      btn: "Buy Now",
      img: product4,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Chemistry",
      text: "Advanced Level",
      rating: "5+",
      btn: "Buy Now",
      img: product5,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "All Subjects G-7",
      text: "Questions And Answers",
      rating: "5+",
      btn: "Buy Now",
      img: product6,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "All Subjects G-9",
      text: "Questions And Answers",
      rating: "5+",
      btn: "Buy Now",
      img: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "All Subjects G-9",
      text: "Questions And Answers",
      rating: "5+",
      btn: "Buy Now",
      img: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },

  ],
};


const story = {
  title: "Categories",
  news: [
    {
      title: "Pamphlets",
      text: "Jordan Brands signature model for the past few years, Jayson Tatum will be dawning the Air Jordan 37 this season before attaining potentially his first signature sneaker with Jumpman, which he rumored to be in the works recently via his Twitter.",
      img: product1,
      url: "",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "SHOP NOW"
    },
    {
      title: "Story Books",
      text: "Arriving right time for the Fall, this upcoming take on the Zoom Freak 4 seemingly draws inspiration from Thanksgiving. Orange and brown, two staples of the holiday, are used throughout the upper, dressing the parts not bathed in shades of grey.",
      img: product10,
      time: "41 Mins",
      like: "5/5",
      url: "",
      by: "Michael Le",
      btn: "SHOP NOW"
    },
    {
      title: "Novels",
      text: "The Nike Air Max Plus has enjoyed the reveal of several colorways these last few of months. And as we officially embark on the Fall season, an additional set have been added to the calendar, including this newly-revealed grey and orange colorway.",
      img: physadv,
      time: "2 Hours",
      url: "",
      like: "5/5",
      by: "Michael Le",
      btn: "SHOP NOW"
    },
    {
      title: "Primary Books",
      text: "Air Jordan Retro High OG popular series of AJ1s with the popular color-blocking with the original Yellow Toe flavor. The colorway was revealed back PE by musician Zach Myers, nearly four years later, Jordan fanatics will finally get their shot a GR release.",
      img: physbook,
      time: "7 Months",
      url: "",
      like: "5/5",
      by: "Sneaker News",
      btn: "SHOP NOW"
    },
    {
      title: "Secondary Books",
      text: "The Bred coloryway of Zoom GT Cut 2 will be first to release this Friday, For Nike Members Nation World Wide while Sabrina Ionescus colorway is set for an October 13th release date. In the meantime, enjoy official images of both colorways below.",
      img: product4,
      time: "1 Months",
      url: "",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "SHOP NOW"
    },
    {
      title: "Tertiary Books",
      text: "For the first time in over a decade, a signature basketball silhouette is being made for one of the WNBA’s best and brightest stars, Olympic Gold Medalist and Seattle Storm superstar Breanna Stewart. Puma Stewie 1 Quiet Fire will be available this Friday.",
      img: product6,
      time: "25 Days",
      url: "",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "SHOP NOW"
    },
    {
      title: "Motivation",
      text: "From lace toggles to city-inspired makeovers, the Nike Air Force 1 has delivered a number of unique modifications. Here though, the brand is taking things down quite a few notches, opting for a simple colorway helmed primarily by black and Laser Orange.",
      img: product11,
      url: "",
      time: "6 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "SHOP NOW"
    },
    {
      title: "Discovery",
      text: "The world of Sanrio is vast and replete with many an iconic character. Few among the family, though, rival the immense influence of Hello Kitty, who’s played mascot for everything from Pringles merchandise to sneaker collaborations.",
      img: product1,
      url: "",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "SHOP NOW"
    },
    {
      title: "Business books",
      text: "The nighttime aesthetic seen here is applied to the tumbled black leather panels of the upper and perforated mesh construction of the tongue while Royal trim and forefoot Swooshes provide additional intrigue to the darkened palette.",
      img: product7,
      url: "",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "SHOP NOW"
    },
  ],
};


const footerAPI = {
  titles: [{ title: "About bookhub" }, { title: "Get Help" }, { title: "Company" }],
  links: [
    [
      { link: "News" },
      { link: "Careers" },
      { link: "Investors" },
      { link: "Prupose" },
      { link: "Sustainability" },
    ],
    [
      { link: "Order Status" },
      { link: "Shipping & Delivery" },
      { link: "Payment Options" },
      { link: "Gift Card Balance" },
      { link: "Contact Us" },
      { link: "FAQ" },
      { link: "Blog" },
    ],
    [
      { link: "Gift Cards" },
      { link: "Promotions" },
      { link: "Find A Store" },
      { link: "Signup" },
      { link: "bookhub Journal" },
      { link: "Send Us Feeback" },
    ],
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };
