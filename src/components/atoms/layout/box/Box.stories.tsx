import { Meta, StoryObj } from "@storybook/react";
import Typography from "../../typography/Typography";
import Box from "./Box";

const meta: Meta<typeof Box> = {
  title: "Atoms/Layout/Box",
  component: Box,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Box {...args}>
      <Typography>Box atom demo</Typography>
    </Box>
  ),
};
