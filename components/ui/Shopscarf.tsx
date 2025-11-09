"use client";

import { useRouter } from "next/navigation";

type ShopScarfProps = {
  name: string;
  dimension: string;
  price: string | number;
  image: string;
  route: string;
};

export default function ShopScarf({
  name,
  dimension,
  price,
  image,
  route,
}: ShopScarfProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(route)}
      className="flex flex-col items-start gap-0 cursor-pointer"
    >
      <img
        src={image}
        alt={name}
        className="w-[300px] lg:w-[300px] xl:w-[400px] 2xl:w-[400px]"
      />

      <div className="flex flex-col gap-1 mx-5 lg:mx-10 w-full">
        <p className="font-bold text-xs">{name}</p>
        <p className="font-thin text-xs">{dimension}</p>
        <p className="text-xs">${price}</p>
      </div>
    </div>
  );
}
