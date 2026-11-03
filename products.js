const products = [
  {
    name: "65 Resin Ball Little Piece of the Ocean",
    code: "65BO0001",
    size: "65mm diameter",
    material: "Shell, Crystal stone",
    image: "images/65ball-shell-a.jpg",
    alt: "65mm handmade Clear resin sphere with miniature seashells and turquoise ocean-inspired details.",
    description: "Bring the beauty of the seaside into your space with this artistic resin sphere, capturing shells, sandy textures and ocean-inspired colours.",
    categories: ["ball", "ocean park", "ocean ball"]
  },
  {
    name: "65 Resin Ball Ocean in a Sphere",
    code: "65BO0002",
    size: "65mm diameter",
    material: "Shell, Starfish",
    image: "images/65ball-shell-b.jpg",
    alt: "65mm handmade ocean-inspired resin ball featuring seashells, starfish and golden sand",
    description: "A miniature ocean world preserved in a clear resin sphere, featuring delicate seashells, starfish and beautiful coastal details.",
    categories: ["ball","ocean park", "ocean ball"]
  },
  {
    name: "80 Resin Ball Underwater Serenity",
    code: "80BO0001",
    size: "80mm diameter",
    material: "Shell, Crystal stone",
    image: "images/80ball-shell-a.jpg",
    alt: "80mm Handmade ocean-inspired resin ball featuring seashells, starfish and golden sand",
    description: "A delicate ocean inspired composition where seashells and aquatic details create a miniature world of calm and natural beauty.",
    categories: ["ball","ocean park", "ocean ball"]
  },
  {
    name: "80 Resin Ball Memories of the Sea",
    code: "80BO0002",
    size: "80mm diameter",
    material: "Shell, Seastar",
    image: "images/80ball-shell-b.jpg",
    alt: "80mm Miniature ocean world featuring seashells, starfish and sandy beach details inside resin.",
    description: "Preserving the beauty of coastal elements in a transparent resin sphere, this piece brings a touch of ocean-inspired artistry into everyday spaces.",
    categories: ["ball","ocean park", "ocean ball"]
  },
  {
    name: "80 Resin Ball Yellow Gerbera Daisy ",
    code: "80MF004",
    size: "80mm diameter",
    material: "Dry Moss & flower",
    image: "images/80ball-yellowChrysanthemumgarden.jpg",
    alt: "80mm clear resin sphere featuring yellow gerbera daisy flowers with green moss and natural miniature landscape.",
    description: "A Cheerful Yellow Gerbera Daisy, preserved in clear resin sphere with green moss and natural earthy details.",
    categories: ["ball", "moss",  "botanical", "moss ball"]
  },
  {
    name: "80 Resin Ball Yellow & White Daisy",
    code: "80MF005",
    size: "80mm diameter",
    image: "images/80ball-daistmumgarden.jpg",
    alt: "80mm clear resin sphere featuring yellow and white daisy flowers with green moss and natural miniature landscape.",
    description: "A charming combination of yellow and white daisies, preserved in clear resin sphere with green moss and natural earthy details.",
    categories: ["ball", "botanical", "moss", "moss ball"]
  },
  {
    name: "80 Resin Ball Moss Forest A",
    code: "80MF001",
    size: "80mm diameter",
    image: "images/80ball-moss-a.jpg",
    alt: "80mm handmade resin sphere with miniature moss landscape and vibrant green leaves featuring pink veins.",
    description: "A miniature moss garden featuring vibrant green leaves with delicate pink veins, creating a colourful natural landscape.",
    categories: ["ball", "tiny garden", "moss", "moss ball"]
  },

  {
    name: "80 Resin Ball Moss Forest B",
    code: "80MF002",
    size: "80mm diameter",
    material: "Dry moss & leaves",
    image: "images/80ball-moss-b.jpg",
    alt: "80mm clear resin sphere featuring a miniature moss forest with tiny plants and natural decorative stones.",
    description: "A miniature forest landscape with lush moss, tiny plants and natural stones, capturing the beauty of nature.",
    categories: ["ball", "tiny garden", "moss", "moss ball"]
  },
  {
    name: "80 Resin Ball Moss Forest C",
    code: "80MF003",
    size: "80mm diameter",
    material: "Dry moss & leaves",
    image: "images/80ball-moss-c.jpg",
    alt: "80mm resin sphere with a miniature tree, moss-covered landscape and natural stone details.",
    description: "A delicate miniature tree surrounded by moss and natural stones, creating a peaceful woodland scene inside a clear resin sphere.",
    categories: ["ball", "tiny garden", "moss", "moss ball"]
  },
{
  name: "80 Resin Ball Blue Stream Miniature Landscape",
  code: "80Tingg001",
  size: "80mm diameter",
  material: "Dry moss & leaves",
  image: "images/80-tinygarden.jpg",
  alt: "Clear resin sphere featuring a miniature blue stream, green moss, branches and tiny nature-inspired details.",
  description: "A miniature landscape featuring a bright blue stream, green moss and natural details, bringing a little piece of nature into a resin sphere.",
  categories: ["tiny garden", "botanical", "ball", "moss", "moss ball"]
},
{
  name: "80 Resin Ball Daisy Garden",
  code: "80Daisyg001",
  size: "80mm diameter",
  material: "Daisy & dry moss",
  image: "images/80-daisygarden.JPG",
  alt: "Clear resin sphere featuring a white flower surrounded by green moss and delicate botanical details.",
  description: "A delicate white flower surrounded by lush green textures, beautifully preserved in a transparent resin sphere.",
  categories: ["tiny garden", "botanical", "ball", "moss", "moss ball"]
},
{
  name: "50 Resin Cube Tiny Garden Collection 1",
  code: "50YJ2",
  size: "50 × 50 × 50 mm",
  material: "Dry moss, flowers, seashell, leaves & stone",
  image: "images/50YJ2.jpg",
  alt: "Transparent resin sphere featuring a single red and white tulip.",
  description: "A striking red and white tulip captured in clear resin, showcasing its unique natural beauty.",
  categories: ["tiny garden", "botanical", "moss"]
},
  {
    name: "50 Purple Floral Resin Skull ",
    code: "SK50-001",
    size: "70x50mm",
    material: "Floral",
    image: "images/g26a-skull-001-picture.jpg",
    alt: "Clear resin skull embedded with preserved purple dried flowers, gothic floral table decor.",
    description: "Hand-made resin skull with purple blooms, dark romantic goth shelf ornament for home display.",
    categories: ["skull", "botanical","floral"]
  },
  {
    name: "50 Resin Skull Floral ",
    code: "SK50-002",
    size: "70x50mm",
    material: "Floral",
    image: "images/g26a-skull-002 picture.jpg",
    alt: "Transparent resin skull with mixed pink, white and blue preserved flowers, gothic decor sculpture.",
    description: "Resin skull encasing pastel mixed florals, unique gothic accent for altar and table decoration.",
    categories: ["skull", "botanical","floral"]
  },
  {
    name: "50 Skull Floral ",
    code: "SK50-003",
    size: "70x50mm",
    material: "Floral",
    image: "images/g26a-skull-003-picture.jpg",
    alt: "Clear resin skull with earthy tone dried wildflowers, botanical goth resin skull ornament.",
    description: "Botanical resin skull with warm wildflowers, striking dark academia gothic collectible decor.",
    categories: ["skull", "botanical","floral"]
  },
  {
    name: "50 Skull Floral ",
    code: "SK50-004",
    size: "70x50mm",
    material: "Floral",
    image: "images/g26a-skull-004-picture.jpg",
    alt: "Transparent resin skull embedded with yellow rose, gothic floral resin skull figurine.",
    description: "Resin skull preserving yellow rose, romantic goth statement piece for shelf & desk decor.",
    categories: ["skull", "botanical","floral"]
  },
  {
    name: "105 Skull Floral ",
    code: "SK105-001",
    size: "75x105mm",
    material: "Floral",
    image: "images/g26a-skull-005.jpg",
    alt: "Clear resin skull with pink and purple dried flowers, colourful goth floral resin sculpture",
    description: "Vibrant pink-purple floral resin skull, whimsical goth decor for home and gifting.",
    categories: ["skull", "botanical","floral"]
  },
  {
    name: "105 Skull Floral ",
    code: "SK105-002",
   size: "75x105mm",
    material: "Floral",
    image: "images/g26a-skull-006.jpg",
    alt: "Transparent resin skull with purple and yellow daisy blooms, botanical goth skull ornament.",
    description: "Resin skull embedded with daisy flowers, elegant goth botanical art piece for display.",
    categories: ["skull", "botanical","floral"]
  },
   {
    name: "105 Skull Floral ",
    code: "SK105-003",
    size: "75x105mm",
    material: "Floral",
    image: "images/g26a-skull-007.jpg",
    alt: "Clear resin skull with deep red preserved rose inside, dark romantic goth resin skull decor.",
    description: "Resin skull encasing red rose, moody gothic centrepiece for dark aesthetic home styling.",
    categories: ["skull", "botanical","floral"]
  },
  {
    name: "80 Resin Ball Tulip Orange",
    code: "80tuliporg",
    size: "80mm diameter",
    material: "Tulip",
    image: "images/80tulip-org3.jpg",
    alt: "Handmade clear resin ball with a single orange tulip flower.",
    description: "A cheerful orange tulip preserved in resin sphere, adding a warm and vibrant botanical touch.",
    categories: ["ball", "floral ball", "tulip"]
  },
  {
    name: "80 Resin Ball Fuchsia White",
    code: "80tulipfuwh",
   size: "80mm diameter",
    material: "Tulip",
    image: "images/80tulip-fus3.jpg",
    alt: "Transparent resin sphere featuring a single red and white tulip.",
    description: "A striking red and white tulip captured in clear resin sphere, showcasing its unique natural beauty.",
    categories: ["ball", "floral ball", "tulip"]
  },
   {
    name: "80 Resin Ball Tulip Pink White",
    code: "80tulippkwh",
    size: "80mm diameter",
    material: "Tulip",
    image: "images/80tulip-whred4.jpg",
    alt: "Clear resin ball encapsulating a single pink tulip flower.",
    description: "A graceful pink tulip preserved in resin sphere, symbolizing beauty, elegance, and timeless charm.",
    categories: ["ball", "floral ball", "tulip"]
  },
   {
    name: "80 Resin Ball Tulip Yellow",
    code: "80tulipylw",
    size: "80mm diameter",
    material: "Tulip",
    image: "images/80tulip-ylw2.jpg",
    alt: "Handmade transparent resin sphere with a single yellow tulip.",
    description: "A vibrant yellow tulip encased in clear resin sphere, bringing warmth and sunshine to your space.",
    categories: ["ball", "floral ball", "tulip"]
  },
  {
    name: "80 Resin Ball Tulip Purple",
    code: "80tulippur",
    size: "80mm diameter",
    material: "Tulip",
    image: "images/80tulip-pur4.jpg",
    alt: "Clear resin sphere featuring a single purple tulip flower.",
    description: "A blue tulip preserved in crystal-clear resin sphere, celebrating the beauty of floral art.",
    categories: ["ball", "floral ball", "tulip"]
  },
   {
    name: "80 Resin Ball Hydrangea Blue",
    code: "80Bluhydra",
    size: "80mm diameter",
    material: "Hydrangea",
    image: "images/80ball-bluehydrangea.jpg",
    alt: "Handmade clear resin sphere encapsulating a single blue hydrange flower.",
    description: "A delicate blue Hydrangea flower preserved in crystal-clear resin sphere, showcasing its charming petals and vibrant natural beauty.",
    categories: ["ball", "floral ball", "hydrangea"]
  },
   {
    name: "80 Resin Ball Lace Flower",
    code: "80lace",
    size: "80mm diameter",
    material: "Lace Flower",
    image: "images/80ball-lace.jpg",
    alt: "Handmade transparent resin ball preserving a delicate lace flower.",
    description: "A beautiful lace flower encapsulated in clear resin sphere, showcasing its intricate petals and natural elegance.",
    categories: ["ball", "floral ball", "lace flower"]
  },
   {
    name: "65 Resin Ball Dandelion",
    code: "65ballddl",
    size: "65mm diameter",
    material: "Dandelion",
    image: "images/65ball-dandelion1.jpg",
    alt: "Handmade clear resin sphere encapsulating a delicate white dandelion flower.",
    description: "A delicate dandelion preserved in crystal-clear resin sphere, capturing its delicate seeds in a timeless botanical keepsake.",
    categories: ["ball", "floral ball", "dandelion"]
  },
   {
    name: "65 Resin Ball Orchid",
    code: "65ballorchid",
    size: "65mm diameter",
    material: "Orchid",
    image: "images/65ball-orchid.jpg",
    alt: "Handmade transparent resin sphere featuring a single orchid flower.",
    description: "An elegant orchid encapsulated in clear resin sphere, preserving its graceful petals and exotic beauty.",
    categories: ["ball", "floral ball", "orchid"]
  },
  {
    name: "65 Resin Ball Hydrangea Pink",
    code: "65pkhydra",
    size: "65mm diameter",
    material: "Hydrangea",
    image: "images/65ball-pinkhydrangea.jpg",
    alt: "Transparent resin sphere preserving a single pink hydrangea flower.",
    description: "A lovely pink Hydrangea flower encased in clear resin sphere, capturing its soft colors and delicate floral charm.",
    categories: ["ball", "floral ball", "hydrangea"]
  },
  {
    name: "65 Resin Ball Brazilian Star Flower",
    code: "65starflo",
    size: "65mm diameter",
    material: "Brazilian Star Flowers",
    image: "images/65ball-brazilianhillflower.jpg",
    alt: "Handmade clear resin ball featuring colorful Brazilian star flowers in multiple shades.",
    description: "Colorful Brazilian star flowers preserved in crystal-clear resin sphere, creating a vibrant botanical composition full of natural charm.",
    categories: ["ball", "floral ball", "star flower"]
  },
  {
    name: "Love Candle Holder",
    code: "LoveCH001",
    size: "105*85*25mm",
    material: "Pink rose",
    image: "images/candleholder-love-1.jpg",
    alt: "Heart-shaped clear resin candle holder featuring preserved pink roses and delicate greenery.",
    description: "A romantic heart-shaped resin candle holder featuring delicate pink roses and natural botanical details, creating a lovely decorative accent.",
    categories: ["floral", "candle holder"]
  },
  {
    name: "Love Candle Holder",
    code: "Love CH002",
    size: "105*85*25mm",
    material: "Pink white rose, leaves & Blue flower",
    image: "images/candleholder-love-2.jpg",
    alt: "Heart-shaped transparent resin candle holder with pink and white preserved roses and botanical details.",
    description: "A heart-shaped resin candle holder decorated with pink and white roses, delicate greenery and floral details for a soft romantic look.",
    categories: ["floral", "candle holder"]
  },
  {
    name: "Moon Candle Holder",
    code: "MoonCH001",
    size: "90*75*305mm",
    material: "Blue flower & Leaves",
    image: "images/candleholder-moon-1.jpg",
    alt: "Crescent moon-shaped clear resin candle holder with preserved blue flowers and green botanical details.",
    description: "A crescent moon-shaped resin candle holder featuring blue flowers and delicate greenery, inspired by the beauty of nature.",
    categories: ["floral", "candle holder"]
  },
  {
    name: "Moon Candle Holder",
    code: "MoonCH002",
    size: "90*75*305mm",
    material: "Pink Carnation & Leaves",
    image: "images/candleholder-moon-2.jpg",
    alt: "Crescent moon-shaped transparent resin candle holder decorated with pink carnations and green leaves.",
    description: "A crescent moon-shaped candle holder featuring pink carnations and delicate greenery, bringing a gentle floral charm to any space.",
    categories: ["floral", "candle holder"]
  },
  {
    name: "Star Candle Holder",
    code: "StarCH001",
    size: "100*100*30mm",
    material: "Pink Carnation & Leaves",
    image: "images/candleholder-star-1.jpg",
    alt: "Star-shaped clear resin candle holder with a preserved pink rose and delicate botanical details.",
    description: "A star-shaped resin candle holder featuring a delicate pink rose and tiny floral details, adding a romantic touch to your décor.",
    categories: ["floral", "candle holder"]
  },
   {
    name: "Star Candle Holder",
    code: "StarCH002",
    size: "100*100*30mm",
    material: "Yellow rose & blue flower",
    image: "images/candleholder-star-2.jpg",
    alt: "Star-shaped transparent resin candle holder featuring yellow flowers and purple botanical details.",
    description: "A cheerful star-shaped resin candle holder decorated with yellow flowers and colourful botanical details, bringing warmth and brightness to your space.",
    categories: ["floral", "candle holder"]
  },
  {
    name: "Star Candle Holder",
    code: "StarCH003",
    size: "100*100*30mm",
    material: "Green Hydrangea & Purple Chrysanthemum",
    image: "images/candleholder-star-3.jpg",
    alt: "Star-shaped clear resin candle holder with purple chrysanthemums, green hydrangea and blue flowers.",
    description: "A botanical star-shaped candle holder featuring purple chrysanthemums, green hydrangea and delicate blue floral accents preserved in clear resin.",
    categories: ["floral", "candle holder"]
  },
  {
    name: "Candle Holder with Wood",
    code: "CHWood001",
    size: "180*95*20mm",
    material: "Purple Chrysanthemum & Globe Amaranth",
    image: "images/candleholder-purflower.jpg",
    alt: "Wooden candle holder with clear resin, preserved blue flowers and a round brass candle cup.",
    description: "A unique combination of natural wood and clear resin, decorated with delicate blue flowers and a brass candle cup for a charming botanical touch.",
    categories: ["floral", "candle holder"]
  },
  {
    name: "Candle Holder with Wood",
    code: "CHWood002",
    size: "180*95*20mm",
    material: "Green Hydrangea",
    image: "images/candleholder-blueflower.jpg",
    alt: "Wooden candle holder with transparent resin, preserved purple flowers and a brass candle cup.",
    description: "Combining natural wood with clear resin and preserved purple flowers, this candle holder brings together organic textures and botanical beauty.",
    categories: ["floral", "candle holder"]
  },
  {
    name: "Bottle Stopper Orange Rose",
    code: "BSG-0rgrose",
    size: "112mm length",
    material: "Orange rose & metal part",
    image: "images/bottlestopper-orrangerose1.jpg",
    alt: "Transparent resin sphere preserving a single pink hydrangea flower.",
    description: "A lovely pink Hydrangea flower encased in clear resin sphere, capturing its soft colors and delicate floral charm.",
    categories: ["floral", "bottle stopper"]
  },
  {
    name: "Bottle Stopper Yellow Rose",
    code: "BSG-Ylwrose",
    size: "112mm length",
    material: "Yellow rose & metal part ",
    image: "images/bottlestopper-yellowrose1.jpg",
    categories: ["floral", "bottle stopper"]
  },
  {
    name: "Bottle Stopper Pink Rose",
    code: "BSS-Pkrose",
    size: "112mm length",
    material: "Pink rose & metal part ",
    image: "images/bottlestopper-pink rose.jpg",
    categories: ["floral", "bottle stopper"]
  },
  {
    name: "Bottle Stopper Multi Flowers",
    code: "BSS-Mulflowers",
    size: "112mm length",
    material: "Multi Flowers & metal part ",
    image: "images/bottlestopper-multiflowers.jpg",
    categories: ["floral", "bottle stopper"]
  },
  {
    name: "Bottle Stopper Pink Rose & Blue Hydrangea ",
    code: "BSS-Pkrosehyd",
    size: "112mm length",
    material: "Pink rose, Blue Hydrangea & metal part ",
    image: "images/bottlestopper-pinkpurple.jpg",
    categories: ["floral", "bottle stopper"]
  },
  {
    name: "Bottle Stopper White Hydrangea & Blue Flower ",
    code: "BSS-Whthydstar",
    size: "112mm length",
    material: "White Hydrangea, Blue Flower & metal part ",
    image: "images/bottlestopper-whitepurple.jpg",
    categories: ["floral", "bottle stopper"]
  },
  {
    name: "Bottle Stopper with Berry Flowers ",
    code: "BSS-Mulberry",
    size: "112mm length",
    material: "Multiple Color Berry Flowers & metal part ",
    image: "images/bottlestopper-berryflowers.jpg",
    categories: ["floral", "bottle stopper"]
  },
  {
    name: "Bottle Stopper Light Blue Hydrangea ",
    code: "BSS-Ltbluhyd",
    size: "112mm length",
    material: "Light Blue Hydrangea & metal part ",
    image: "images/bottlestopper-bluewhite.jpg",
    categories: ["floral", "bottle stopper"]
  },
  {
    name: "Bottle Stopper Orange Rose ",
    code: "BSS-Orgrose",
    size: "112mm length",
    material: "Orange Rose & metal part ",
    image: "images/bottlestopper-orangerose.jpg",
    categories: ["floral", "bottle stopper"]
  },
   {
    name: "Bottle Stopper Yellow Rose ",
    code: "BSS-Ylwrose",
    size: "112mm length",
    material: "Yellow Rose & metal part ",
    image: "images/bottlestopper-yellowrose.jpg",
    categories: ["floral", "bottle stopper"]
  },
];
