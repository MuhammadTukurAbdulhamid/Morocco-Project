import React from "react";

interface ItemType {
  left: React.ReactNode;
  right?: React.ReactNode;
}

interface CarouselItemProps {
  item: ItemType;
  ind: number;
}

export default function CarouselItem({ item, ind }: CarouselItemProps) {
  return (
    <div
      style={{
        background:
          ind === 0
            ? 'linear-gradient(rgba(10, 25, 41, 0.7), rgba(26, 58, 82, 0.7)), url(landinghome.svg) no-repeat fixed center'
            : ind > 0
            ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(hero${ind}.png) no-repeat fixed center`
            : "rgb(245,247,250)",
        backgroundSize: "cover",
      }}
      className="flex w-full px-5 flex-col min-h-[70vh] md:min-h-[80vh] justify-start md:flex-row md:justify-between items-center flex-1 bg-silver md:px-20 lg:px-40"
    >
      {item.left}
      {item.right}
    </div>
  );
}