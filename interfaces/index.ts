import { StaticImageData } from "next/image";

export type ButtonProp = {
  style?: string;
  title: string;
};

export interface HeaderFormData {
  location: string;
  checkIn: string;
  checkOut: string;
  guest: string;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
