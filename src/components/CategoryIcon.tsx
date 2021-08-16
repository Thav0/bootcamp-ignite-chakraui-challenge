import { Flex, Image, Text } from "@chakra-ui/react";

interface CategoryIconProps {
  icon: string;
  title: string;
}

export function CategoryIcon({ icon, title }: CategoryIconProps) {
  return (
    <Flex direction="column" align="center">
      <Image src={icon} alt={title} maxW="100" />
      <Text as="strong" fontSize="24" fontWeight="600" mt="2">
        {title}
      </Text>
    </Flex>
  );
}
