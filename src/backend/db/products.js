import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  //--------- Men's Section------------//

  // 1. Mens'casual
  {
    _id: uuid(),
    name: "Blue Shirt",
    category: "Casual",
    section: "Mens",
    rating: 3,
    gender: "men",
    price: 1500,
    originalPrice: 2000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684160993/E-comm%20ATTIREX/Mens-Fashion/istockphoto-1251683479-612x612_fl1ar5.jpg",
    isOutOfStock: false,
    description:
      "White micro ditsy printed opaque Formal shirt, has a spread collar, button placket, 1 patch pocket, long regular sleeves, curved hem",
  },

  {
    _id: uuid(),
    name: "Black Bomber Jacket",
    category: "Casual",
    section: "Mens",
    rating: 5,
    gender: "men",
    price: 3500,
    originalPrice: 4000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684160852/E-comm%20ATTIREX/Mens-Fashion/istockphoto-1439804198-612x612_upwx0z.jpg",
    isOutOfStock: true,
    description:
      "A stylish black bomber jacket made from high-quality materials. It features a front zipper closure, ribbed cuffs and hem, and multiple pockets. Perfect for adding a cool and edgy touch to your casual outfits.",
  },
  {
    _id: uuid(),
    name: "Henley Shirt",
    category: "Casual",
    section: "Mens",
    rating: 5,
    gender: "men",
    price: 1000,
    originalPrice: 2000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684231181/E-comm%20ATTIREX/Mens-Fashion/istockphoto-1327456615-612x612_n99hjx.jpg",
    isOutOfStock: true,
    description:
      "A comfortable and casual Henley shirt made from soft cotton fabric. It features a round neckline with a partial button placket and long sleeves. Perfect for a relaxed yet stylish look.",
  },
  {
    _id: uuid(),
    name: "Cargo Shorts",
    category: "Casual",
    section: "Mens",
    rating: 5,
    gender: "men",
    price: 1000,
    originalPrice: 2000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684251162/E-comm%20ATTIREX/Mens-Fashion/pexels-photo-1306248_eegoas.jpg",
    isOutOfStock: false,
    description:
      "Cargo shorts made from durable fabric with multiple pockets for added functionality. They have a relaxed fit, a mid-length cut, and a versatile design suitable for various casual occasions.",
  },
  {
    _id: uuid(),
    name: "Blue Denim Jeans",
    category: "Casual",
    section: "Mens",
    rating: 4,
    gender: "men",
    price: 2500,
    originalPrice: 3000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684160987/E-comm%20ATTIREX/Mens-Fashion/istockphoto-1220376914-612x612_qonriu.jpg",
    isOutOfStock: false,
    description:
      "Blue washed mid-rise jeans, heavily distressed, has a button and zip closure, waistband with belt loops, five pockets, and cuffed hems",
  },

  // 2.Formal

  {
    _id: uuid(),
    name: "White Dress Shirt",
    category: "Formal",
    section: "Mens",
    rating: 4.5,
    gender: "men",
    price: 2500,
    originalPrice: 3000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684160864/E-comm%20ATTIREX/Mens-Fashion/istockphoto-666965914-612x612_zywdue.jpg",
    isOutOfStock: false,
    description: "White dress shirt with a classic fit and button-down collar.",
  },
  {
    _id: uuid(),
    name: "Dress Pants",
    category: "Formal",
    section: "Mens",
    rating: 4.5,
    gender: "men",
    price: 2500,
    originalPrice: 3000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684251395/E-comm%20ATTIREX/Mens-Fashion/istockphoto-1425659876-612x612_iethxn.jpg",
    isOutOfStock: false,
    description:
      "Tailored dress pants in a versatile color such as black, navy, or charcoal gray. They feature a flat front, a straight leg cut, and a comfortable fit. Perfect for pairing with dress shirts and blazers for formal occasions.",
  },

  {
    _id: uuid(),
    name: "Navy Blue Suit",
    category: "Formal",
    section: "Mens",
    rating: 5,
    gender: "men",
    price: 12000,
    originalPrice: 15000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684230866/E-comm%20ATTIREX/Mens-Fashion/istockphoto-658846934-612x612_fkwpu2.jpg",
    isOutOfStock: false,
    description: "Navy blue two-piece suit with a slim fit and notched lapels.",
  },
  {
    _id: uuid(),
    name: "Black Tuxedo",
    category: "Formal",
    section: "Mens",
    rating: 4.2,
    gender: "men",
    price: 5000,
    originalPrice: 8000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684230938/E-comm%20ATTIREX/Mens-Fashion/istockphoto-155394131-612x612_lqdnjg.jpg",
    isOutOfStock: true,
    description: "Classic black leather shoes with a polished finish.",
  },
  {
    _id: uuid(),
    name: "Charcoal Grey Trousers",
    category: "Formal",
    section: "Mens",
    rating: 4.8,
    gender: "men",
    price: 3000,
    originalPrice: 3500,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684231008/E-comm%20ATTIREX/Mens-Fashion/istockphoto-1345963025-612x612_ostie7.jpg",
    isOutOfStock: false,
    description: "Charcoal grey trousers with a tailored fit and front pleats.",
  },

  // 3.Freestyle

  {
    _id: uuid(),
    name: "White T-shirt",
    category: "Freestyle",
    section: "Mens",
    rating: 4.7,
    gender: "men",
    price: 2000,
    originalPrice: 2500,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684231299/E-comm%20ATTIREX/Mens-Fashion/pexels-photo-5753204_nei74i.webp",
    isOutOfStock: false,
    description: "White t-shirt with a relaxed fit and crew neckline.",
  },
  {
    _id: uuid(),
    name: "Distressed Denim Jeans",
    category: "Freestyle",
    section: "Mens",
    rating: 4.9,
    gender: "men",
    price: 3500,
    originalPrice: 4000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684231488/E-comm%20ATTIREX/Mens-Fashion/pexels-photo-1129019_s4qgfw.webp",
    isOutOfStock: false,
    description:
      "Ripped and distressed denim jeans with a slim fit and tapered leg.",
  },

  // --------Women' section -------------//

  // 1. Activewear

  {
    _id: uuid(),
    name: "Sports Bra",
    category: "Active Wear",
    section: "Womens",
    rating: 4.5,
    gender: "women",
    price: 1500,
    originalPrice: 1800,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684156820/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1366038769-612x612_pa4c9e.jpg",
    isOutOfStock: false,
    description:
      "High-impact sports bra with moisture-wicking fabric and adjustable straps.",
  },
  {
    _id: uuid(),
    name: "Leggings",
    category: "Active Wear",
    section: "Womens",
    rating: 4.8,
    gender: "women",
    price: 2500,
    originalPrice: 3000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684232026/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1307931676-612x612_xvnuse.jpg",
    isOutOfStock: false,
    description:
      "Stretchy and breathable leggings with a high-rise waist and mesh panels.",
  },
  {
    _id: uuid(),
    name: "Running Shorts",
    category: "Active Wear",
    section: "Womens",
    rating: 4.6,
    gender: "women",
    price: 1800,
    originalPrice: 2000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684231969/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1216112341-612x612_g0fann.jpg",
    isOutOfStock: false,
    description:
      "Breathable and quick-drying running shorts with built-in briefs and a zippered pocket.",
  },
  {
    _id: uuid(),
    name: "Tank Top",
    category: "Active Wear",
    section: "Womens",
    rating: 4.2,
    gender: "women",
    price: 1200,
    originalPrice: 1500,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684232244/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1329490444-612x612_sxpacm.jpg",
    isOutOfStock: true,
    description:
      "Lightweight and loose-fitting tank top with a racerback design and moisture-wicking fabric.",
  },
  //2. womens dresses
  {
    _id: uuid(),
    name: "Floral Maxi Dress",
    category: "Dresses",
    section: "Womens",
    rating: 4.7,
    gender: "women",
    price: 3500,
    originalPrice: 4000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684232697/E-comm%20ATTIREX/Womens-Fashion/pexels-photo-11772316_qj6ma3.webp",
    isOutOfStock: false,
    description:
      "Flowy floral print maxi dress with a V-neckline and adjustable straps.",
  },
  {
    _id: uuid(),
    name: "Bodycon Black Dress",
    category: "Dresses",
    section: "Womens",
    rating: 4.9,
    gender: "women",
    price: 4500,
    originalPrice: 5000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684161231/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1417865925-612x612_hkynsy.jpg",
    isOutOfStock: false,
    description:
      "Classic bodycon black dress with a fitted silhouette and short sleeves.",
  },
  {
    _id: uuid(),
    name: "Wrap Dress",
    category: "Dresses",
    section: "Womens",
    rating: 4.6,
    gender: "women",
    price: 3000,
    originalPrice: 3500,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684232933/E-comm%20ATTIREX/Womens-Fashion/istockphoto-186829751-612x612_oa04tb.jpg",
    isOutOfStock: true,
    description:
      "Versatile wrap dress with a tie closure and a flattering A-line silhouette.",
  },
  {
    _id: uuid(),
    name: "Midi Sundress",
    category: "Dresses",
    section: "Womens",
    rating: 4.3,
    gender: "women",
    price: 2500,
    originalPrice: 3000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684233042/E-comm%20ATTIREX/Womens-Fashion/pexels-photo-14936437_syoc8o.jpg",
    isOutOfStock: false,
    description:
      "Lightweight and breezy midi sundress with adjustable spaghetti straps.",
  },
  {
    _id: uuid(),
    name: "Off-Shoulder Dress",
    category: "Dresses",
    section: "Womens",
    rating: 4.8,
    gender: "women",
    price: 4000,
    originalPrice: 4500,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684233244/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1202807525-612x612_oknke7.jpg",
    isOutOfStock: false,
    description:
      "Trendy off-shoulder dress with a ruffled neckline and a flared skirt.",
  },
  {
    _id: uuid(),
    name: "Lace Cocktail Dress",
    category: "Dresses",
    section: "Womens",
    rating: 4.5,
    gender: "women",
    price: 5000,
    originalPrice: 5500,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684233369/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1143043139-612x612_qi32jp.jpg",
    isOutOfStock: true,
    description:
      "Elegant lace cocktail dress with a fitted bodice and a knee-length hemline.",
  },
  {
    _id: uuid(),
    name: "Boho Print Dress",
    category: "Dresses",
    section: "Womens",
    rating: 4.2,
    gender: "women",
    price: 2800,
    originalPrice: 3200,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684232576/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1210757774-612x612_afynjb.jpg",
    isOutOfStock: false,
    description: "Bohemian-style print dress with long bell sleeves and a flow",
  },
  // 3. Office wear

  {
    _id: uuid(),
    name: "Tailored Blazer",
    category: "Office Wear",
    section: "Womens",
    rating: 4.7,
    gender: "women",
    price: 4500,
    originalPrice: 5000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684160313/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1421800979-612x612_jhezda.jpg",
    isOutOfStock: false,
    description:
      "Classic tailored blazer with a single-button closure and notched lapels.",
  },
  {
    _id: uuid(),
    name: "Pencil Skirt",
    category: "Office Wear",
    section: "Womens",
    rating: 4.9,
    gender: "women",
    price: 3000,
    originalPrice: 3500,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684233869/E-comm%20ATTIREX/Womens-Fashion/istockphoto-503240626-612x612_a1puvy.jpg",
    isOutOfStock: false,
    description:
      "Sleek and fitted pencil skirt with a back slit and a concealed zip closure.",
  },
  {
    _id: uuid(),
    name: "Button-Up Shirt",
    category: "Office Wear",
    section: "Womens",
    rating: 4.6,
    gender: "women",
    price: 2500,
    originalPrice: 3000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684159867/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1400286718-612x612_ch35pz.jpg",
    isOutOfStock: true,
    description:
      "Crisp button-up shirt with a pointed collar and long sleeves.",
  },
  {
    _id: uuid(),
    name: "Wide-Leg Trousers",
    category: "Office Wear",
    section: "Womens",
    rating: 4.8,
    gender: "women",
    price: 4000,
    originalPrice: 4500,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684160321/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1421801076-612x612_yzh6co.jpg",
    isOutOfStock: false,
    description:
      "Sophisticated wide-leg trousers with a high-rise waist and pleated details.",
  },

  //4. womens casual
  {
    _id: uuid(),
    name: "Denim Jacket",
    category: "Casual",
    section: "Womens",
    rating: 4.5,
    gender: "women",
    price: 3500,
    originalPrice: 4000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684160521/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1142195614-612x612_qgxaym.jpg",
    isOutOfStock: false,
    description:
      "Classic denim jacket with a button-front closure and front pockets.",
  },
  {
    _id: uuid(),
    name: "Graphic T-Shirt",
    category: "Casual",
    section: "Womens",
    rating: 4.8,
    gender: "women",
    price: 1500,
    originalPrice: 1800,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684161396/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1166389425-612x612_je4nsg.jpg",
    isOutOfStock: false,
    description:
      "Comfortable graphic t-shirt with a crew neck and short sleeves.",
  },
  {
    _id: uuid(),
    name: "Jumpsuit",
    category: "Casual",
    section: "Womens",
    rating: 4.2,
    gender: "women",
    price: 2500,
    originalPrice: 3000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684161095/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1344271946-612x612_akkm5y.jpg",
    isOutOfStock: true,
    description: "Trendy jumpsuit with a slim fit and ripped details.",
  },

  //womens tops
  {
    _id: uuid(),
    name: "Striped Top",
    category: "Tops",
    section: "Womens",
    rating: 4.7,
    gender: "women",
    price: 2500,
    originalPrice: 3000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684160594/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1097372032-612x612_al3xnl.jpg",
    isOutOfStock: false,
    description: "Stylish striped top with a relaxed fit.",
  },
  {
    _id: uuid(),
    name: "Off-Shoulder Crop Top",
    category: "Tops",
    section: "Womens",
    rating: 4.9,
    gender: "women",
    price: 1800,
    originalPrice: 2000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684161112/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1353609468-612x612_yiv7ax.jpg",
    isOutOfStock: false,
    description:
      "Fashionable off-shoulder crop top with short sleeves and a smocked neckline.",
  },
  {
    _id: uuid(),
    name: "Ruffled  Top",
    category: "Tops",
    section: "Womens",
    rating: 4.6,
    gender: "women",
    price: 2000,
    originalPrice: 2500,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684234448/E-comm%20ATTIREX/Womens-Fashion/istockphoto-812874928-612x612_kpq1zl.jpg",
    isOutOfStock: true,
    description:
      "Elegant ruffled top with off-shoulder and adjustable spaghetti straps.",
  },

  // --------Kids Fashion------------//

  {
    _id: uuid(),
    name: "Colorful Hoodie",
    category: "Kids' fashion",
    section: "Kids",
    rating: 4.5,
    gender: "kids",
    price: 1500,
    originalPrice: 1800,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684160691/E-comm%20ATTIREX/Kids-Fashion/istockphoto-1361693056-612x612_vih0bi.jpg",
    isOutOfStock: false,
    description:
      "Bright and vibrant hoodie for kids with a kangaroo pocket and a hood.",
  },
  {
    _id: uuid(),
    name: "Printed T-Shirt",
    category: "Kids' fashion",
    section: "Kids",
    rating: 4.8,
    gender: "kids",
    price: 800,
    originalPrice: 1000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684160795/E-comm%20ATTIREX/Kids-Fashion/istockphoto-1356594834-612x612_p1ywwg.jpg",
    isOutOfStock: false,
    description:
      "Fun and playful printed t-shirt for kids with short sleeves and a crew neck.",
  },
  {
    _id: uuid(),
    name: "Denim Overalls",
    category: "Kids' fashion",
    section: "Kids",
    rating: 4.6,
    gender: "kids",
    price: 2000,
    originalPrice: 2500,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684160742/E-comm%20ATTIREX/Kids-Fashion/istockphoto-1296361252-612x612_rkq0ow.jpg",
    isOutOfStock: true,
    description:
      "Stylish denim overalls for kids with adjustable straps and multiple pockets.",
  },
  {
    _id: uuid(),
    name: "Striped Dress",
    category: "Kids' fashion",
    section: "Kids",
    rating: 4.2,
    gender: "kids",
    price: 1800,
    originalPrice: 2000,
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684160778/E-comm%20ATTIREX/Kids-Fashion/istockphoto-1154728772-612x612_keiw2m.jpg",
    isOutOfStock: false,
    description:
      "Adorable striped dress for kids with a flared skirt and a bow accent.",
  },
];
