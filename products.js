const products = [
  {
    name: "65 Ball Shell A",
    code: "65BO0001",
    size: "65mm diameter",
    material: "Shell, Crystal stone",
    image: "images/65ball-shell-a.jpg",
    categories: ["ball", "Ocean Park"]
  },
  {
    name: "65 Ball Seastar A",
    code: "65BO0002",
    size: "65mm diameter",
    material: "Shell, Seastar",
    image: "images/65ball-shell-b.jpg",
    categories: ["ball","Ocean Park"]
  },
  {
    name: "80 Ball Shell A",
    code: "80BO0001",
    size: "80mm diameter",
    material: "Shell, Crystal stone",
    image: "images/80ball-shell-a.jpg",
    categories: ["ball","Ocean Park"]
  },
  {
    name: "80 Ball Seastar A",
    code: "80BO0002",
    size: "80mm diameter",
    material: "Shell, Seastar",
    image: "images/80ball-shell-b.jpg",
    categories: ["ball","Ocean Park"]
  },
  {
  name: "80 Ball Yellow Gerbera Daisy ",
    code: "80MF004",
    size: "80mm diameter",
    material: "Dry Moss & flower",
    image: "images/80ball-yellowChrysanthemumgarden.jpg",
    categories: ["ball","Moss",  "Botanical"]
  },
  {
    name: "80 Ball Yellow & White Daisy",
    code: "80MF005",
    size: "80mm diameter",
    image: "images/80ball-daistmumgarden.jpg",
    categories: ["ball", "Botanical", "moss"]
  },
  {
    name: "80 Ball Moss Forest A",
    code: "80MF001",
    size: "80mm diameter",
    image: "images/80ball-moss-a.jpg",
    categories: ["ball", "Tiny Garden", "moss"]
  },

  {
    name: "80 Ball Moss Forest B",
    code: "80MF002",
    size: "80mm diameter",
    material: "Dry moss & leaves",
    image: "images/80ball-moss-b.jpg",
    categories: ["ball", "Tiny Garden", "moss"]
  },
  {
    name: "80 Ball Moss Forest C",
    code: "80MF003",
    size: "80mm diameter",
    material: "Dry moss & leaves",
    image: "images/80ball-moss-c.jpg",
    categories: ["ball", "Tiny Garden", "moss"]
  },
{
  name: "Tiny Garden",
  code: "80Tingg001",
  size: "80mm diameter",
  material: "Dry moss & leaves",
  image: "images/80-tinygarden.jpg",
  categories: ["Tiny Garden", "Botanical", "ball", "moss"]
},
{
  name: "Daisy Garden",
  code: "80Daisyg001",
  size: "80mm diameter",
  material: "Daisy & dry moss",
  image: "images/80-daisygarden.JPG",
  categories: ["Tiny Garden", "Botanical", "ball", "moss"]
},
{
  name: "Tiny Garden Collection 1",
  code: "50YJ2",
  size: "50 × 50 × 50 mm",
  material: "Dry moss, flowers, seashell, leaves & stone",
  image: "images/50YJ2.jpg",
  categories: ["Tiny Garden", "Botanical", "moss"]
},
  {
    name: "50 Skull Floral ",
    code: "SK50-001",
    size: "70x50mm",
    material: "Floral",
    image: "images/g26a-skull-001-picture.jpg",
    categories: ["Skull", "Botanical","Floral"]
  },
  {
    name: "50 Skull Floral ",
    code: "SK50-002",
    size: "70x50mm",
    material: "Floral",
    image: "images/g26a-skull-002 picture.jpg",
    categories: ["Skull", "Botanical","Floral"]
  },
  {
    name: "50 Skull Floral ",
    code: "SK50-003",
    size: "70x50mm",
    material: "Floral",
    image: "images/g26a-skull-003-picture.jpg",
    categories: ["Skull", "Botanical","Floral"]
  },
  {
    name: "50 Skull Floral ",
    code: "SK50-004",
    size: "70x50mm",
    material: "Floral",
    image: "images/g26a-skull-004-picture.jpg",
    categories: ["Skull", "Botanical","Floral"]
  },
  {
    name: "105 Skull Floral ",
    code: "SK105-001",
    size: "75x105mm",
    material: "Floral",
    image: "images/g26a-skull-005.jpg",
    categories: ["Skull", "Botanical","Floral"]
  },
  {
    name: "105 Skull Floral ",
    code: "SK105-002",
   size: "75x105mm",
    material: "Floral",
    image: "images/g26a-skull-006.jpg",
    categories: ["Skull", "Botanical","Floral"]
  },
   {
    name: "105 Skull Floral ",
    code: "SK105-003",
    size: "75x105mm",
    material: "Floral",
    image: "images/g26a-skull-007.jpg",
    categories: ["Skull", "Botanical","Floral"]
  },
  {
    name: "80 Tulip Orange",
    code: "80tuliporg",
    size: "80mm diameter",
    material: "Tulip",
    image: "images/80tulip-org3.jpg",
    categories: ["ball", "floral ball art"]
  },
  {
    name: "80 Fuchsia White",
    code: "80tulipfuwh",
   size: "80mm diameter",
    material: "Tulip",
    image: "images/80tulip-fus3.jpg",
    categories: ["ball", "floral ball art"]
  },
   {
    name: "80 Tulip Pink White",
    code: "80tulippkwh",
    size: "80mm diameter",
    material: "Tulip",
    image: "images/80tulip-whred4.jpg",
    categories: ["ball", "floral ball art"]
  },
   {
    name: "80 Tulip Yellow",
    code: "80tulipylw",
    size: "80mm diameter",
    material: "Tulip",
    image: "images/80tulip-ylw2.jpg",
    categories: ["ball", "floral ball art"]
  },
  {
    name: "80 Tulip Purple",
    code: "80tulippur",
    size: "80mm diameter",
    material: "Tulip",
    image: "images/80tulip-pur4.jpg",
    categories: ["ball", "floral ball art"]
  },
   {
    name: "80 Hydrangea Blue",
    code: "80Bluhydra",
    size: "80mm diameter",
    material: "Hydrangea",
    image: "images/80ball-bluehydrangea.jpg",
    categories: ["ball", "floral ball art"]
  },
   {
    name: "80 Lace Flower",
    code: "80lace",
    size: "80mm diameter",
    material: "Lace Flower",
    image: "images/80ball-lace.jpg",
    categories: ["ball", "floral ball art"]
  },
   {
    name: "65 Dandelion",
    code: "65ballddl",
    size: "65mm diameter",
    material: "Dandelion",
    image: "images/65ball-dandelion.jpg",
    categories: ["ball", "floral ball art"]
  },
   {
    name: "65 Orchid",
    code: "65ballorchid",
    size: "65mm diameter",
    material: "Orchid",
    image: "images/65ball-orchid.jpg",
    categories: ["ball", "floral ball art"]
  },
  {
    name: "65 Hydrangea Pink",
    code: "65pkhydra",
    size: "65mm diameter",
    material: "Hydrangea",
    image: "images/65ball-pinkhydrangea.jpg",
    categories: ["ball", "floral ball art"]
  },
  {
    name: "65 Brazilian Star Flower",
    code: "65starflo",
    size: "65mm diameter",
    material: "Brazilian Star Flowers",
    image: "images/65ball-brazilianhillflower.jpg",
    categories: ["ball", "floral ball art"]
  },
  {
    name: "Love Candle Holder",
    code: "LoveCH001",
    size: "105*85*25mm",
    material: "Pink rose",
    image: "images/candleholder-love-1.jpg",
    categories: ["floral", "candle holder"]
  },
  {
    name: "Love Candle Holder",
    code: "Love CH002",
    size: "105*85*25mm",
    material: "Pink white rose, leaves & Blue flower",
    image: "images/candleholder-love-2.jpg",
    categories: ["floral", "candle holder"]
  },
  {
    name: "Moon Candle Holder",
    code: "MoonCH001",
    size: "90*75*305mm",
    material: "Blue flower & Leaves",
    image: "images/candleholder-moon-1.jpg",
    categories: ["floral", "candle holder"]
  },
  {
    name: "Moon Candle Holder",
    code: "MoonCH002",
    size: "90*75*305mm",
    material: "Pink Carnation & Leaves",
    image: "images/candleholder-moon-2.jpg",
    categories: ["floral", "candle holder"]
  },
  {
    name: "Star Candle Holder",
    code: "StarCH001",
    size: "100*100*30mm",
    material: "Pink Carnation & Leaves",
    image: "images/candleholder-star-1.jpg",
    categories: ["floral", "candle holder"]
  },
   {
    name: "Star Candle Holder",
    code: "StarCH002",
    size: "100*100*30mm",
    material: "Yellow rose & blue flower",
    image: "images/candleholder-star-2.jpg",
    categories: ["floral", "candle holder"]
  },
  {
    name: "Star Candle Holder",
    code: "StarCH003",
    size: "100*100*30mm",
    material: "Green Hydrangea & Purple Chrysanthemum",
    image: "images/candleholder-star-3.jpg",
    categories: ["floral", "candle holder"]
  },
  {
    name: "Candle Holder with Wood",
    code: "CHWood001",
    size: "180*95*20mm",
    material: "Purple Chrysanthemum & Globe Amaranth",
    image: "images/candleholder-purflower.jpg",
    categories: ["floral", "candle holder"]
  },
  {
    name: "Candle Holder with Wood",
    code: "CHWood002",
    size: "180*95*20mm",
    material: "Green Hydrangea",
    image: "images/candleholder-blueflower.jpg",
    categories: ["floral", "candle holder"]
  },
  {
    name: "Bottle Stopper Orange Rose",
    code: "BSG-0rgrose",
    size: "112mm length",
    material: "Orange rose & metal part",
    image: "images/bottlestopper-orrangerose1.jpg",
    categories: ["floral", "Bottle Stopper"]
  },
  {
    name: "Bottle Stopper Yellow Rose",
    code: "BSG-Ylwrose",
    size: "112mm length",
    material: "Yellow rose & metal part ",
    image: "images/bottlestopper-yellowrose1.jpg",
    categories: ["floral", "Bottle Stopper"]
  },
  {
    name: "Bottle Stopper Pink Rose",
    code: "BSS-Pkrose",
    size: "112mm length",
    material: "Pink rose & metal part ",
    image: "images/bottlestopper-pink rose.jpg",
    categories: ["floral", "Bottle Stopper"]
  },
  {
    name: "Bottle Stopper Multi Flowers",
    code: "BSS-Mulflowers",
    size: "112mm length",
    material: "Multi Flowers & metal part ",
    image: "images/bottlestopper-multiflowers.jpg",
    categories: ["floral", "Bottle Stopper"]
  },
  {
    name: "Bottle Stopper Pink Rose & Blue Hydrangea ",
    code: "BSS-Pkrosehyd",
    size: "112mm length",
    material: "Pink rose, Blue Hydrangea & metal part ",
    image: "images/bottlestopper-pinkpurple.jpg",
    categories: ["floral", "Bottle Stopper"]
  },
  {
    name: "Bottle Stopper White Hydrangea & Blue Flower ",
    code: "BSS-Whthydstar",
    size: "112mm length",
    material: "White Hydrangea, Blue Flower & metal part ",
    image: "images/bottlestopper-whitepurple.jpg",
    categories: ["floral", "Bottle Stopper"]
  },
  {
    name: "Bottle Stopper with Berry Flowers ",
    code: "BSS-Mulberry",
    size: "112mm length",
    material: "Multiple Color Berry Flowers & metal part ",
    image: "images/bottlestopper-berryflowers.jpg",
    categories: ["floral", "Bottle Stopper"]
  },
  {
    name: "Bottle Stopper Light Blue Hydrangea ",
    code: "BSS-Ltbluhyd",
    size: "112mm length",
    material: "Light Blue Hydrangea & metal part ",
    image: "images/bottlestopper-bluewhite.jpg",
    categories: ["floral", "Bottle Stopper"]
  },
  {
    name: "Bottle Stopper Orange Rose ",
    code: "BSS-Orgrose",
    size: "112mm length",
    material: "Orange Rose & metal part ",
    image: "images/bottlestopper-orangerose.jpg",
    categories: ["floral", "Bottle Stopper"]
  },
   {
    name: "Bottle Stopper Yellow Rose ",
    code: "BSS-Ylwrose",
    size: "112mm length",
    material: "Yellow Rose & metal part ",
    image: "images/bottlestopper-yellowrose.jpg",
    categories: ["floral", "Bottle Stopper"]
  },
];
