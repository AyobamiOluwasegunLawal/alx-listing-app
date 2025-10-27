import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <div>
      <h1>AirBNB project</h1>

      <Card />
      <Button />
      <Button style={true} />
    </div>
  );
}
