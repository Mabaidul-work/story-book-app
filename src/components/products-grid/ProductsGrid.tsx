import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";
import { Box, Button, Typography } from "../atoms";
import ProductCard from "./ProductCard";

const cardsStyles = cva([
  "w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-5",
]);

export type Product = {
  id: number;
  title?: string;
  imgUrl?: string;
  availablePlaces?: number;
};
type ProductsGridprops = VariantProps<typeof cardsStyles> & {
  productDetails: Product[];
  className?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
  btnText?: string;
  icon?: React.ReactNode;
};

const ProductsGrid: FC<ProductsGridprops> = ({
  productDetails,
  className,
  sectionTitle,
  sectionSubtitle,
  btnText,
  icon,
}) => {
  return (
    <Box className="w-full flex flex-col gap-3 md:gap-4 lg:gap-5">
      <div className="w-full">
        <div className="w-full flex items-center justify-between mb-1 md:mb-2">
          <Typography as="h2" className="font-bold text-xl lg:text-2xl">
            {sectionTitle}
          </Typography>
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-sm lg:text-base"
          >
            {btnText}
            {icon}
          </Button>
        </div>
        <Typography
          as="h3"
          className="text-sm md:text-base lg:text-lg text-gray-500"
        >
          {sectionSubtitle}
        </Typography>
      </div>
      <div className={cn(cardsStyles(), className)}>
        {productDetails.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </Box>
  );
};

export default ProductsGrid;
