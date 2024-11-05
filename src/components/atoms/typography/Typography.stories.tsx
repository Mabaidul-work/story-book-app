import { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
  args: {
    as: "p",
    variant: "default",
    children: "Hello world",
  },
};

export const Heading1: Story = {
  args: {
    as: "h1",
    variant: "h1",
    children: <Typography as="span">Child component</Typography>,
  },
};

export const Heading2: Story = {
  args: {
    as: "h2",
    variant: "h2",
    children: "Hello world",
  },
};

export const Heading3: Story = {
  args: {
    as: "h3",
    variant: "h3",
    children: "Hello world",
  },
};

export const Heading4: Story = {
  args: {
    as: "h4",
    variant: "h4",
    children: "Hello world",
  },
};

export const Heading5: Story = {
  args: {
    as: "h5",
    variant: "h5",
    children: "Hello world",
  },
};

export const Heading6: Story = {
  args: {
    as: "h6",
    variant: "h6",
    children: "Hello world",
  },
};

export const OverflowEllipse: Story = {
  args: {
    children: "Text for font over flow ellipse",
    fontOverflow: "ellipsis",
    className: "border border-red-500 rounded px-2 py-1",
  },
};

export const OverflowClip: Story = {
  args: {
    children: "Text for font over flow ellipse",
    fontOverflow: "clip",
    className: "border border-red-500 rounded px-2 py-1",
  },
};

export const TextsInsideHeading1: Story = {
  args: {
    as: "h1",
    variant: "h1",
  },
  render: (args) => (
    <Typography {...args} className="flex flex-col gap-10">
      <Typography as="span">Child component1</Typography>
      <Typography as="span" className="text-[100px]">Child component2</Typography>
      <Typography as="span">Child component3</Typography>
    </Typography>
  ),
};
