import { Meta, StoryObj } from "@storybook/react";
import HomePage from "./HomePage";

const meta: Meta<typeof HomePage> = {
  title: "Templates/HomePage",
  component: HomePage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof HomePage>;

export const Primary: Story = {};

