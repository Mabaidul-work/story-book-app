
import type { Meta, StoryObj } from "@storybook/react";
import Code from "./Code";

const meta: Meta<typeof Code> = {
  title: "Molecules/Code",
  component: Code,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {
    code: "45678902",
    variant: "default",
    size: "md",
  },
};

export const Primary: Story = {
  args: {
    code: "45678902",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    code: "45678902",
    variant: "secondary",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    code: "45678902",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    code: "45678902",
    size: "lg",
  },
};
