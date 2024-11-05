import { Meta, StoryObj } from "@storybook/react";
import TextList from "./TextList";
import { textLists } from "./data";

const meta: Meta<typeof TextList> = {
  title: "Molecules/TextList",
  component: TextList,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: {
        type: "select",
        options: ["row", "column"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: "column",
    textLists: textLists,
  },
};
