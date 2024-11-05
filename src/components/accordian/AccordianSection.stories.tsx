import type { Meta, StoryObj } from "@storybook/react";
import AccordianSection from "./AccordianSection";

const meta = {
  title: "Components/AccordianSection",
  component: AccordianSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AccordianSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomTitle: Story = {
  args: {
    title: "Custom Exploration Options",
  },
};

export const Expanded: Story = {
  args: {
    defaultExpanded: true,
  },
};
