import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";
import Input from "../normal-input/Input";

const searchInputVariants = cva(
  "rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 h-12 pl-10 pr-4 py-2 text-base",
  {
    variants: {
      variant: {
        default:
          "text-black border-gray-200 focus:border-teal-500 focus:ring-teal-200",
        primary: "border-teal-200 focus:border-teal-500 focus:ring-teal-200",
        error: "border-red-300 focus:border-red-500 focus:ring-red-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const iconVariants = cva(["absolute -translate-y-1/2 text-gray-400"], {
  variants: {
    variant: {
      default: "left-3 top-1/2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type SearchInputProps = ComponentProps<"input"> &
  VariantProps<typeof searchInputVariants> &
  VariantProps<typeof iconVariants> & {
    icon?: React.ReactNode;
    placeholder?: string;
    iconStyles?: string;
  };

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, variant, icon, iconStyles, placeholder, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div className={cn(iconVariants({ variant }), iconStyles)}>
            {icon}
          </div>
        )}
        <Input
          type="search"
          className={cn(searchInputVariants({ variant, className }))}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
