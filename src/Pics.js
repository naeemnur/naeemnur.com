import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: "/images/birds.jpeg",
    original: "/images/birds.jpeg",
    width: 1776,
    height: 1184,
    tags: [
      { value: "Fujifilm XF10" },
    ],
  },
  {
    src: "/images/athar.jpeg",
    original: "/images/athar.jpeg",
    width: 1712,
    height: 1133,
    tags: [
      { value: "Fujifilm XF10" },
    ],
  },
  {
    src: "/images/birdtree.jpeg",
    original: "/images/birdtree.jpeg",
    width: 2048,
    height: 1536,
    tags: [
      { value: "Lumix GX9" },
      { value: "Lumix 20mm" },

    ],
  },
  {
    src: "/images/wheels.jpeg",
    original: "/images/wheels.jpeg",
    width: 1211,
    height: 807,
    tags: [
      { value: "Fujifilm XF10" },
    ],
  },
  {
    src: "/images/birdy.jpeg",
    original: "/images/birdy.jpeg",
    width: 1809,
    height: 1537,
    tags: [
      { value: "Lumix GX9" },
      { value: "Lumix 12-60mm" },

    ],
  },
  {
    src: "/images/fort2.jpeg",
    original: "/images/fort2.jpeg",
    width: 1329,
    height: 885,
    tags: [
      { value: "Fujifilm XF10" },
    ],
  }, 
  {
    src: "/images/garage.jpeg",
    original: "/images/garage.jpeg",
    width: 1776,
    height: 1184,
    tags: [
      { value: "Fujifilm XF10" },
    ],
  },
  {
    src: "/images/umbrella.jpeg",
    original: "/images/umbrella.jpeg",
    width: 2048,
    height: 1535,
    tags: [
      { value: "Lumix GX9" },
      { value: "Leica 15mm" },

    ],
  },
];