import { Tag as CTag, Flex } from "@chakra-ui/react";

export const Tag = ({ array, color, ...props }) => {
  return (
    <Flex flexWrap="wrap" gap="0.5rem" {...props}>
      {array.map((string) => {
        return (
          <CTag key={string} colorScheme={color}>
            {string}
          </CTag>
        );
      })}
    </Flex>
  );
};
