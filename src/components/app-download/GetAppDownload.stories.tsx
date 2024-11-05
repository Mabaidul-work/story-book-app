import type { Meta, StoryObj } from "@storybook/react";
import GetAppDownload from "./GetAppDownload";

const meta: Meta<typeof GetAppDownload> = {
  title: "Components/GetAppDownload",
  component: GetAppDownload,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GetAppDownload>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};
