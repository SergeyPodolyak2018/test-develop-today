import { Link } from "react-router-dom";
import { TRecipe } from "../definitions/main";

export default function SingleRecipe(props: { data: TRecipe }) {
  return (
    <div
      style={{ marginBottom: "20px" }}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img className="rounded-t-lg" src={props.data.strMealThumb} alt="" />
      </a>
      <div className="p-5">
        <Link to={`/recipes/${props.data.idMeal}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.data.strMeal}
          </h5>
        </Link>
      </div>
    </div>
  );
}
