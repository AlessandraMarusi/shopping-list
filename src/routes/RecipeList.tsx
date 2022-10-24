import recipes from "../models/Recipes";
import { Link } from "react-router-dom";

const RecipeList = () => {
  // const recipesNum = recipes.length;
  const recipeNameItems: JSX.Element[] = recipes.map((recipe: any) => {
    return (
      <tr style={{ width: "100%" }} key={recipe.name}>
        <td>{recipe.name}</td>
        {recipe.ingredients?.map((ing: any) => {
          return (
            <td>
              {ing.name} {ing.quantity}
            </td>
          );
        })}
        <td>
          <Link to={`/recipe-list/${recipe.name}`}>About</Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      Recipes
      <table>
        <tbody>{recipeNameItems}</tbody>
      </table>
    </div>
  );
};
export default RecipeList;
