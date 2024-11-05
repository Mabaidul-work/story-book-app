import { Meta, StoryObj } from "@storybook/react";
import Page from "./page";

const meta: Meta<typeof Page> = {
  title: "Pages/Home",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {},
};
