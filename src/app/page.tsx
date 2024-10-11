"use client";

import { Button } from "@/stories/button/Button";
import SVG from "@/svg/SVG";
import { mobileLogoPaths, websiteLogoPaths } from "@/svg/svgPaths";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="">STORY BOOK TUITORIAL</h1>

      <Button
        label="Hello"
        className="w-full sm:w-64 md:w-80 lg:w-96"
        height="50px"
        textColor="white"
        backgroundColor="blue"
      />

      <div className="svg flex flex-col gap-4 bg-black w-full items-center justify-center h-20">
        <SVG
          width="37"
          height="36"
          viewBox="0 0 37 36"
          fill="#000"
          paths={websiteLogoPaths}
        />
        <SVG
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          paths={mobileLogoPaths}
        />
      </div>
    </div>
  );
}
