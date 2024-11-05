import AccordianSection from "@/components/accordian/AccordianSection";
import { GetAppDownload } from "@/components/app-download";
import { Box, Stack } from "@/components/atoms";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { LocalityGrid } from "@/components/locality-grid";
import ProductsGrid, { Product } from "@/components/products-grid/ProductsGrid";
import {
  collections,
  delivaryAndcollections,
  dineInItems,
  dineOutItems,
  groceryAndAlcoholItems,
  groceryItems,
  mealKitsAndBoxMeals,
  popularCategories,
} from "@/constants/data";
import { HERO_IMAGE } from "@/constants/images";
import { ArrowRight } from "@/constants/svgs";
import { useCallback, useEffect, useState } from "react";

const HomePage = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleProductsShow = useCallback(
    (data: Product[]) => {
      console.log("screenSize", screenSize);

      return screenSize < 640
        ? data.slice(0, 2)
        : screenSize < 1024
        ? data.slice(0, 3)
        : data.slice(0, 4);
    },
    [screenSize]
  );

  return (
    <Box className="flex flex-col items-center justify-center min-h-screen">
      <Header />

      <HeroSection
        title="50% OFF"
        subtitle="TODAY'S DAILY DEALS"
        description="Our Delicious Chicken Nuggets!"
        primaryButtonText="SHOP NOW"
        secondaryButtonText="Learn More"
        imageSrc={HERO_IMAGE}
        imageAlt="Our Delicious Chicken Nuggets!"
        theme="primary"
        contentAlign="center"
        spacing="none"
      />

      <Stack className="w-full max-w-screen-2xl mx-auto py-6 md:py-8 lg:py-12 px-4 md:px-20 lg:px-24 xl:px-32 gap-6 md:gap-8 lg:gap-12">
        <ProductsGrid
          productDetails={popularCategories.slice(0, 4)}
          sectionTitle="Popular Categories"
          sectionSubtitle="Explore the Categories Making Waves Right Now"
          btnText="See All"
          icon={<ArrowRight />}
        />

        <ProductsGrid
          productDetails={handleProductsShow(delivaryAndcollections)}
          sectionTitle="Delivery & Collection"
          btnText="See All"
          icon={<ArrowRight />}
        />

        <ProductsGrid
          productDetails={handleProductsShow(dineOutItems)}
          sectionTitle="Dine Out"
          btnText="See All"
          icon={<ArrowRight />}
        />

        <ProductsGrid
          productDetails={handleProductsShow(dineInItems)}
          sectionTitle="Dine In"
          btnText="See All"
          icon={<ArrowRight />}
        />

        <ProductsGrid
          productDetails={handleProductsShow(groceryItems)}
          sectionTitle="Grocery"
          btnText="See All"
          icon={<ArrowRight />}
        />

        <ProductsGrid
          productDetails={handleProductsShow(collections)}
          sectionTitle="Collections"
          sectionSubtitle="Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends"
          btnText="See All"
          icon={<ArrowRight />}
        />

        <ProductsGrid
          productDetails={handleProductsShow(mealKitsAndBoxMeals)}
          sectionTitle="Meal Kits & Box Meals"
          sectionSubtitle="Perfectly Packaged Meals for Quick and Easy Enjoyment"
          btnText="See All"
          icon={<ArrowRight />}
        />

        <ProductsGrid
          productDetails={handleProductsShow(groceryAndAlcoholItems)}
          sectionTitle="Grocery & Alcohol"
          sectionSubtitle="Essential Groceries and Fine Spirits Delivered to Your Door"
          btnText="See All"
          icon={<ArrowRight />}
        />

        <LocalityGrid />
      </Stack>

      <GetAppDownload />
      <AccordianSection />
    </Box>
  );
};

export default HomePage;
