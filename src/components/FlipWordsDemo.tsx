import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Web Developer", "IT Officer", "Designer", "IT Consulting"];

  return <FlipWords words={words} />;
}
