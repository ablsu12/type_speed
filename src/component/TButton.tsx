import { ButtonProps } from "../type/type.ts";

export const TButton = ({ value, clickHandler }: ButtonProps) => {
  return (
    <button
      className={
        "w-20 h-12 flex justify-center items-center rounded-md mx-2 bg-sky-50"
      }
      onClick={clickHandler}
    >
      {value}
    </button>
  );
};
