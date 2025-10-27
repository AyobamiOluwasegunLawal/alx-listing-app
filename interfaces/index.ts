import { StaticImageData } from "next/image";

export interface Property {
  id: number;
  title: string;
  description: string[];
  rating: number;
  location: string;
  specifications: {
    icon: StaticImageData;
    bedrooms?: string;
    bathrooms?: string;
    guests?: string;
  }[];
  pricePerNight: number;
  image: StaticImageData;
}

export type ButtonProp = {
  style?: boolean;
};
