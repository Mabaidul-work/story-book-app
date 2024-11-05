import { HERO_IMAGE } from "@/constants/images";
import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Components/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark", "colored"],
    },
    spacing: {
      control: "select",
      options: ["default", "loose", "tight"],
    },
    contentAlign: {
      control: "select",
      options: ["left", "center", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    title: "50% OFF",
    subtitle: "TODAY'S DAILY DEALS",
    description: "Our Delicious Chicken Nuggets!",
    primaryButtonText: "SHOP NOW",
    secondaryButtonText: "Learn More",
    imageSrc: HERO_IMAGE,
    imageAlt: "Chicken nuggets promotion",
    theme: "light",
    spacing: "default",
    contentAlign: "left",
  },
};

export const Dark: Story = {
  args: {
    ...Default.args,
    theme: "dark",
  },
};

export const Colored: Story = {
  args: {
    ...Default.args,
    theme: "primary",
  },
};

export const CenteredContent: Story = {
  args: {
    ...Default.args,
    contentAlign: "center",
  },
};

export const LooseSpacing: Story = {
  args: {
    ...Default.args,
    spacing: "loose",
  },
};
