"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonTwo />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./1.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./2.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./3.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./4.png",
  },
  {
    id: 5,
    content: <SkeletonOne />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./5.png",
  },
  {
    id: 6,
    content: <SkeletonOne />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./6.png",
  },
  {
    id: 7,
    content: <SkeletonTwo />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./7.png",
  },
  {
    id: 8,
    content: <SkeletonOne />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./8.png",
  },
  {
    id: 9,
    content: <SkeletonOne />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./9.png",
  },
  {
    id: 10,
    content: <SkeletonOne />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./10.png",
  },
  {
    id: 11,
    content: <SkeletonOne />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./11.png",
  },
  {
    id: 12,
    content: <SkeletonOne />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./12.png",
  },
  {
    id: 13,
    content: <SkeletonOne />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./13.png",
  },
  {
    id: 14,
    content: <SkeletonOne />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./14.png",
  },
  {
    id: 15,
    content: <SkeletonOne />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./15.png",
  },
  {
    id: 16,
    content: <SkeletonOne />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./16.png",
  },
  {
    id: 17,
    content: <SkeletonOne />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./17.png",
  },
  {
    id: 18,
    content: <SkeletonOne />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./18.png",
  },
  {
    id: 19,
    content: <SkeletonOne />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./19.png",
  },
  {
    id: 20,
    content: <SkeletonOne />,
    className: "md:col-4 col-12 row-4",
    thumbnail: "./20.png",
  },
];
