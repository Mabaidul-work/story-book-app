"use client";

import { locations } from "@/constants/data";
import {
  LOCATION_ICON,
  mobileOutlineIcon,
  SEARCH_ICON,
  websiteLogo,
} from "@/constants/icons";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import {
  ComponentPropsWithRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { Box, Button } from "../atoms";
import { ButtonWithIcon } from "../atoms/button";
import { SearchInput } from "../atoms/input";
import { ButtonList } from "../molecules";

const buttons = [
  {
    id: 1,
    Component: (
      <ButtonWithIcon
        icon={mobileOutlineIcon}
        className="py-1 md:py-2 px-1.5 sm:px-2 text-sm md:text-base text-white hover:bg-primary-600"
      >
        Get app
      </ButtonWithIcon>
    ),
    title: "Get app",
  },
  {
    id: 2,
    Component: (
      <Button className="py-1 md:py-2 px-1.5 sm:px-2 text-sm md:text-base">
        Log in
      </Button>
    ),
    title: "Log in",
  },
  {
    id: 3,
    Component: (
      <Button className="py-1 md:py-2 px-1.5 sm:px-2 text-sm md:text-base">
        Sign up
      </Button>
    ),
    title: "Sign up",
  },
];

const headerStyles = cva([
  "w-full bg-primary-500 text-white px-4 pt-5 pb-3 sm:px-10 md:px-20 lg:px-14 lg:py-4",
]);

type HeaderProps = ComponentPropsWithRef<"header"> &
  VariantProps<typeof headerStyles>;

const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, ...props }, ref) => {
    const [inputValue, setInputValue] = useState(locations[0]?.location);
    const [suggestions, setSuggestions] = useState(locations);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          setShowSuggestions(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLocationInputChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const value = e.target.value;
      setInputValue(value);

      const filteredSuggestions = locations.filter((item) =>
        item.location.toLowerCase().includes(value.toLowerCase())
      );

      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    };

    const handleLocationSelect = (location: string) => {
      setInputValue(location);
      setShowSuggestions(false);
      // console.log("Selected:", location);
    };

    const LocationSearchInput = () => (
      <div className="relative w-full" ref={wrapperRef}>
        <SearchInput
          value={inputValue}
          onChange={handleLocationInputChange}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Location"
          icon={LOCATION_ICON}
          className="rounded-tr-none rounded-br-none w-full"
        />

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 text-black bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto custom-scrollbar">
            {suggestions.map((item) => (
              <div
                key={item.id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onMouseDown={() => handleLocationSelect(item.location)}
              >
                {item.location}
              </div>
            ))}
          </div>
        )}
      </div>
    );

    return (
      <header ref={ref} className={cn(headerStyles({ className }))} {...props}>
        <Box className="flex flex-col gap-2 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center justify-between w-full">
            <div className="lg:flex lg:items-center lg:justify-start lg:gap-7 w-fit">
              {websiteLogo}
              <div className="hidden lg:flex lg:items-center lg:justify-center w-full relative">
                <div className="w-64">{LocationSearchInput()}</div>
                <div className="flex-1 xl:w-96">
                  <SearchInput
                    icon={SEARCH_ICON}
                    iconStyles="left-4 top-[55%]"
                    placeholder="Search for restaurant and food"
                    className="rounded-tl-none rounded-bl-none w-full"
                    onChange={(e) => console.log(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <ButtonList
              buttons={buttons}
              className="sm:gap-4 md:gap-6 lg:gap-3 xl:gap-10"
            />
          </div>
          {/* INPUTS FOR MOBILE */}
          <div className="flex flex-col gap-2 lg:hidden w-full">
            {LocationSearchInput()}
            <SearchInput
              icon={SEARCH_ICON}
              iconStyles="left-4 top-[55%]"
              placeholder="Search for restaurant and food"
              className="w-full lg:w-[60%]"
            />
          </div>
        </Box>
      </header>
    );
  }
);

Header.displayName = "Header";

export default Header;
