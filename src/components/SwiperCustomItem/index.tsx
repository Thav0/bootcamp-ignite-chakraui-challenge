import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

interface SwiperCustomItemProps {
  bgImage: string;
  height?: number | string;
  title: string;
  subTitle: string;
}

export function SwiperCustomItem({
  bgImage,
  height = 400,
  title,
  subTitle,
}: SwiperCustomItemProps) {
  return (
    <Flex
      flex="1"
      bgImage={bgImage}
      h={height}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      justify="center"
      align="center"
      direction="column"
    >
      <Heading as="h3" color="white">
        {title}
      </Heading>
      <Heading as="h6" fontSize="md" color="gray.200">
        {subTitle}
      </Heading>
    </Flex>
  );
}
