import type { Meta, StoryObj } from "@storybook/react";
import Box from "../box/Box";
import Stack from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "Atoms/Layout/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "column"],
    },
    alignItems: {
      control: "select",
      options: ["start", "center", "end"],
    },
    justifyContent: {
      control: "select",
      options: ["start", "center", "end", "between"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Stack {...args}>
      <Box className="bg-red-500 mb-2 p-2 text-white">Box 1</Box>
      <Box className="bg-green-500 mb-2 p-2 text-white">Box 2</Box>
      <Box className="bg-yellow-500 p-2 text-white">Box 3</Box>
    </Stack>
  ),
};

export const RowStack: Story = {
  render: (args) => (
    <Stack {...args} direction={"row"}>
      <Box className="bg-red-500 mr-2 p-2 text-white">Box 1</Box>
      <Box className="bg-green-500 mr-2 p-2 text-white">Box 2</Box>
      <Box className="bg-yellow-500 p-2 text-white">Box 3</Box>
    </Stack>
  ),
};
