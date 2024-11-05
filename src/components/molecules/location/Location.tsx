import { Input } from "@/components/atoms/input";
import { LOCATION_ICON } from "@/constants/icons";
import textContent from "@/constants/text.json";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const locationStyles = cva("flex items-center gap-2 relative w-full h-full");

type LocationProps = ComponentProps<"div"> &
  VariantProps<typeof locationStyles>;

const Location = forwardRef<HTMLInputElement, LocationProps>(
  ({ className, ...props }, ref) => {
    const { header } = textContent.homePage;

    return (
      <div ref={ref} {...props} className={cn(locationStyles({ className }))}>
        <div className="absolute inset-y-0 left-0 top-0 flex items-center pl-3">
          {LOCATION_ICON}
        </div>
        <Input
          type="text"
          placeholder={header.defaultLocationName}
          className="rounded-lg pl-10 text-black h-11 lg:rounded-r-none"
          // border={false}
        />
      </div>
    );
  }
);

Location.displayName = "Location";

export default Location;
