import { faqData } from "@/constants/data";
import { Box, Typography } from "../atoms";
import Accordion from "./Accordion";

const AccordianSection = () => {
  return (
    <Box className="w-full">
      <div className="w-full max-w-screen-2xl mx-auto py-6 md:py-8 lg:py-12 px-4 md:px-20 lg:px-24 xl:px-32 flex flex-col gap-10">
        <Typography as="h2" variant={"h2"}>
          Explore options near me
        </Typography>
        <Accordion
          data={faqData}
          accordionItemClassName="border-b-0 rounded-lg bg-white border border-custom-gray-300"
          className="w-full"
          headerClassName="..."
          contentClassName="..."
        />
      </div>
    </Box>
  );
};

export default AccordianSection;
