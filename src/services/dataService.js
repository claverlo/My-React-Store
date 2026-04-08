const catalog = [
  {
    title: "LeBron James Jersey",
    category: "Jersey",
    gender: "Unisex",
    price: 99,
    images: [
      "src/Images/1.avif",
      "src/Images/1b.avif",
      "src/Images/1c.avif",
      "src/Images/1d.avif"
    ],
    _id: 1,
    sizes: [
      { label: "S", stock: 0 },
      { label: "M", stock: 100 },
      { label: "L", stock: 0 },
      { label: "XL", stock: 100 },
      { label: "XXL", stock: 100 }
    ]
  },
  {
    title: "Stephen Curry Jersey",
    category: "Jersey",
    gender: "Unisex",
    price: 99.99,
    image: "src/Images/2.avif",
    _id: 2,
    sizes: [
      { label: "S", stock: 100 },
      { label: "M", stock: 100 },
      { label: "L", stock: 100 },
      { label: "XL", stock: 100 },
      { label: "XXL", stock: 100 }
    ]
  },
  {
    title: "Shai Gilgeous-Alexander Jersey",
    category: "Jersey",
    gender: "Unisex",
    price: 99.99,
    image: "src/Images/3.avif",
    _id: 3,
    sizes: [
      { label: "S", stock: 100 },
      { label: "M", stock: 100 },
      { label: "L", stock: 100 },
      { label: "XL", stock: 100 },
      { label: "XXL", stock: 100 }
    ]
  },
  {
    title: "Nikola Jokic Jersey",
    category: "Jersey",
    gender: "Unisex",
    price: 99.99,
    image: "src/Images/4.avif",
    _id: 4,
    sizes: [
      { label: "S", stock: 100 },
      { label: "M", stock: 100 },
      { label: "L", stock: 100 },
      { label: "XL", stock: 100 },
      { label: "XXL", stock: 100 }
    ]
  },
  {
    title: "Victor Wembanyama Jersey",
    category: "Jersey",
    gender: "Unisex",
    price: 99.99,
    image: "src/Images/5.avif",
    _id: 5,
    sizes: [
      { label: "S", stock: 100 },
      { label: "M", stock: 100 },
      { label: "L", stock: 100 },
      { label: "XL", stock: 100 },
      { label: "XXL", stock: 100 }
    ]
  },
  {
    title: "Anthony Edwards Jersey",
    category: "Jersey",
    gender: "Unisex",
    price: 99.99,
    image: "src/Images/6.avif",
    _id: 6,
    sizes: [
      { label: "S", stock: 100 },
      { label: "M", stock: 100 },
      { label: "L", stock: 100 },
      { label: "XL", stock: 100 },
      { label: "XXL", stock: 100 }
    ]
  },
  {
    title: "Jalen Brunson Jersey",
    category: "Jersey",
    gender: "Unisex",
    price: 99.99,
    image: "src/Images/7.avif",
    _id: 7,
    sizes: [
      { label: "S", stock: 100 },
      { label: "M", stock: 100 },
      { label: "L", stock: 100 },
      { label: "XL", stock: 100 },
      { label: "XXL", stock: 100 }
    ]
  },
  {
    title: "Kevin Durant Jersey",
    category: "Jersey",
    gender: "Unisex",
    price: 99.99,
    image: "src/Images/8.jpg",
    _id: 8,
    sizes: [
      { label: "S", stock: 100 },
      { label: "M", stock: 100 },
      { label: "L", stock: 100 },
      { label: "XL", stock: 100 },
      { label: "XXL", stock: 100 }
    ]
  },
  {
    title: "Giannis Antetokounmpo Jersey",
    category: "Jersey",
    gender: "Unisex",
    price: 99.99,
    image: "src/Images/9.avif",
    _id: 9,
    sizes: [
      { label: "S", stock: 100 },
      { label: "M", stock: 100 },
      { label: "L", stock: 100 },
      { label: "XL", stock: 100 },
      { label: "XXL", stock: 100 }
    ]
  },

  {
    title: "LeBron XXXI Elite Good Intentions",
    category: "Shoes",
    gender: "Men",
    price: 235,
    image: "src/Images/10.avif",
    _id: 10,
    sizes: [
      { label: 5, stock: 100 },
      { label: 6, stock: 100 },
      { label: 7, stock: 0 },
      { label: 8, stock: 0 },
      { label: 9, stock: 100 },
      { label: 10, stock: 0 },
      { label: 11, stock: 100 },
      { label: 12, stock: 100 }
    ]
  },
  {
    title: "Ja 3 Raptor",
    category: "Shoes",
    gender: "Men",
    price: 135,
    image: "src/Images/11.avif",
    _id: 11,
    sizes: [
      { label: 5, stock: 100 },
      { label: 6, stock: 100 },
      { label: 7, stock: 100 },
      { label: 8, stock: 100 },
      { label: 9, stock: 100 },
      { label: 10, stock: 100 },
      { label: 11, stock: 100 },
      { label: 12, stock: 100 }
    ]
  },
  {
    title: "Giannis Freak 7",
    category: "Shoes",
    gender: "Unisex",
    price: 115,
    image: "src/Images/12.avif",
    _id: 12,
    sizes: [
      { label: 5, stock: 100 },
      { label: 6, stock: 0 },
      { label: 7, stock: 100 },
      { label: 8, stock: 0 },
      { label: 9, stock: 100 },
      { label: 10, stock: 100 },
      { label: 11, stock: 100 },
      { label: 12, stock: 0 }
    ]
  },
  {
    title: "Kobe IX Elite Low",
    category: "Shoes",
    gender: "Unisex",
    price: 190,
    image: "src/Images/13.avif",
    _id: 13,
    sizes: [
      { label: 5, stock: 100 },
      { label: 6, stock: 100 },
      { label: 7, stock: 0 },
      { label: 8, stock: 100 },
      { label: 9, stock: 100 },
      { label: 10, stock: 0 },
      { label: 11, stock: 100 },
      { label: 12, stock: 0 }
    ]
  },
  {
    title: "Nike GT",
    category: "Shoes",
    gender: "Unisex",
    price: 210,
    image: "src/Images/14.avif",
    _id: 14,
    sizes: [
      { label: 5, stock: 0 },
      { label: 6, stock: 100 },
      { label: 7, stock: 100 },
      { label: 8, stock: 0 },
      { label: 9, stock: 100 },
      { label: 10, stock: 100 },
      { label: 11, stock: 0 },
      { label: 12, stock: 100 }
    ]
  },
  {
    title: "KD18",
    category: "Shoes",
    gender: "Unisex",
    price: 155,
    image: "src/Images/15.avif",
    _id: 15,
    sizes: [
      { label: 5, stock: 100 },
      { label: 6, stock: 100 },
      { label: 7, stock: 100 },
      { label: 8, stock: 100 },
      { label: 9, stock: 100 },
      { label: 10, stock: 100 },
      { label: 11, stock: 100 },
      { label: 12, stock: 100 }
    ]
  },
  {
    title: "Sabrina 3 Shooter",
    category: "Shoes",
    gender: "Women",
    price: 120,
    image: "src/Images/16.avif",
    _id: 16,
    sizes: [
      { label: 5, stock: 100 },
      { label: 6, stock: 100 },
      { label: 7, stock: 100 },
      { label: 8, stock: 100 },
      { label: 9, stock: 100 },
      { label: 10, stock: 100 },
      { label: 11, stock: 100 },
      { label: 12, stock: 100 }
    ]
  },
  {
    title: "LeBron Witness 9",
    category: "Shoes",
    gender: "Men",
    price: 415,
    image: "src/Images/17.avif",
    _id: 17,
    sizes: [
      { label: 5, stock: 100 },
      { label: 6, stock: 100 },
      { label: 7, stock: 100 },
      { label: 8, stock: 100 },
      { label: 9, stock: 100 },
      { label: 10, stock: 100 },
      { label: 11, stock: 100 },
      { label: 12, stock: 100 }
    ]
  },
  {
    title: "Air Jordan 40",
    category: "Shoes",
    gender: "Men",
    price: 205,
    image: "src/Images/18.avif",
    _id: 18,
    sizes: [
      { label: 5, stock: 100 },
      { label: 6, stock: 100 },
      { label: 7, stock: 100 },
      { label: 8, stock: 100 },
      { label: 9, stock: 100 },
      { label: 10, stock: 100 },
      { label: 11, stock: 100 },
      { label: 12, stock: 100 }
    ]
  },

  {
    title: "Women's Dri-FIT Quarter Socks (3 Pairs)",
    category: "Accessories",
    gender: "Women",
    price: 30,
    image: "src/Images/19.avif",
    _id: 19,
    sizes: [{ label: "One Size", stock: 100 }]
  },
  {
    title: "NikeSKIMS Small Towel",
    category: "Accessories",
    gender: "Women",
    price: 30,
    image: "src/Images/20.avif",
    _id: 20,
    sizes: [{ label: "One Size", stock: 100 }]
  },
  {
    title: "Yoga Mat Strap",
    category: "Accessories",
    gender: "Women",
    price: 40,
    image: "src/Images/21.avif",
    _id: 21,
    sizes: [{ label: "One Size", stock: 100 }]
  },
  {
    title: "Women's Dri-FIT Pilates Grip Crew Socks (1 Pair)",
    category: "Accessories",
    gender: "Women",
    price: 30,
    image: "src/Images/22.avif",
    _id: 22,
    sizes: [{ label: "One Size", stock: 100 }]
  },
  {
    title: "Carabiner Set",
    category: "Accessories",
    gender: "Women",
    price: 20,
    image: "src/Images/23.avif",
    _id: 23,
    sizes: [{ label: "One Size", stock: 100 }]
  },
  {
    title: "Women's Keychain",
    category: "Accessories",
    gender: "Women",
    price: 24,
    image: "src/Images/24.avif",
    _id: 24,
    sizes: [{ label: "One Size", stock: 100 }]
  },
  {
    title: "Clippable Pouch",
    category: "Accessories",
    gender: "Women",
    price: 30,
    image: "src/Images/25.avif",
    _id: 25,
    sizes: [{ label: "One Size", stock: 100 }]
  },
  {
    title: "Women's Hardshell Round Case",
    category: "Accessories",
    gender: "Women",
    price: 42,
    image: "src/Images/26.avif",
    _id: 26,
    sizes: [{ label: "One Size", stock: 100 }]
  },
  {
    title: "Puffer Gym Bag",
    category: "Women",
    gender: "Unisex",
    price: 148,
    image: "src/Images/27.avif",
    _id: 27,
    sizes: [{ label: "One Size", stock: 100 }]
  }
];

class DataService {
  getProducts() {
    return catalog;
  }
}

export default DataService;