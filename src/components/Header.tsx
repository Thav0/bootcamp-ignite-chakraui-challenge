import { Flex, Icon, Link as ChakraLink } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

import { FaChevronLeft } from "react-icons/fa";

import Link from "next/link";
import { useRouter } from "next/dist/client/router";

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex
      w="100%"
      as="header"
      maxW={1440}
      h="20"
      mx="auto"
      align="center"
      px="6"
    >
      {asPath !== "/" && (
        <Link href="/" passHref>
          <ChakraLink>
            <Icon as={FaChevronLeft} fontSize="20" />
          </ChakraLink>
        </Link>
      )}

      <Flex flex="1" justify="center">
        <Link href="/" passHref>
          <ChakraLink>
            <Image
              src="/images/icons/world-trip-logo.svg"
              alt="world trip logo"
              width={184}
              height={46}
            />
          </ChakraLink>
        </Link>
      </Flex>
    </Flex>
  );
}
