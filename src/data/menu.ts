export interface MenuItem {
  name: string;
  desc?: string;
  price: number;
  image?: string;
  bestseller?: boolean;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const MENU_DATA: MenuCategory[] = [
  {
    name: "Hot Coffee",
    items: [
      { name: "Espresso", desc: "A concentrated shot of freshly brewed coffee.", price: 89 },
      { name: "Americano", desc: "A rich shot of espresso topped with hot water.", price: 109 },
      { name: "Cappuccino", desc: "A rich shot of espresso topped with mildly sweet flavouring from milk.", price: 129 },
      { name: "Cafe Latte", desc: "A rich creamy blend of natural sweetness from milk with a freshly brewed coffee shot.", price: 129 },
      { name: "Hazelnut Latte", desc: "Our classic latte blended with a sweet & nutty character.", price: 149 },
      { name: "Cafe Mocha", desc: "Rich mocha flavour infused with the bitterness of coffee.", price: 149 },
    ]
  },
  {
    name: "Iced Coffee & Frappes",
    items: [
      { name: "Iced Americano", desc: "A freshly brewed coffee shot poured over ice.", price: 149 },
      { name: "Vietnamese Iced Coffee", desc: "An exotic beverage with bold espresso, sweetened condensed milk.", price: 229 },
      { name: "Java Chip Frappe", desc: "A blend of espresso & java chips to enhance rich flavour of chocolate.", price: 249, bestseller: true },
      { name: "Caramel Frappe", desc: "Creamy frappe made with a rich swirl of caramel.", price: 199 },
    ]
  },
  {
    name: "Breakfast & Eggs",
    items: [
      { name: "Masala Omelette", price: 170 },
      { name: "Caprese Egg Croissant", price: 280, bestseller: true },
      { name: "Smashed Avocado Toast", price: 250 },
      { name: "Breakfast Platter", desc: "Choice of eggs, bread, hashbrown, chicken sausage, and more.", price: 350 },
    ]
  },
  {
    name: "Sandwiches & Croissants",
    items: [
      { name: "Tomato Grilled Cheese", desc: "A perfect combination of mozzarella cheese & tangy tomatoes.", price: 220 },
      { name: "Club Chicken Sandwich", desc: "Chicken strips, fried egg and cheese. Served with fries.", price: 280, bestseller: true },
      { name: "Croissant Grilled Chicken Pesto", price: 320 },
    ]
  },
  {
    name: "Main Course",
    items: [
      { name: "Katsu Curry Chicken", desc: "Japanese rice served with creamy sauce, crispy fried chicken.", price: 350, bestseller: true },
      { name: "Harissa Grilled Chicken", price: 400 },
      { name: "Chicken Stroganoff", price: 400 },
    ]
  },
  {
    name: "Pizza & Pasta",
    items: [
      { name: "Classic Margherita", price: 300 },
      { name: "Demitasse Special Pizza", price: 400 },
      { name: "Mac & Cheese", price: 280 },
      { name: "Classic Pesto Pasta", price: 320 },
    ]
  }
];
