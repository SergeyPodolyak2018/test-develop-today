import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import restApi from "../api/rest";
import { TRecipeProps } from "../definitions/main";
import RecipeInfo from "./RecipeInfo";

export default function LayoutSingleRecipe() {
  const { id } = useParams();
  const [data, setData] = useState<TRecipeProps | null>(null);
  useEffect(() => {
    if (id) {
      restApi.getRecipe(id).then((data) => {
        setData(data.recipes.meals[0]);
      });
    }
  }, [id]);
  return <div>{data ? <RecipeInfo data={data} /> : "Loading..."}</div>;
}
