import { Meta, StoryObj } from "@storybook/react";
import Container from "./Container";

const meta: Meta<typeof Container> = {
  title: "Atoms/Layout/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "bg-gray-300 border border-red-500",
    children:
      "Hello container lorem 50 words add more words sfdl fewufgwfwfe  ewfgwefgwefwe cevc cew cyuvervew vwevufuewvf vefyfevw ce yewfvewfvuew yw vcwevcywebervyewrvrewyu",
  },
};
