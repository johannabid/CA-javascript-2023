import { url } from "./script.js";

// const urlSpecific = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007";

const cocktailSpecific  = document.querySelector('.cocktailspecific');

async function fetchCocktailSpecificData () {

   try { 
     const response = await fetch (url);
    const details = await response.json();
    const drinks = details.drinks;

    for (let i=0; i < drinks.length; i++) {
      const cocktail = drinks[i].strDrink;
  
      const instructions = [drinks[i].strInstructions];
  
cocktailSpecific.innerHTML += `<h2>${drinks[i].strDrink}</h2>
<h3>${drinks[0].strInstructions}</h3>
<p>Ingredients: ${drinks[i].strIngredient1}, ${drinks[i].strIngredient2}, ${drinks[i].strIngredient3}, ${drinks[i].strIngredient4}, ${drinks[i].strIngredient5}, ${drinks[i].strIngredient6}, ${drinks[i].strIngredient7}</p>
`;

}
} catch (error) {
   console.log("error", error);
   cocktailInput.innerHTML = error;
}
finally {
   console.log ("finally");
}
}
fetchCocktailSpecificData();

// make a function that prevents parameters with the value of null to show:
// or a function with filtered inngredients with forEach?




