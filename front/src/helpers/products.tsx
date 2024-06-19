interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}
const productsToPreLoad: Product[] = [
  {
    id: 1,
    name: "iPhone 11",
    price: 699,
    description: "Experience power and elegance with the iPhone 11...",
    image: "https://pngimg.com/d/iphone_11_PNG38.png",
    categoryId: 0,
    stock: 10,
  },
  {
    id: 2,
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air...",
    image: "https://pngimg.com/d/macbook_PNG78.png",
    categoryId: 1,
    stock: 10,
  },
  {
    id: 3,
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro...",
    image:
      "https://images.squarespace-cdn.com/content/v1/605242bb8e9617719570c243/1636476096333-25U1X5N1TTV534OX44DQ/IPad+Pro.png",
    categoryId: 3,
    stock: 10,
  },
  {
    id: 4,
    name: "Apple Watch Series 6",
    price: 399,
    description: "Stay connected and healthy with the Apple Watch Series 6...",
    image:
      "https://cdn-ipoint.waugi.com.ar/img/cms/landings-fichas/Watch/Watch%20Series%206/RX-S1_Smart_1_GPS.png",
    categoryId: 4,
    stock: 10,
  },
  {
    id: 5,
    name: "AirPods Pro",
    price: 249,
    description: "Immerse yourself in sound with the AirPods Pro...",
    image:
      "https://png.pngtree.com/png-vector/20231104/ourmid/pngtree-apple-airpods-pro-png-image_10477533.png",
    categoryId: 5,
    stock: 10,
  },
  {
    id: 6,
    name: "HomePod mini",
    price: 99,
    description: "Elevate your home audio experience with the HomePod mini...",
    image:
      "https://www.micromidi.es/wp-content/uploads/2021/10/homepod-mini-micromidi-2021_07.png",
    categoryId: 6,
    stock: 10,
  },
  {
    id: 7,
    name: "iPhone 12 Pro",
    price: 999,
    description:
      "Un poderoso dispositivo con un increíble sistema de cámara...",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero",
    categoryId: 1,
    stock: 15,
  },
  {
    id: 8,
    name: "iPad Air",
    price: 599,
    description: "Experimenta potencia y versatilidad con el iPad Air...",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-blue-202009",
    categoryId: 3,
    stock: 15,
  },
  {
    id: 9,
    name: "Apple Magic Keyboard",
    price: 99,
    description:
      "Experimenta comodidad y precisión con el Apple Magic Keyboard...",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXQT2?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1598599162000",
    categoryId: 8,
    stock: 25,
  },
  {
    id: 10,
    name: "MacBook Pro 13 pulgadas",
    price: 1299,
    description: "Supera tu trabajo con el MacBook Pro con el chip Apple M1...",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=892&hei=820&&qlt=80&.v=1603406905000",
    categoryId: 2,
    stock: 18,
  },
  {
    id: 11,
    name: "Apple TV 4K",
    price: 179,
    description:
      "Sumérgete en el video de la más alta calidad con el Apple TV 4K...",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1617732707000",
    categoryId: 5,
    stock: 20,
  },
  {
    id: 12,
    name: "Apple Pencil (2da generación)",
    price: 129,
    description: "Desbloquea nuevas posibilidades con el Apple Pencil...",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU8F2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1562954626666",
    categoryId: 8,
    stock: 23,
  },
  {
    id: 13,
    name: "Apple TV HD",
    price: 149,
    description: "Disfruta de tu contenido favorito en HD con el Apple TV...",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-hero-select-201510_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1596110685000",
    categoryId: 5,
    stock: 18,
  },
  {
    id: 14,
    name: "iPhone 13",
    price: 799,
    description: "Experimenta el futuro del iPhone con el iPhone 13...",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-select-2021",
    categoryId: 1,
    stock: 15,
  },
  {
    id: 15,
    name: "Apple TV 4K (2da generación)",
    price: 179,
    description:
      "Sumérgete en un impresionante contenido HDR 4K con el Apple TV 4K...",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-4k-hero-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1617732707000",
    categoryId: 5,
    stock: 17,
  },
  {
    id: 16,
    name: "Cargador Apple MagSafe",
    price: 39,
    description:
      "Carga tu iPhone 12 o iPhone 13 sin esfuerzo con el Cargador Apple MagSafe...",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1603996255000",
    categoryId: 8,
    stock: 23,
  },
  {
    id: 17,
    name: "Cable Apple Thunderbolt 3 (USB-C) (0.8m)",
    price: 39,
    description:
      "Conecta tus dispositivos Thunderbolt 3 con este cable de alto rendimiento...",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQ4H2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1503676607000",
    categoryId: 8,
    stock: 16,
  },
  {
    id: 18,
    name: "Adaptador Apple USB-C Digital AV Multiport",
    price: 69,
    description: "Conecta tus dispositivos USB-C a una pantalla HDMI...",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJ1K2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1521749818000",
    categoryId: 8,
    stock: 17,
  },
  {
    id: 19,
    name: "Adaptador de corriente USB-C de 20W de Apple",
    price: 19,
    description:
      "Carga rápida tu iPhone, iPad u otros dispositivos con el Adaptador de corriente USB-C de 20W...",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHJY3?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1600640674000",
    categoryId: 8,
    stock: 20,
  },
  {
    id: 20,
    name: "Cable de carga Lightning a USB (1 m)",
    price: 19,
    description:
      "Carga y sincroniza tu iPhone y otros dispositivos Lightning con este cable de 1 metro...",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MD818?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1496943865039",
    categoryId: 8,
    stock: 18,
  },
];

export default productsToPreLoad;
