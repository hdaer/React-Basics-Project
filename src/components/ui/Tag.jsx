import { Tag as CTag, Flex } from "@chakra-ui/react";

export const Tag = ({ array, color }) => {
  return (
    <Flex flexWrap="wrap" gap="0.5rem">
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
