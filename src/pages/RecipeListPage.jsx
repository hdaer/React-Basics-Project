import { Center, Heading, Card } from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = () => {
  return (
    <Center h="100vh" flexDir="column">
      <Heading>The Recipe List Page</Heading>
      <Card>
        {data.hits.map((recipe) => {
          return <Heading>{recipe.label}</Heading>;
        })}
      </Card>
    </Center>
  );
};
