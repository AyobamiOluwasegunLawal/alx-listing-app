import { ICONS, IMAGES } from "@/constants";
import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import HeaderForm from "../common/HeaderForm";

const Header: React.FC = () => {
  return (
    <header>
      <div className="bg-primary pt-10 pb-2.5 px-4 md:py-2">
        <div className="flex justify-center items-center gap-5">
          <Image src={ICONS.briefcase} alt="case" className="size-5" />
          <p className="text-white">
            Overseas trip? Get the latest information on travel guides
          </p>

          <Button style={"bg-black text-white"} title="More Info" />
        </div>
      </div>

      <div className="py-5 border-b-2 border-b-gray-50">
        <div className="flex-between px-4 lg:px-20">
          <Image src={IMAGES.logo} alt="alx logo" className="hidden md:block" />

          <HeaderForm />

          <div className="hidden lg:flex gap-3">
            <Button title="Sign in" />
            <Button
              title="Sign up"
              style={"bg-transparent border border-gray-200 text-black"}
            />
          </div>

          <div className="bg-primary rounded-full p-0.5 lg:hidden shrink-0">
            <Image src={ICONS.profile} alt="profile" className="size-12" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
