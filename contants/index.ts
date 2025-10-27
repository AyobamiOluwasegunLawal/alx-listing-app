import propertyOne from "@/public/assets/images/image_2.png";
import propertyTwo from "@/public/assets/images/image_3.png";
import propertyThree from "@/public/assets/images/image_4.png";
import propertyFour from "@/public/assets/images/image_5.png";

//icons
import rating from "@/public/assets/icons/Star_1.png";
import bedroom from "@/public/assets/icons/bed.svg";
import bathroom from "@/public/assets/icons/bathtub.svg";
import person from "@/public/assets/icons/vector.png";
import { Property } from "@/interfaces";

export const PROPERTY_IMAGES = {
  propertyOne,
  propertyTwo,
  propertyThree,
  propertyFour,
};

export const ICONS = {
  rating,
  bedroom,
  bathroom,
  person,
};

//PROPERTIES
export const properties: Property[] = [
  {
    id: 1,
    title: "Villa Arrecife Beach House",
    description: ["Top Villa", "Self Check-in", "Free Reschedule"],
    rating: 4.76,
    location: "Sidemen, Bali, Indonesia",
    specifications: [
      {
        icon: ICONS.bedroom,
        bedrooms: "4",
      },

      {
        icon: ICONS.bathroom,
        bathrooms: "2",
      },

      {
        icon: ICONS.person,
        guests: "2–4",
      },
    ],
    pricePerNight: 2450,
    image: PROPERTY_IMAGES.propertyTwo, // or a real image URL
  },

  //   {
  //     id: 2,
  //     title: "Villa Arrecife Beach House",
  //     description: ["Top Villa", "Self Check-in", "Free Reschedule"],
  //     rating: 4.76,
  //     location: "Sidemen, Bali, Indonesia",
  //     specifications: [
  //       {
  //         icon: ICONS.bedroom,
  //         bedrooms: "4",
  //       },

  //       {
  //         icon: ICONS.bathroom,
  //         bathrooms: "2",
  //       },

  //       {
  //         icon: ICONS.person,
  //         guests: "2–4",
  //       },
  //     ],
  //     pricePerNight: 2450,
  //     image: PROPERTY_IMAGES.propertyThree, // or a real image URL
  //   },

  //   {
  //     id: 3,
  //     title: "Villa Arrecife Beach House",
  //     description: ["Top Villa", "Self Check-in", "Free Reschedule"],
  //     rating: 4.76,
  //     location: "Sidemen, Bali, Indonesia",
  //     specifications: [
  //       {
  //         icon: ICONS.bedroom,
  //         bedrooms: "4",
  //       },

  //       {
  //         icon: ICONS.bathroom,
  //         bathrooms: "2",
  //       },

  //       {
  //         icon: ICONS.person,
  //         guests: "2–4",
  //       },
  //     ],
  //     pricePerNight: 2450,
  //     image: PROPERTY_IMAGES.propertyFour, // or a real image URL
  //   },

  //   {
  //     id: 4,
  //     title: "Villa Arrecife Beach House",
  //     description: ["Top Villa", "Self Check-in", "Free Reschedule"],
  //     rating: 4.76,
  //     location: "Sidemen, Bali, Indonesia",
  //     specifications: [
  //       {
  //         icon: ICONS.bedroom,
  //         bedrooms: "4",
  //       },

  //       {
  //         icon: ICONS.bathroom,
  //         bathrooms: "2",
  //       },

  //       {
  //         icon: ICONS.person,
  //         guests: "2–4",
  //       },
  //     ],
  //     pricePerNight: 2450,
  //     image: PROPERTY_IMAGES.propertyOne, // or a real image URL
  //   },

  //   {
  //     id: 5,
  //     title: "Villa Arrecife Beach House",
  //     description: ["Top Villa", "Self Check-in", "Free Reschedule"],
  //     rating: 4.76,
  //     location: "Sidemen, Bali, Indonesia",
  //     specifications: [
  //       {
  //         icon: ICONS.bedroom,
  //         bedrooms: "4",
  //       },

  //       {
  //         icon: ICONS.bathroom,
  //         bathrooms: "2",
  //       },

  //       {
  //         icon: ICONS.person,
  //         guests: "2–4",
  //       },
  //     ],
  //     pricePerNight: 2450,
  //     image: PROPERTY_IMAGES.propertyOne, // or a real image URL
  //   },

  //   {
  //     id: 6,
  //     title: "Villa Arrecife Beach House",
  //     description: ["Top Villa", "Self Check-in", "Free Reschedule"],
  //     rating: 4.76,
  //     location: "Sidemen, Bali, Indonesia",
  //     specifications: [
  //       {
  //         icon: ICONS.bedroom,
  //         bedrooms: "4",
  //       },

  //       {
  //         icon: ICONS.bathroom,
  //         bathrooms: "2",
  //       },

  //       {
  //         icon: ICONS.person,
  //         guests: "2–4",
  //       },
  //     ],
  //     pricePerNight: 2450,
  //     image: PROPERTY_IMAGES.propertyOne, // or a real image URL
  //   },
];
