import { Grid, GridItem } from "@chakra-ui/react";

export const Nutrients = ({ recipeObject }) => {
  const {
    recipe: {
      totalNutrients: {
        ENERC_KCAL: {
          label: energyLabel,
          quantity: energyQuantity,
          unit: energyUnit,
        },
      },
    },
  } = recipeObject;

  const {
    recipe: {
      totalNutrients: {
        PROCNT: {
          label: proteinLabel,
          quantity: proteinQuantity,
          unit: proteinUnit,
        },
      },
    },
  } = recipeObject;

  const {
    recipe: {
      totalNutrients: {
        FAT: { label: fatLabel, quantity: fatQuantity, unit: fatUnit },
      },
    },
  } = recipeObject;

  const {
    recipe: {
      totalNutrients: {
        CHOLE: {
          label: cholestrolLabel,
          quantity: cholestrolQuantity,
          unit: cholestrolUnit,
        },
      },
    },
  } = recipeObject;

  const {
    recipe: {
      totalNutrients: {
        CHOCDF: { label: carbsLabel, quantity: carbsQuantity, unit: carbsUnit },
      },
    },
  } = recipeObject;

  const {
    recipe: {
      totalNutrients: {
        NA: { label: sodiumLabel, quantity: sodiumQuantity, unit: sodiumUnit },
      },
    },
  } = recipeObject;

  const roundedEnergyQuantity = Math.round(energyQuantity);
  const roundedProteinQuantity = Math.round(proteinQuantity);
  const roundedFatQuantity = Math.round(fatQuantity);
  const roundedCholestrolQuantity = Math.round(cholestrolQuantity);
  const roundedCarbsQuantity = Math.round(carbsQuantity);
  const roundedSodiumQuantity = Math.round(sodiumQuantity);

  return (
    <Grid fontSize="0.8rem" templateColumns="repeat(2, auto)" gap=".8em">
      <GridItem colSpan="2" fontWeight="bold">
        Nutrients:
      </GridItem>
      <GridItem>{`${energyLabel}: ${roundedEnergyQuantity} ${energyUnit}`}</GridItem>
      <GridItem>{`${proteinLabel}: ${roundedProteinQuantity} ${proteinUnit}`}</GridItem>
      <GridItem>{`${fatLabel}: ${roundedFatQuantity} ${fatUnit}`}</GridItem>
      <GridItem>{`${cholestrolLabel}: ${roundedCholestrolQuantity} ${cholestrolUnit}`}</GridItem>
      <GridItem>{`${carbsLabel}: ${roundedCarbsQuantity} ${carbsUnit}`}</GridItem>
      <GridItem>{`${sodiumLabel}: ${roundedSodiumQuantity} ${sodiumUnit}`}</GridItem>
    </Grid>
  );
};
