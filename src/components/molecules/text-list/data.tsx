import { Typography } from "@/components/atoms";
import text from "@/constants/text.json";

export const textLists = [
  {
    id: 1,
    textComponent: (
      <Typography as="h1" variant={"h1"}>
        {text.homePage.heroSection.title}
      </Typography>
    ),
  },
  {
    id: 2,
    textComponent: (
      <Typography as="h1">{text.homePage.heroSection.offerText}</Typography>
    ),
  },
  {
    id: 3,
    textComponent: (
      <Typography as="h1">{text.homePage.heroSection.subtitle}</Typography>
    ),
  },
  {
    id: 4,
    textComponent: (
      <Typography as="h1">{text.homePage.heroSection.subtitle}</Typography>
    ),
  },
  {
    id: 5,
    textComponent: (
      <Typography as="h1">{text.homePage.heroSection.subtitle}</Typography>
    ),
  },
];
