import { AppleIcon } from "@/constants/svgs";
import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { FC } from "react";

export const googlePlayButtonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "gap-3",
    "px-4",
    "py-2",
    "rounded-lg",
    "transition-colors",
    "duration-200",
    "hover:opacity-90",
  ],
  {
    variants: {
      variant: {
        default: ["bg-black", "text-white"],
        custom: [],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AppDownloadBtnProps {
  text?: string;
  subText?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const AppDownloadBtn: FC<AppDownloadBtnProps> = ({
  text = "GET IT ON",
  subText = "Google Play",
  bgColor,
  textColor,
  className,
  href = "https://play.google.com",
  onClick,
  icon,
}) => {
  const hasCustomColors = bgColor || textColor;
  const variant = hasCustomColors ? "custom" : "default";

  const customStyles = hasCustomColors
    ? {
        backgroundColor: bgColor,
        color: textColor,
      }
    : {};

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(googlePlayButtonVariants({ variant }), className)}
      style={customStyles}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon || <AppleIcon />}
      <div className="flex flex-col items-start">
        <span className="text-xs leading-tight">{text}</span>
        <span className="text-sm font-semibold leading-tight">{subText}</span>
      </div>
    </a>
  );
};

export default AppDownloadBtn;
