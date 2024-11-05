import type { Meta, StoryObj } from "@storybook/react";

import Location from "./Location";

const meta: Meta<typeof Location> = {
  title: "Molecules/Location",
  component: Location,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    
  },
};

export default meta;

type Story = StoryObj<typeof Location>;

export const Default: Story = {};
