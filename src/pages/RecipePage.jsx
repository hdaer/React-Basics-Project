import {
  Image,
  Grid,
  GridItem,
  useMediaQuery,
  Heading,
} from "@chakra-ui/react";
import { Nutrients } from "../components/Nutrients";
import { Tag } from "../components/ui/Tag";

export const RecipePage = ({ recipeObject }) => {
  const [isMobile] = useMediaQuery("(max-width: 400px)");

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap="2rem"
      w="65vw"
      backgroundColor="white"
      borderRadius="20px"
      padding="4"
    >
      {/*recipe name*/}
      <GridItem
        justifySelf="center"
        alignSelf="center"
        fontSize="20px"
        fontWeight="bold"
      >
        <Heading size="md">{recipeObject.recipe.label}</Heading>
      </GridItem>

      {/*recipe image*/}
      <GridItem justifySelf="center" alignSelf="center">
        <Image src={recipeObject.recipe.image} h="50vh" objectFit="cover" />
      </GridItem>

      <GridItem>
        <Grid rowGap="1rem">
          {/*meal type*/}
          <GridItem>
            <Heading size="xsm">Meal type:</Heading>
            {recipeObject.recipe.mealType}
          </GridItem>

          {/*dish type*/}
          <GridItem>
            <Heading size="xsm">Dish:</Heading>
            {recipeObject.recipe.dishType}
          </GridItem>

          {/*cooking time*/}
          {!(recipeObject.recipe.totalTime === 0) && (
            <GridItem>
              <Heading size="xsm">Total Cooking time:</Heading>
              {recipeObject.recipe.totalTime}
            </GridItem>
          )}

          {/*Servings*/}
          <GridItem>
            <Heading size="xsm">Servings:</Heading>
            {recipeObject.recipe.yield}
          </GridItem>

          {/*ingredients*/}
          <GridItem>
            <Heading size="xsm">Ingredients:</Heading>
            {recipeObject.recipe.ingredientLines.map((string) => {
              return <p key="string">{string}</p>;
            })}
          </GridItem>
        </Grid>
      </GridItem>

      {/*health labels*/}
      <GridItem>
        <Grid rowGap="1rem" justifyContent="left">
          <GridItem w="100%">
            <Heading size="xsm">Health labels:</Heading>
            <Tag array={recipeObject.recipe.healthLabels} color="blue" />
          </GridItem>

          {/*diet labels*/}
          {!(recipeObject.recipe.dietLabels.length == 0) && (
            <GridItem>
              <Heading size="xsm">Diet:</Heading>
              <Tag array={recipeObject.recipe.dietLabels} color="purple" />
            </GridItem>
          )}

          {/*cautions*/}
          {!(recipeObject.recipe.cautions.length == 0) && (
            <GridItem>
              <Heading size="xsm">Cautions:</Heading>
              <Tag array={recipeObject.recipe.cautions} color="red" />
            </GridItem>
          )}

          {/*nutrients*/}
          <GridItem>
            <Nutrients recipeObject={recipeObject} />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};
