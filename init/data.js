const mongoose = require("mongoose");

const Samplelistings = [
  {
    title: "Mountain Retreat",
    description: "A serene getaway in the mountains.",
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      filename: "photo-1506744038136-46273834b3fb",
    },
    price: 3500,
    location: "Manali",
    country: "India",
    reviews: [],
    owner: new mongoose.Types.ObjectId("64d39f7fbd452a001e5992a1"),
  },
  {
    title: "Beachside Bungalow",
    description: "Wake up to the sound of the ocean.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "photo-1507525428034-b723cf961d3e",
    },
    price: 5000,
    location: "Goa",
    country: "India",
    reviews: [],
    owner: new mongoose.Types.ObjectId("64d39f7fbd452a001e5992a1"),
  },
  {
    title: "Lake Cabin",
    description: "A quiet cabin near the lake.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      filename: "photo-1522708323590-d24dbb6b0267",
    },
    price: 4000,
    location: "Nainital",
    country: "India",
    reviews: [],
    owner: new mongoose.Types.ObjectId("64d39f7fbd452a001e5992a1"),
  },
  {
    title: "Urban Apartment",
    description: "Modern living in the heart of the city.",
    image: {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      filename: "photo-1586023492125-27b2c045efd7",
    },
    price: 7000,
    location: "Mumbai",
    country: "India",
    reviews: [],
    owner: new mongoose.Types.ObjectId("64d39f7fbd452a001e5992a1"),
  },
  {
    title: "Countryside Villa",
    description: "Perfect for weekend getaways.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "photo-1600585154340-be6161a56a0c",
    },
    price: 3800,
    location: "Coorg",
    country: "India",
    reviews: [],
    owner: new mongoose.Types.ObjectId("64d39f7fbd452a001e5992a1"),
  },
  {
    title: "Snowy Cottage",
    description: "A cozy home in the snow.",
    image: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      filename: "photo-1542314831-068cd1dbfeeb",
    },
    price: 3200,
    location: "Shimla",
    country: "India",
    reviews: [],
    owner: new mongoose.Types.ObjectId("64d39f7fbd452a001e5992a1"),
  },
  {
    title: "Jungle Treehouse",
    description: "Live among the trees.",
    image: {
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      filename: "photo-1570129477492-45c003edd2be",
    },
    price: 4500,
    location: "Wayanad",
    country: "India",
    reviews: [],
    owner: new mongoose.Types.ObjectId("64d39f7fbd452a001e5992a1"),
  },
  {
    title: "Royal Palace Room",
    description: "Feel like royalty.",
    image: {
      url: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
      filename: "photo-1560347876-aeef00ee58a1"
    },
    price: 9000,
    location: "Udaipur",
    country: "India",
    reviews: [],
    owner: "64d39f7fbd452a001e5992a1"
  },
  {
    title: "Tea Estate Stay",
    description: "Green views and peace.",
    image: {
      url: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
      filename: "photo-1503220317375-aaad61436b1b"
    },
    price: 2800,
    location: "Munnar",
    country: "India",
    reviews: [],
    owner: "64d39f7fbd452a001e5992a1"
  },
  {
    title: "Floating House",
    description: "Houseboat experience.",
    image: {
      url: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
      filename: "photo-1560347876-aeef00ee58a1"
    },
    price: 7500,
    location: "Alleppey",
    country: "India",
    reviews: [],
    owner: "64d39f7fbd452a001e5992a1"
  },
  {
    title: "Farm Stay",
    description: "Fresh air and greenery.",
    image: {
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      filename: "photo-1493809842364-78817add7ffb"
    },
    price: 2700,
    location: "Pune",
    country: "India",
    reviews: [],
    owner: "64d39f7fbd452a001e5992a1"
  },
  {
    title: "Bamboo Bungalow",
    description: "Eco-friendly experience.",
    image: {
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
      filename: "photo-1519225421980-715cb0215aed"
    },
    price: 3100,
    location: "Meghalaya",
    country: "India",
    reviews: [],
    owner: "64d39f7fbd452a001e5992a1"
  },
  {
    title: "Waterfall View Lodge",
    description: "Fall asleep to water sounds.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename: "photo-1512917774080-9991f1c4c750"
    },
    price: 5800,
    location: "Cherrapunji",
    country: "India",
    reviews: [],
    owner: "64d39f7fbd452a001e5992a1"
  },
  {
    title: "Colonial Bungalow",
    description: "Vintage charm.",
    image: {
      url: "https://images.unsplash.com/photo-1549187774-b4e9b0445b06",
      filename: "photo-1549187774-b4e9b0445b06"
    },
    price: 4200,
    location: "Darjeeling",
    country: "India",
    reviews: [],
    owner: "64d39f7fbd452a001e5992a1"
  },
  {
    title: "Eco Tent",
    description: "Sustainable and stylish.",
    image: {
      url: "https://images.unsplash.com/photo-1550355291-bbee04a92027",
      filename: "photo-1550355291-bbee04a92027"
    },
    price: 2500,
    location: "Hampi",
    country: "India",
    reviews: [],
    owner: "64d39f7fbd452a001e5992a1"
  },
  {
    title: "Hilltop Haven",
    description: "Panoramic mountain views.",
    image: {
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      filename: "photo-1500375592092-40eb2168fd21"
    },
    price: 4300,
    location: "Mussoorie",
    country: "India",
    reviews: [],
    owner: "64d39f7fbd452a001e5992a1"
  },
  {
    title: "Modern Loft",
    description: "Open-concept design.",
    image: {
      url: "https://images.unsplash.com/photo-1586105251261-72a756497a12",
      filename: "photo-1586105251261-72a756497a12"
    },
    price: 6700,
    location: "Bangalore",
    country: "India",
    reviews: [],
    owner: "64d39f7fbd452a001e5992a1"
  },
  {
    title: "Stone House",
    description: "Rustic and solid.",
    image: {
      url: "https://images.unsplash.com/photo-1616435991032-1c0b4eec7433",
      filename: "photo-1616435991032-1c0b4eec7433"
    },
    price: 3700,
    location: "Kodaikanal",
    country: "India",
    reviews: [],
    owner: "64d39f7fbd452a001e5992a1"
  },
  {
    title: "Garden Suite",
    description: "Flowers all around.",
    image: {
      url: "https://images.unsplash.com/photo-1618773928121-c32242e2a945",
      filename: "photo-1618773928121-c32242e2a945"
    },
    price: 3500,
    location: "Chikmagalur",
    country: "India",
    reviews: [],
    owner: "64d39f7fbd452a001e5992a1"
  },
  {
    title: "Minimalist Studio",
    description: "Clean and peaceful.",
    image: {
      url: "https://images.unsplash.com/photo-1598928506311-c55ded1ae63a",
      filename: "photo-1598928506311-c55ded1ae63a"
    },
    price: 4400,
    location: "Delhi",
    country: "India",
    reviews: [],
    owner: "64d39f7fbd452a001e5992a1"
  },
  {
    title: "Scenic Viewpoint",
    description: "For nature lovers.",
    image: {
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      filename: "photo-1570129477492-45c003edd2be"
    },
    price: 5200,
    location: "Matheran",
    country: "India",
    reviews: [],
    owner: "64d39f7fbd452a001e5992a1"
  },
  {
    title: "Sunset Villa",
    description: "Perfect for couples.",
    image: {
      url: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
      filename: "photo-1502673530728-f79b4cab31b1"
    },
    price: 7300,
    location: "Varkala",
    country: "India",
    reviews: [],
    owner: "64d39f7fbd452a001e5992a1"
  },
];
module.exports = { data: Samplelistings };
