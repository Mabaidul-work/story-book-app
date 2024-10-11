import React from "react";
import "./button.css";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  textColor?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  textColor,
  width,
  height,
  borderRadius,
  className,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={`${[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
      ].join(" ")} ${className}`}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
          color: ${textColor};
          width: ${width};
          height: ${height};
          border-radius: ${borderRadius};
        }
      `}</style>
    </button>
  );
};
