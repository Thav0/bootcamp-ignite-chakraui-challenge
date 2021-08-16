import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface CityProps {
  imagePath: string;
  country: string;
  cityName: string;
  icon: any;
}

import styles from "./city.module.scss";

export function City({ imagePath, country, cityName, icon }: CityProps) {
  return (
    <Flex direction="column">
      <Image
        src={imagePath}
        alt={country}
        borderTopLeftRadius="4"
        borderTopRightRadius="4"
      />
      <Flex
        className={styles.cityContent}
        justify="space-between"
        align="center"
      >
        <VStack spacing="2" align="left">
          <Box>
            <Heading as="h6" fontSize="20">
              {country}
            </Heading>
          </Box>
          <Box>
            <Text as="span">{cityName}</Text>
          </Box>
        </VStack>
        {icon}
      </Flex>
    </Flex>
  );
}
