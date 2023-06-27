import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { data } from "./utils/data";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <>
      {selectedRecipe ? (
        <Flex
          backgroundColor="blue.300"
          justifyContent="center"
          alignItems="center"
        >
          <RecipePage recipeObject={selectedRecipe} />
        </Flex>
      ) : (
        <RecipeListPage />
      )}
    </>
  );
};
