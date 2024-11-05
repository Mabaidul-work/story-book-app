import { ReactNode } from "react";

export type TypographyProps = {
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: ReactNode;
  className?: string;
  fontOverflow?: FontOverflowType;
};

export enum FontOverflowType {
  ELLIPSIS = 'ellipsis',
  CLIP = 'clip',
}