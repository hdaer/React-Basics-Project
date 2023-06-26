import { Center, Heading, Card } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = () => {
  return (
    <Center h="100vh" flexDir="column">
      <Heading>The Recipe List Page</Heading>
      <Card>
        {data.hits.map((recipe) => {
          <RecipeCard recipe={recipe} key={recipe.label} />;
        })}
      </Card>
    </Center>
  );
};
