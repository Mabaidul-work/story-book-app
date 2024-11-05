import { Meta, StoryObj } from "@storybook/react";  
import LogoContainer from "./LogoContainer";

const meta: Meta<typeof LogoContainer> = {
  title: "Molecules/LogoContainer",
  component: LogoContainer,
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: {
        type: "text",
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

