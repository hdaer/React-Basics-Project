import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";
import { TextInput } from "../components/ui/TextInput";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const changeFn = (event) => {
    setSearchField(event.target.value);
  };

  const matchedRecipes = data.hits.filter((recipe) => {
    return (
      recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
      recipe.recipe.healthLabels.some((healthLabel) => {
        return healthLabel.toLowerCase().includes(searchField.toLowerCase());
      })
    );
  });

  return (
    <Flex flexDir="column" alignItems="center">
      <TextInput changeFn={changeFn}></TextInput>
      <Flex flexWrap="wrap" gap="2rem" justifyContent="center" m="1rem">
        {matchedRecipes.map((recipeObject) => {
          return (
            <RecipeCard
              key={recipeObject.recipe.label}
              recipeObject={recipeObject}
              clickFn={clickFn}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};
