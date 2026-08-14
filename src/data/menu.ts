import appetizers from "@/assets/appetizers.jpg";
import mains from "@/assets/mains.jpg";
import burgers from "@/assets/burgers.jpg";
import pizzas from "@/assets/pizzas.jpg";
import desserts from "@/assets/desserts.jpg";
import drinks from "@/assets/drinks.jpg";
import specials from "@/assets/specials.jpg";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  blurb: string;
  image: string;
  items: MenuItem[];
};

export const categories: MenuCategory[] = [
  {
    id: "specials",
    label: "Chef Specials",
    blurb: "Signature plates from our kitchen, available while they last.",
    image: specials,
    items: [
      {
        name: "Dry-Aged Ribeye",
        description: "45-day aged ribeye, truffle butter, charred rosemary, bone marrow jus.",
        price: "$48",
        tag: "Signature",
      },
      {
        name: "Saffron Lobster Risotto",
        description: "Carnaroli rice, butter-poached lobster tail, saffron, aged parmesan.",
        price: "$42",
      },
      {
        name: "Duck Breast à l'Orange",
        description: "Seared duck, blood orange glaze, confit potatoes, watercress.",
        price: "$39",
        tag: "Chef's pick",
      },
    ],
  },
  {
    id: "appetizers",
    label: "Appetizers",
    blurb: "Small plates made for sharing before the main event.",
    image: appetizers,
    items: [
      {
        name: "Crispy Calamari",
        description: "Lightly battered squid, lemon aioli, sea salt, fresh parsley.",
        price: "$14",
      },
      {
        name: "Burrata & Heirloom Tomato",
        description: "Creamy burrata, basil oil, aged balsamic, toasted sourdough.",
        price: "$16",
        tag: "Vegetarian",
      },
      {
        name: "Truffle Arancini",
        description: "Risotto croquettes, black truffle, mozzarella heart, parmesan cream.",
        price: "$13",
      },
      {
        name: "Garlic Butter Shrimp",
        description: "Pan-seared shrimp, chili, white wine garlic butter, grilled bread.",
        price: "$17",
      },
    ],
  },
  {
    id: "mains",
    label: "Main Courses",
    blurb: "Hearty, carefully plated dishes built around seasonal produce.",
    image: mains,
    items: [
      {
        name: "Pan-Seared Salmon",
        description: "Atlantic salmon, grilled asparagus, lemon beurre blanc, dill.",
        price: "$32",
      },
      {
        name: "Herb Roasted Chicken",
        description: "Half free-range chicken, thyme jus, buttered potato purée.",
        price: "$28",
      },
      {
        name: "Braised Short Rib",
        description: "Slow-braised beef, red wine reduction, root vegetables, gremolata.",
        price: "$36",
      },
      {
        name: "Wild Mushroom Pappardelle",
        description: "Hand-cut pasta, porcini, sage brown butter, pecorino.",
        price: "$26",
        tag: "Vegetarian",
      },
    ],
  },
  {
    id: "burgers",
    label: "Burgers",
    blurb: "Smash-grilled patties on house-baked brioche, served with fries.",
    image: burgers,
    items: [
      {
        name: "The Classic Double",
        description: "Two beef patties, aged cheddar, lettuce, pickles, house sauce.",
        price: "$19",
        tag: "Most loved",
      },
      {
        name: "Smoked Bacon & Onion",
        description: "Beef patty, maple bacon, caramelized onion, smoked gouda.",
        price: "$21",
      },
      {
        name: "Truffle Mushroom Burger",
        description: "Swiss cheese, sautéed mushrooms, truffle mayo, arugula.",
        price: "$22",
      },
      {
        name: "Garden Chickpea Burger",
        description: "Chickpea and beet patty, avocado, tahini yogurt, sprouts.",
        price: "$18",
        tag: "Vegan",
      },
    ],
  },
  {
    id: "pizzas",
    label: "Pizzas",
    blurb: "72-hour fermented dough, fired at 450°C in our stone oven.",
    image: pizzas,
    items: [
      {
        name: "Margherita D.O.P.",
        description: "San Marzano tomato, fior di latte, fresh basil, olive oil.",
        price: "$18",
      },
      {
        name: "Prosciutto & Arugula",
        description: "Mozzarella, 18-month prosciutto, arugula, shaved parmesan.",
        price: "$23",
      },
      {
        name: "Diavola",
        description: "Spicy salami, chili honey, mozzarella, oregano.",
        price: "$21",
        tag: "Spicy",
      },
      {
        name: "Quattro Formaggi",
        description: "Mozzarella, gorgonzola, taleggio, parmesan, cracked pepper.",
        price: "$22",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    blurb: "Made in-house every morning by our pastry team.",
    image: desserts,
    items: [
      {
        name: "Molten Chocolate Cake",
        description: "Warm dark chocolate fondant, vanilla bean ice cream, berries.",
        price: "$12",
        tag: "Signature",
      },
      {
        name: "Classic Tiramisu",
        description: "Espresso-soaked savoiardi, mascarpone cream, cocoa.",
        price: "$11",
      },
      {
        name: "Crème Brûlée",
        description: "Tahitian vanilla custard, caramelized sugar crust.",
        price: "$10",
      },
      {
        name: "Lemon & Basil Sorbet",
        description: "House-churned sorbet, candied zest, mint.",
        price: "$9",
        tag: "Vegan",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    blurb: "Craft cocktails, low-intervention wine and non-alcoholic pours.",
    image: drinks,
    items: [
      {
        name: "Smoked Old Fashioned",
        description: "Bourbon, demerara, aromatic bitters, orange oil, oak smoke.",
        price: "$16",
      },
      {
        name: "Elderflower Spritz",
        description: "Prosecco, elderflower, soda, cucumber ribbon.",
        price: "$14",
      },
      {
        name: "House Red / White",
        description: "Rotating selection by the glass — ask your server.",
        price: "$11",
      },
      {
        name: "Citrus Basil Cooler",
        description: "Fresh lemon, basil, honey syrup, sparkling water.",
        price: "$8",
        tag: "Non-alcoholic",
      },
    ],
  },
];