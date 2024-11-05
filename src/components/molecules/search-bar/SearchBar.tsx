import { Input } from "@/components/atoms/input";
import { SEARCH_ICON } from "@/constants/icons";
import textContent from "@/constants/text.json";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const searchBarStyles = cva("flex items-center gap-2 relative w-full h-full");

type SearchBarProps = ComponentProps<"div"> &
  VariantProps<typeof searchBarStyles>;

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, ...props }, ref) => {
    const { header } = textContent.homePage;

    return (
      <div ref={ref} {...props} className={cn(searchBarStyles({ className }))}>
        <div className="absolute inset-y-0 left-0 top-1 flex items-center pl-3">
          {SEARCH_ICON}
        </div>
        <Input
          type="search"
          placeholder={header.searchPlaceholder}
          className="rounded-lg pl-10 text-black h-11 lg:rounded-l-none w-full"
          // border={false}
        />
      </div>
    );
  }
);

SearchBar.displayName = "SearchBar";

export default SearchBar;
