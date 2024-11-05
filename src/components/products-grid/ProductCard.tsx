import { ArrowRight } from "@/constants/svgs";
import Image from "next/image";
import { Box, Button, Typography } from "../atoms";
import { Product } from "./ProductsGrid";

const ProductCard = ({ title, imgUrl, availablePlaces }: Product) => {
  return (
    <Box className="w-full rounded-xl relative">
      <Image
        src={imgUrl?.toString() ?? ""}
        alt={title || "Product"}
        title={title || "Product"}
        width={200}
        height={200}
        className="w-full h-full object-cover rounded-xl"
      />
      {availablePlaces && (
        <div className="absolute bottom-2 left-2 right-2 flex flex-col items-start ">
          <Typography className="text-white">{title}</Typography>
          <Button
            variant="ghost"
            className="text-white text-xs flex items-center gap-1 pl-0"
          >
            {availablePlaces} Places <ArrowRight pathFillColor="#fff" />
          </Button>
        </div>
      )}
    </Box>
  );
};

export default ProductCard;
