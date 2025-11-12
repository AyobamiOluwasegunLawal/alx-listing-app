import { ButtonProp } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProp> = ({ title, style }) => {
  return (
    <button
      type="submit"
      className={`${
        style ?? "bg-primary text-white"
      } rounded-3xl px-4 py-1.5 whitespace-pre cursor-pointer text-sm4`}
    >
      {title}
    </button>
  );
};

export default Button;
