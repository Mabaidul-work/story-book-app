"use client";
import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import { forwardRef } from "react";
import { Box, Button, Stack, Typography } from "../atoms";
import { Code } from "../molecules";

const heroSectionThemeSet = cva("w-full ", {
  variants: {
    theme: {
      light: "bg-white text-gray-900",
      dark: "bg-gray-900 text-white",
      primary: "bg-primary-300 text-primary-800",
    },
  },
  defaultVariants: {
    theme: "primary",
  },
});

const heroSectionStyles = cva(
  "w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between pt-8 lg:pt-6",
  {
    variants: {
      spacing: {
        default: "gap-8",
        loose: "gap-12",
        tight: "gap-4",
        none: "gap-0",
      },
      imagePosition: {
        right: "lg:flex-row",
        left: "lg:flex-row-reverse",
      },
    },
    defaultVariants: {
      spacing: "default",
      imagePosition: "right",
    },
  }
);

const contentVariants = cva(
  "flex flex-col text-bold text-[64px] leading-[88px] md:text-[80px] md:leading-[98px] xl:text-[100px] xl:leading-[136px] text-primary-800 font-manrope",
  {
    variants: {
      align: {
        left: "text-left items-start",
        center: "text-center items-center justify-center",
        right: "text-right items-end",
      },
      defaultVariants: {
        align: "center",
      },
    },
  }
);

export interface HeroSectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof heroSectionThemeSet>,
    VariantProps<typeof heroSectionStyles> {
  title: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
  imageSrc: string;
  imageAlt: string;
  contentAlign?: VariantProps<typeof contentVariants>["align"];
  className?: string;
  textColor?: string;
  subtitleStyle?: string;
  titleStyle?: string;
  descriptionStyle?: string;
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      title,
      subtitle,
      description,
      primaryButtonText,
      secondaryButtonText,
      primaryButtonAction,
      imageSrc,
      imageAlt,
      theme,
      spacing,
      contentAlign,
      textColor,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <section ref={ref} className={cn(heroSectionThemeSet({ theme }))}>
        <Box
          className={cn(heroSectionStyles({ spacing }), className)}
          {...props}
        >
          <Stack className="items-center justify-center w-full lg:w-[43%] space-y-6 lg:pl-12 xl:pl-24">
            <Typography
              as="h1"
              className={cn(
                contentVariants({ align: contentAlign }),
                textColor
              )}
            >
              {subtitle && (
                <Typography
                  as="span"
                  className={`font-medium text-sm md:text-lg lg:text-2xl ${textColor}`}
                >
                  {subtitle}
                </Typography>
              )}
              {title}
              {description && (
                <Typography
                  as="span"
                  className={`font-bold text-lg md:text-2xl xl:text-[34px] ${textColor}`}
                >
                  {description}
                </Typography>
              )}
            </Typography>

            <div className="flex flex-col gap-4">
              {primaryButtonText && (
                <Button
                  onClick={primaryButtonAction}
                  className="bg-white text-primary-800 hover:bg-primary-200"
                >
                  {primaryButtonText}
                </Button>
              )}
              {secondaryButtonText && <Code code="45678902" />}
            </div>
          </Stack>
          <div className="w-full lg:w-[57%] flex items-end">
            <Image
              src={imageSrc}
              alt={imageAlt}
              title={imageAlt}
              width={500}
              height={500}
              className="w-full h-full  "
            />
          </div>
        </Box>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
