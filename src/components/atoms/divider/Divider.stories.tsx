import { Meta, StoryObj } from "@storybook/react";
import Box from "../layout/box/Box";
import Divider from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    variant: "horizontal",
  },

  render: (args) => (
    <Box className="w-1/2 flex items-center justify-center pt-40 pl-20">
      <Divider variant={"horizontal"} className="w-full" {...args} />
    </Box>
  ),
};

export const VerticalDivider: Story = {
  render: (args) => (
    <Box className="w-1/2 flex items-center justify-center pt-40">
      <Divider variant={"vertical"} {...args} />
    </Box>
  ),
};
