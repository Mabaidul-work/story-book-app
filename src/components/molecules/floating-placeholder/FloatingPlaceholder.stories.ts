import { Meta, StoryObj } from "@storybook/react";
import FloatingPlaceholder from "./FloatingPlaceholder";

const meta: Meta<typeof FloatingPlaceholder> = {
    title: "Molecules/FloatingPlaceholder",
    component: FloatingPlaceholder,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: "",
    },
};

