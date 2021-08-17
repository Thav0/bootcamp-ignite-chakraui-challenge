import {
  Badge,
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

interface CategoryIconProps {
  icon: string;
  title: string;
}

export function CategoryIcon({ icon, title }: CategoryIconProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex direction="row" align="center" justify="center">
      {isWideVersion ? (
        <Image src={icon} alt={title} maxW="100" />
      ) : (
        <Box
          as="span"
          w="2"
          h="2"
          display="inline-block"
          mr="2"
          borderRadius="50%"
          bgColor="orange.900"
        ></Box>
      )}

      <Text as="strong" fontSize="24" fontWeight="600">
        {title}
      </Text>
    </Flex>
  );
}
