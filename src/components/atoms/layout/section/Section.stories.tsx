import { Meta, StoryObj } from "@storybook/react";
import Box from "../box/Box";
import Section from "./Section";

const meta: Meta<typeof Section> = {
  title: "Atoms/Layout/Section",
  component: Section,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Primary: Story = {};

export const WithPadding: Story = {
  render: () => (
    <Box>
      <Section variant="withPadding" className="">
        With Padding
      </Section>
    </Box>
  ),
};

export const WithMargin: Story = {
  render: () => (
    <Box className="w-full">
      <Section variant="withMargin" className="bg-red-500 w-full">
        With Margin
      </Section>
    </Box>
  ),
};
