import recipes from "../models/Recipes";

const RecipeList = () => {
  console.log(recipes);
  const recipesNum = recipes.length;
  console.log();
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
        {/* <td>{el.quantity}</td> */}
      </tr>
    );
  });

  /* const recipeNameItems: JSX.Element[] = recipes.map((el: any) => (
    <tr style={{ width: "100%" }} key={el.name}>
      <td>{el.name}</td>
      <td>{el.quantity}</td>
    </tr>
  )); */

  // const importedRecipes = JSON.parse(exportRecipes);
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
