import { Link } from "react-router-dom";

export default function Ingredient(props: { name: string }) {
  return (
    <Link to={`/recipes?ingredient=${props.name}`}>
      <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
        {props.name}
      </span>
    </Link>
  );
}
