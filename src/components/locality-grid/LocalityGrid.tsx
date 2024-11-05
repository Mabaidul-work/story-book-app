"use client";
import { ArrowRight } from "@/constants/svgs";
import theme from "@/constants/theme.json";
import { ComponentProps, forwardRef, useState } from "react";
import { Box, Button, Typography } from "../atoms";
import { ButtonWithIcon } from "../atoms/button";

const defaultLocalities = [
  { name: "Marylebone", places: 6 },
  { name: "Paddington", places: 6 },
  { name: "Kensington", places: 6 },
  { name: "South Hampstead", places: 6 },
  { name: "Earl's Court", places: 6 },
  { name: "Chelsea", places: 6 },
  { name: "Westminster", places: 6 },
  { name: "Lambeth", places: 6 },
  { name: "Mayfair", places: 8 },
  { name: "Soho", places: 7 },
  { name: "Covent Garden", places: 9 },
  { name: "Bloomsbury", places: 5 },
  { name: "Camden Town", places: 8 },
  { name: "Islington", places: 7 },
  { name: "Shoreditch", places: 8 },
  { name: "Whitechapel", places: 5 },
  { name: "Notting Hill", places: 7 },
  { name: "Fulham", places: 6 },
  { name: "Battersea", places: 5 },
  { name: "Greenwich", places: 7 },
  { name: "Canary Wharf", places: 8 },
  { name: "Richmond", places: 6 },
  { name: "Hampstead", places: 5 },
  { name: "Brixton", places: 7 },
];

// const styles = cva([]);

interface Locality {
  name: string;
  places: number;
}

type LocalityGridProps = ComponentProps<"div"> & {
  localities?: Locality[];
  isLoading?: boolean;
  hasError?: boolean;
  errorMessage?: string;
};

const LocalityGrid = forwardRef<HTMLDivElement, LocalityGridProps>(
  (
    {
      localities = defaultLocalities,
      isLoading = false,
      hasError = false,
      errorMessage = "An error occurred",
    },
    ref
  ) => {
    const [renderedLocality, setRenderedLocality] = useState(8);

    const handleSeeMoreBtnClick = () => {
      let timer;
      if (renderedLocality < localities.length) {
        timer = setInterval(() => {
          setRenderedLocality((prev) => prev + 1);
        }, 150);
      } else {
        clearInterval(timer);
        setRenderedLocality(localities.length);
      }
    };

    if (isLoading) {
      return (
        <div className="w-full max-w-4xl mx-auto p-4" ref={ref}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg animate-pulse bg-gray-100"
              >
                <div className="h-6 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (hasError) {
      return (
        <div className="w-full max-w-4xl mx-auto p-4">
          <div className="text-red-500 text-center p-4 border border-red-200 rounded-lg bg-red-50">
            {errorMessage}
          </div>
        </div>
      );
    }

    if (!localities || localities.length === 0) {
      return (
        <div className="w-full max-w-4xl mx-auto p-4">
          <div className="text-gray-500 text-center p-4 border rounded-lg">
            No localities available
          </div>
        </div>
      );
    }

    return (
      <Box className="w-full max-w-screens-2xl mx-auto p-4">
        <Typography as="h2" className="text-xl font-bold mb-4">
          Popular localities in and around London
        </Typography>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {localities.slice(0, renderedLocality).map((locality) => (
            <Button
              variant={"outline"}
              key={locality.name}
              className="w-full p-3 border-gray-500 border-t border-l border-r-[3px] border-b-[3px] rounded-lg hover:bg-gray-50 text-left transition-colors"
            >
              <div className="flex justify-between items-center">
                <div>
                  <Typography as="h3" className="font-medium text-gray-900">
                    {locality.name}
                  </Typography>
                  <Typography className="text-sm text-gray-600 flex items-center gap-2">
                    {locality.places} Places{" "}
                    <ArrowRight pathFillColor={theme.colors.black} />
                  </Typography>
                </div>
              </div>
            </Button>
          ))}

          {renderedLocality <= 8 && (
            <ButtonWithIcon
              variant={"outline"}
              icon={
                <ArrowRight
                  width="10"
                  height="10"
                  pathFillColor={theme.colors.black}
                />
              }
              iconPosition={"right"}
              className="w-full p-3 border-gray-500 border-t border-l border-r-[3px] border-b-[3px] rounded-lg hover:bg-gray-50 text-left transition-colors text-black"
              onClick={handleSeeMoreBtnClick}
            >
              See more
            </ButtonWithIcon>
          )}
        </div>
      </Box>
    );
  }
);

LocalityGrid.displayName = "LocalityGrid";

export default LocalityGrid;
