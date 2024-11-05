import type { Meta, StoryObj } from "@storybook/react";
import LocalityGrid from "./LocalityGrid";

const meta: Meta<typeof LocalityGrid> = {
  title: "Components/LocalityGrid",
  component: LocalityGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LocalityGrid>;

export const Default: Story = {};


export const Empty: Story = {
  args: {
    localities: [],
  },
};


export const CustomLocalities: Story = {
  args: {
    localities: [
      { name: "Manhattan", places: 12 },
      { name: "Brooklyn", places: 8 },
      { name: "Queens", places: 6 },
      { name: "Bronx", places: 4 },
      { name: "Staten Island", places: 3 },
    ],
  },
};

export const ManyLocalities: Story = {
  args: {
    localities: [
      { name: "Shoreditch", places: 15 },
      { name: "Camden", places: 12 },
      { name: "Brixton", places: 8 },
      { name: "Hackney", places: 10 },
      { name: "Islington", places: 9 },
      { name: "Greenwich", places: 7 },
      { name: "Notting Hill", places: 11 },
      { name: "Soho", places: 14 },
      { name: "Covent Garden", places: 13 },
      { name: "Mayfair", places: 8 },
      { name: "Battersea", places: 6 },
      { name: "Richmond", places: 5 },
    ],
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    hasError: true,
    errorMessage: "Failed to load localities",
  },
};
