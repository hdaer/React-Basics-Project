import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn }) => {
  return (
    <>
      <Input
        variant="filled"
        w="50vw"
        m="2em"
        placeholder="find your recipe here..."
        color="red.500"
        onChange={changeFn}
      ></Input>
    </>
  );
};
