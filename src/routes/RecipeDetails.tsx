import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import recipes from "../models/Recipes";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((el) => el.name === id);

  return (
    <div>
      {/* <div className="recipeContainer"></div> */}
      <h2>{recipe?.name || `404 Recipe ${id} not found`}</h2>
    </div>
  );
};

export default RecipeDetails;
