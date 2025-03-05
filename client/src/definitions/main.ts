export type TRecipeProps = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  [key: `strIngredient${number}`]: string;
};

export type TRecipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};
