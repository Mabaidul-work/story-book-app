import { SearchIcon } from "@/constants/svgs";
import theme from "@/constants/theme.json";
import type { Meta, StoryObj } from "@storybook/react";
import SearchInput from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Atoms/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    placeholder: "Search for restaurant and food",
  },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    icon: (
      <SearchIcon
        width="50"
        height="50"
        className="lg:w-6 lg:h-6"
        pathFillColor={theme.colors.black}
      />
    ),
  },
};

export const Primary: Story = {
  args: {
    icon: (
      <SearchIcon
        width="50"
        height="50"
        className="lg:w-6 lg:h-6"
        pathFillColor={theme.colors.black}
      />
    ),
    variant: "primary",
    placeholder: "Primary variant",
  },
};

export const Error: Story = {
  args: {
    icon: (
      <SearchIcon
        width="50"
        height="50"
        className="lg:w-6 lg:h-6"
        pathFillColor={theme.colors.black}
      />
    ),
    variant: "error",
    placeholder: "Error state",
  },
};

export const NoIcon: Story = {
  args: {
    placeholder: "Search without icon",
  },
};

export const Disabled: Story = {
  args: {
    icon: (
      <SearchIcon
        width="50"
        height="50"
        className="lg:w-6 lg:h-6"
        pathFillColor={theme.colors.black}
      />
    ),
    disabled: true,
    placeholder: "Disabled input",
  },
};

export const CustomIcon: Story = {
  args: {
    icon: (
      <SearchIcon
        width="50"
        height="50"
        className="lg:w-6 lg:h-6"
        pathFillColor={theme.colors.black}
      />
    ),
    placeholder: "Search with custom icon",
  },
};

export const WithValue: Story = {
  args: {
    icon: (
      <SearchIcon
        width="50"
        height="50"
        className="lg:w-6 lg:h-6"
        pathFillColor={theme.colors.black}
      />
    ),
    value: "Pizza restaurants",
    placeholder: "Search restaurants",
  },
};

export const Interactive: Story = {
  args: {
    icon: (
      <SearchIcon
        width="50"
        height="50"
        className="lg:w-6 lg:h-6"
        pathFillColor={theme.colors.black}
      />
    ),
    placeholder: "Type to search...",
  },
  argTypes: {
    onChange: { action: "changed" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
  },
};

export const LongPlaceholder: Story = {
  args: {
    icon: (
      <SearchIcon
        width="50"
        height="50"
        className="lg:w-6 lg:h-6"
        pathFillColor={theme.colors.black}
      />
    ),
    placeholder:
      "Search for restaurants, cuisines, dishes, or your favorite food items",
  },
};

// export const Controlled: Story = {
//   render: () => {
//     const [value, setValue] = React.useState("");
//     return (
//       <SearchInput
//         icon={
//           <SearchIcon
//             width="50"
//             height="50"
//             className="lg:w-6 lg:h-6"
//             pathFillColor={theme.colors.black}
//           />
//         }
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="Controlled input"
//       />
//     );
//   },
// };
