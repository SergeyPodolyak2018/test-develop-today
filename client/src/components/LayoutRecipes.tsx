import { useEffect, useState } from "react";
import useQuery from "../hooks/useQuery";
import { TRecipe } from "../definitions/main";
import restApi from "../api/rest";
import SingleRecipe from "./SingleRecipe";

export default function LayoutRecipes() {
  // eslint-disable-next-line
  const query = useQuery();
  const [data, setData] = useState<TRecipe[] | null>(null);
  useEffect(() => {
    const country = query.get("country");
    const ingredient = query.get("ingredient");
    const category = query.get("category");
    let param = "";
    if (country) {
      param = `country=${country}`;
    }
    if (ingredient) {
      param = `ingredient=${ingredient}`;
    }
    if (category) {
      param = `category=${category}`;
    }

    restApi.getRecipeByParams(param).then((data) => {
      setData(data.recipes.meals);
    });
  }, []);
  return (
    <div>
      {data
        ? data.map((el) => <SingleRecipe data={el} key={el.idMeal} />)
        : "Loading"}
    </div>
  );
}
