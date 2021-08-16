import {
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Icon,
  Box,
  IconButton,
} from "@chakra-ui/react";
import React from "react";

import { FaInfoCircle } from "react-icons/fa";

interface InfoProps {
  number: number | string;
  title: string;
  extraInfo?: string;
}

export function Info({ number, title, extraInfo }: InfoProps) {
  return (
    <Flex direction="column" justify="center" align="center">
      <Text as="strong" color="orange.900" fontWeight="600" fontSize="34">
        {number}
      </Text>
      <Flex mt="0.5" justify="center" align="center">
        <Text as="strong" fontSize="16" fontWeight="600">
          {title}
        </Text>

        {!!extraInfo && (
          <Box ml="1">
            <Popover>
              <PopoverTrigger>
                <IconButton
                  aria-label="extra-info"
                  as={FaInfoCircle}
                  size="24"
                  cursor="pointer"
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  Are you sure you want to have that milkshake?
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        )}
      </Flex>
    </Flex>
  );
}
