import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["default", "borderless"],
      },
      description: "Sets the input variant.",
      defaultValue: "default",
    },
    textColor: {
      control: {
        type: "select",
        options: ["default", "primary"],
      },
      description: "Sets the text color of the input.",
      defaultValue: "default",
    },
    bgColor: {
      control: {
        type: "select",
        options: ["default", "primary"],
      },
      description: "Sets the background color of the input.",
      defaultValue: "default",
    },
    placeholder: {
      control: "text",
      description: "Sets the placeholder text for the input.",
      defaultValue: "Input text here",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input field.",
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Default input",
    variant: "default",
    textColor: "default",
    bgColor: "default",
  },
};

export const Borderless: Story = {
  args: {
    placeholder: "Borderless input",
    variant: "borderless",
    textColor: "default",
    bgColor: "default",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    variant: "default",
    textColor: "default",
    bgColor: "default",
    disabled: true,
  },
};

export const PrimaryColor: Story = {
  args: {
    placeholder: "Primary color input",
    variant: "default",
    textColor: "primary",
    disabled: false,
    className: "border-primary-500 focus:ring-primary-300 text-primary-500",
  },
};
