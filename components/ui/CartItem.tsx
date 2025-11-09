"use client";
import { Minus, Plus } from "phosphor-react";

interface ScarfItemProps {
  imageSrc: string;
  name: string;
  size: string;
  price: number | string;
  quantity?: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

export default function CartItem({
  imageSrc,
  name,
  size,
  price,
  quantity = 1,
  onIncrease,
  onDecrease,
  onRemove,
}: ScarfItemProps) {
  return (
    <div className="flex flex-row justify-between gap-5 mt-10 w-full">
      {/* Left side — image and info */}
      <div className="flex flex-row gap-2 justify-center">
        <div>
          <img
            src={imageSrc}
            alt={name}
            className="w-[100px] lg:w-[100px] lg:h-[100px]"
          />
        </div>

        <div className="flex flex-col justify-around">
          <div>
            <p className="comforter text-xs lg:text-xl">{name}</p>
            <p className="text-xs mt-1">SIZE {size}</p>
          </div>

          <div>
            <button
              onClick={onRemove}
              className="blank-btn--white underline -mx-6"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      {/* Right side — quantity and price */}
      <div className="flex flex-col items-end justify-around">
        <div className="flex flex-row items-center gap-2 text-xs">
          <button onClick={onDecrease} className="blank-btn--white unset">
            <Minus />
          </button>
          <span>{quantity}</span>
          <button onClick={onIncrease} className="blank-btn--white unset">
            <Plus />
          </button>
        </div>
        <div>
          <p className="text-xs lg:text-md">$ {price}</p>
        </div>
      </div>
    </div>
  );
}
