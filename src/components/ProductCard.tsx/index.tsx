import { useState } from "react";
import { Badge } from "../Badge";
import { Button } from "../Button";

type ProductCardProps = {
  image: string;
  title: string;
  brand: string;
  discount: string;
  oldPrice: string;
  price: string;
  clubPrice: string;
  installment: string;
  buttonName: string;
  width?: string;
  height?: string;
  variant?: "default" | "custom";
};

export function ProductCard({
  image,
  title,
  brand,
  discount,
  oldPrice,
  price,
  clubPrice,
  installment,
  buttonName,
  width = "min-w-[168.99px]",
  height = "h-[335.73px]",
  variant = "default",
}: ProductCardProps) {
  const [wished, setWished] = useState(false);
  const isCustom = variant === "custom";

  return (
    <article className={`rounded-3xl bg-[#FAFAF8] w-full ${width} ${height}`}>
      <div className="relative bg-[#F6F6F6] rounded-t-3xl">
        <Badge
          className={`font-semibold  tracking-[2%] leading-[21.1px] absolute 
               ${isCustom ? "top-4 w-13.5 h-5.25 left-3 text-[14px]" : "top-[12.7px] w-[40.74px] h-[15.84px] left-2.5 text-[10.56px]"}`}
        >
          {discount}
        </Badge>

        <button
          onClick={() => setWished((prev) => !prev)}
          className={` absolute transition-transform hover:scale-110 
            ${isCustom ? "top-4 right-5 p-1 " : "top-[12.7px] right-2.5 p-1 "}`}
          aria-label="Favoritar"
        >
          <svg
            width={`${isCustom ? "24" : "20"}`}
            height={`${isCustom ? "24" : "20"}`}
            viewBox="0 0 24 24"
            fill={wished ? "#C8102E" : "rgba(255,255,255,0.5)"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21C12 21 3 14.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 13 5.08C14.09 3.81 15.76 3 17.5 3C20.58 3 23 5.42 23 8.5C23 14.5 12 21 12 21Z"
              stroke={wished ? "#C8102E" : "#555555"}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={`${isCustom ? "pt-[49.68px]" : "pt-1"}`}>
          <img
            src={image}
            alt={title}
            className={`h-40 object-contain ${isCustom ? "w-full  px-[12.5px]" : "w-full  px-[12.5px] "}`}
          />
        </div>
      </div>

      <div className={`px-3 ${isCustom ? "pt-1" : ""}`}>
        <span
          className={` uppercase tracking-[2%] text-neutral-gray-500 ${isCustom ? "text-[12px]" : "text-[10px]"}`}
        >
          {brand}
        </span>

        <h3
          className={`tracking-[2%] text-primary-black font-normal${isCustom ? "text-[16px]  leading-5 " : "text-[14px]  leading-[15.1px] "}`}
        >
          {title}
        </h3>

        <span
          className={`tracking-[2%] block text-neutral-gray-500 line-through font-semibold ${isCustom ? "mt-3 text-[12px] leading-4.5" : "text-[10px] leading-[13.6px]"}`}
        >
          {oldPrice}
        </span>

        <strong
          className={`tracking-[2%] text-primary-red-700 block font-semibold mt-1 leading-[18.1px] ${isCustom ? "text-xl" : "  text-[15.09px]"}`}
        >
          {price}
        </strong>

        <span
          className={`flex font-normal tracking-[2%]  ${isCustom ? "mt-1.5 gap-1 leading-5.5 text-[12px]" : "mt-1 gap-1 leading-[16.6px] text-[9.05px]"}`}
        >
          <p className="text-acento-yellow-400">{clubPrice}</p>{" "}
          <p className="text-neutral-gray-700">no clube</p>
        </span>

        <span
          className={` tracking-[2%] whitespace-nowrap text-neutral-gray-500 ${isCustom ? "mt-1 flex gap-1  text-[12px] leading-5.5 " : "mt-1 flex gap-1  text-[9.05px] leading-[16.6px]"}`}
        >
          <p className="font-normal">ou</p>
          <p className="font-bold">{installment}</p>
          <p className="font-normal">sem juros</p>
        </span>

        <Button
          className={` uppercase ${isCustom ? "mt-3" : "mt-2"}`}
          size={`${isCustom ? "md" : "sm"}`}
        >
          {buttonName}
        </Button>
      </div>
    </article>
  );
}
