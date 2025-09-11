import {
  books,
  electronics,
  beauty,
  office,
  appliances,
  appliances2,
  travel,
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  book,
  furniture,
  pcs,
  faq1,
  faq3,
  faq2,
  stripe,
  visa,
  mastercard,
  amazon,
} from "../assets/images/index";

// Categories data
const categoriesData = [
  {
    id: "001",
    title: "Appliances",
    category_image: appliances,
  },
  {
    id: "002",
    title: "Office",
    category_image: office,
  },
  {
    id: "003",
    title: "Beauty",
    category_image: beauty,
  },
  {
    id: "004",
    title: "Electronics",
    category_image: appliances2,
  },
  {
    id: "005",
    title: "Travel",
    category_image: travel,
  },
];

// Brands data
const brands = [
  {
    id: "91u91yey1",
    title: "Samsung",
    desc: "Get the best from Samsung store.",
    image_src: brand1,
  },
  {
    id: "fh8h8hc3hc93",
    title: "Apple",
    desc: "Visit the Apple store.",
    image_src: brand2,
  },
  {
    id: "whchwhcwwcj0",
    title: "Thermocool",
    desc: "Cool of with shopping from thermocool.",
    image_src: brand3,
  },
  {
    id: "uft737uf38ft3f",
    title: "Dell",
    desc: "Delivery in 24 hours.",
    image_src: brand4,
  },
  {
    id: "899vie0vj9ev9j",
    title: "Adidas",
    desc: "Find your style from Adidas.",
    image_src: brand5,
  },
  {
    id: "uud8h838g338",
    title: "Lenovo",
    desc: "Get the best from Lenovo store",
    image_src: brand6,
  },
  {
    id: "838h833hch3dh",
    title: "Hp",
    desc: "Faster delivery agt HP",
    image_src: brand7,
  },
  {
    id: "w83h9d2h9d2",
    title: "Nike",
    desc: "Smooth rides on Nike.",
    image_src: brand8,
  },
];

// Discounts data
const discounts = [
  {
    id: "3i38h9h3",
    title: "Explore our Furniture & Home Furnishing Range.",
    price: 100,
    image: furniture,
  },
  {
    id: "jw8ch8cg83g3",
    title: "The new James Great Books are out.",
    price: 40,
    image: book,
  },
  {
    id: "h8g8gei9h39h",
    title: "Discover latest PC's for your new role.",
    price: 999.99,
    image: pcs,
  },
  {
    id: "owjchwcg",
    title: "Explore discounts on Home Appliances.",
    price: 68,
    image: appliances,
  },
];

// Best sellers categories
const bestCategories = [
  {
    id: "29u92h9h92h9hf",
    title: "Software",
  },
  {
    id: "ou9u9cwc",
    title: "Beauty",
  },
  {
    id: "w9ucwchwhch",
    title: "Appliances",
  },
  {
    id: "iwh39fh39hf93fh",
    title: "Fitness",
  },
  {
    id: "w9u93h39383c8h9nc93h",
    title: "Electronics",
  },
  {
    id: "wijf9h9fh9h9f3h",
    title: "Fashion",
  },
];

// FAQs data
const faqs = [
  {
    id: "fhehe8heh",
    title: "Frequently Asked Questions",
    desc: "Updates on the best ways to shop safe in our Stores",
    image_src: faq1
  },
  {
    id: "e9h9eh9c9eh9ceh",
    title: "Online Payment Process",
    desc: "Get to know Our Payment Methods",
    image_src: faq2
  },
  {
    id: "99ucw88cec",
    title: "Frequently Asked Questions",
    desc: "Updates on the best ways to shop safe in our Stores",
    image_src: faq3
  },
]

const footerCards = [
  {
    id: "e939y93eh3e9h9h9",
    card_title: "Stripe",
    card_image: stripe
  },
  {
    id: "ud9h93hfh339h93h3",
    card_title: "Visa",
    card_image: visa
  },
  {
    id: "sjcwihhw9",
    card_title: "Mastercard",
    card_image: mastercard
  },
  {
    id: "jceihchehc99",
    card_title: "Amazon Pay",
    card_image: amazon
  },
]

export { categoriesData, discounts, bestCategories, brands, faqs, footerCards };