"use client";
import { PHONE_GROUP } from "@/constants/images";
import Image from "next/image";
import { useState } from "react";
import { Box, Button, Typography } from "../atoms";
import { Input } from "../atoms/input";
import AppStoreButtons from "./AppStoreButtons";

const GetAppDownload = () => {
  const [contactMethod, setContactMethod] = useState("phone");
  const [email, setEmail] = useState("");

  return (
    <Box className="w-full bg-primary-100">
      <div className=" max-w-screen-2xl mx-auto py-6 md:py-8 lg:pt-12 lg:pb-0 px-4 md:px-20 lg:px-24 xl:px-32">
        <div className="flex">
          <div className="flex-1 hidden lg:block lg:w-1/2">
            <Image
              src={PHONE_GROUP}
              alt="App Preview"
              width={200}
              height={300}
              className="w-full h-full"
            />
          </div>
          <div className="flex-1 flex items-center lg:items-start justify-center flex-col w-full lg:w-1/2">
            <Typography
              as="h2"
              className="text-4xl font-bold mb-4 text-center lg:text-left"
            >
              Get the GetFudo App Now!
            </Typography>
            <Typography className="text-gray-600 mb-6 text-center lg:text-left">
              We will send you a link, open it on your phone to download the app
            </Typography>

            <div className="flex gap-4 mb-4">
              <label className="flex items-center">
                <Input
                  type="radio"
                  value="email"
                  checked={contactMethod === "email"}
                  onChange={(e) => setContactMethod(e.target.value)}
                  className="mr-2 focus:ring-0 focus:border-none focus:outline-0"
                />
                Email
              </label>
              <label className="flex items-center">
                <Input
                  type="radio"
                  value="phone"
                  checked={contactMethod === "phone"}
                  onChange={(e) => setContactMethod(e.target.value)}
                  className="mr-2 focus:ring-0 focus:border-none focus:outline-0"
                />
                Phone
              </label>
            </div>

            <div className="flex gap-2 mb-6 relative w-full">
              <Input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 p-3 border rounded w-full"
              />
              <Button className="bg-black text-white px-2 md:px-3 lg:px-6 py-3 rounded absolute inset-y-0 right-0 text-sm md:text-base">
                Share App Link
              </Button>
            </div>

            <AppStoreButtons containerClassName="items-center lg:items-start" />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default GetAppDownload;
