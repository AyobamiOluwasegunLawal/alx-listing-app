import { ButtonProp } from "@/interfaces";

const Button = ({ style = false }: ButtonProp) => {
  return (
    <button
      type="submit"
      className={`${
        style ? "text-black border border-gray-100" : "bg-primary text-white"
      } w-fit rounded-3xl py-2.5 px-10 cursor-pointer`}
    >
      Button
    </button>
  );
};

export default Button;
