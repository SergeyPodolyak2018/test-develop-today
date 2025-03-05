import { Link } from "react-router-dom";
import { TRecipeProps } from "../definitions/main";
import Ingredient from "./Ingredients";

export default function RecipeInfo(props: { data: TRecipeProps }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-3">
      <a href="#">
        <img className="rounded-t-lg" src={props.data.strMealThumb} alt="" />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.data.strMeal}
        </h5>

        <Link to={`/recipes?country=${props.data.strArea}`}>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.data.strArea}
          </p>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.data.strInstructions}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Ingredients
        </p>
        <div className="mb-3 flex justify-start md:justify-between flex-wrap">
          {Object.keys(props.data).map((key, index) => {
            const regex = new RegExp("strIngredient.*");
            if (regex.test(key) && props.data[key as keyof TRecipeProps]) {
              return (
                <Ingredient
                  name={props.data[key as keyof TRecipeProps]}
                  key={index}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
