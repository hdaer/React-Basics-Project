import {
  Image,
  Grid,
  GridItem,
  useMediaQuery,
  Heading,
} from "@chakra-ui/react";
import { Nutrients } from "../components/Nutrients";
import { Tag } from "./ui/Tag";

export const RecipeCard = ({ selectedRecipe }) => {
  const [isMobile] = useMediaQuery("(max-width: 400px)");

  return (
    <Grid
      backgroundColor="white"
      templateColumns="repeat(2, 1fr)"
      gap="2rem"
      w="65vw"
      padding="4"
    >
      {/*recipe name*/}
      <GridItem
        justifySelf="center"
        alignSelf="center"
        fontSize="20px"
        fontWeight="bold"
      >
        <Heading size="md">{selectedRecipe.recipe.label}</Heading>
      </GridItem>
      {/*recipe image*/}
      <GridItem justifySelf="center" alignSelf="center">
        <Image src={selectedRecipe.recipe.image} h="50vh" objectFit="cover" />
      </GridItem>

      <GridItem>
        <Grid rowGap="1rem">
          {/*meal type*/}
          <GridItem>
            <Heading size="xsm">Meal type:</Heading>
            {selectedRecipe.recipe.mealType}
          </GridItem>
          {/*dish type*/}
          <GridItem>
            <Heading size="xsm">Dish:</Heading>
            {selectedRecipe.recipe.dishType}
          </GridItem>

          {!(selectedRecipe.recipe.totalTime === 0) && (
            <GridItem>
              <Heading size="xsm">Total Cooking time:</Heading>
              {selectedRecipe.recipe.totalTime}
            </GridItem>
          )}
          {/*Servings*/}
          <GridItem>
            <Heading size="xsm">Servings:</Heading>
            {selectedRecipe.recipe.yield}
          </GridItem>
          {/*ingredients*/}
          <GridItem>
            <Heading size="xsm">Ingredients:</Heading>
            {selectedRecipe.recipe.ingredientLines.map((string) => {
              return <p key="string">{string}</p>;
            })}
          </GridItem>
        </Grid>
      </GridItem>

      <GridItem>
        <Grid rowGap="1rem" justifyContent="left">
          {/*health labels*/}
          <GridItem w="100%">
            <Heading size="xsm">Health labels:</Heading>{" "}
            <Tag array={selectedRecipe.recipe.healthLabels} color="blue" />
          </GridItem>
          {/*diet labels*/}

          {!(selectedRecipe.recipe.dietLabels.length == 0) && (
            <GridItem>
              <Heading size="xsm">Diet:</Heading>
              <Tag array={selectedRecipe.recipe.dietLabels} color="purple" />
            </GridItem>
          )}

          {/*cautions*/}

          {!(selectedRecipe.recipe.cautions.length == 0) && (
            <GridItem>
              <Heading size="xsm">Cautions:</Heading>
              <Tag array={selectedRecipe.recipe.cautions} color="red" />
            </GridItem>
          )}

          <GridItem>
            <Nutrients selectedRecipe={selectedRecipe} />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};
