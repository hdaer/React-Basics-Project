import { Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = () => {
  return (
    <Flex flexWrap="wrap" gap="2rem" justifyContent="center" m="1rem">
      {data.hits.map((recipeObject) => {
        return (
          <RecipeCard
            key={recipeObject.recipe.label}
            recipeObject={recipeObject}
          />
        );
      })}
    </Flex>
  );
};
