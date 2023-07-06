import { Card, Flex, Image, CardBody, Stack, Heading } from "@chakra-ui/react";
import { Tag } from "./ui/Tag";

export const RecipeCard = ({ recipeObject, clickFn }) => {
  const vegLabels = recipeObject.recipe.healthLabels.filter((healthLabel) => {
    return (
      healthLabel.toLowerCase().includes("vegan") ||
      healthLabel.toLowerCase().includes("vegetarian")
    );
  });

  return (
    <Card
      w="20rem"
      h="30rem"
      borderRadius="20px"
      backgroundColor="gray.100"
      onClick={() => clickFn(recipeObject)}
      cursor="pointer"
      _hover={{ transform: "scale(1.01)" }}
    >
      <CardBody>
        <Image
          w="100%"
          h="12rem"
          src={recipeObject.recipe.image}
          objectFit="cover"
          borderRadius="20px"
        />
        <Stack
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          mt="6"
        >
          <Heading size="sm" color="gray.400">
            {recipeObject.recipe.mealType}
          </Heading>
          <Heading textAlign="center" size="md">
            {recipeObject.recipe.label}
          </Heading>

          {/*Vegan/Vegetarian health labels*/}
          {!(recipeObject.recipe.healthLabels.length == 0) && (
            <Flex>
              <Tag array={vegLabels} color="blue" />
            </Flex>
          )}

          {/*diet labels*/}
          <Flex gap={2}>
            <Tag
              display="flex"
              justifyContent="center"
              array={recipeObject.recipe.dietLabels}
              color="purple"
            />
          </Flex>

          {/*dish type*/}
          <Flex columnGap=".5em">
            <Heading size="sm" color="gray.400">
              Dish:
            </Heading>
            <Heading size="sm" color="blue.500">
              {recipeObject.recipe.dishType}
            </Heading>
          </Flex>

          {/*cautions*/}
          {!(recipeObject.recipe.cautions.length == 0) && (
            <>
              <Heading size="xsm">Cautions:</Heading>
              <Tag
                array={recipeObject.recipe.cautions}
                color="red"
                display="flex"
                justifyContent="center"
              />
            </>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
