import { url } from "./script.js";

const cocktailInput = document.querySelector('.cocktailinput');


// cocktailInput.innerHTML = "";

async function getCocktailData() { 
 
try { 
const response = await fetch (url);
const json = await response.json ();
const drinks = json.drinks;

for (let i=0; i < drinks.length; i++) {
    const cocktail = drinks[i].strDrink;

    const instructions = [drinks[i].strInstructions];

cocktailInput.innerHTML += `<a href ="details.html?id=${drinks[i].idDrink}" class="cocktailinput">
<div>${drinks[i].strDrink}</div>
<img src="${drinks[i].strDrinkThumb}" alt= "image of margarita cocktail"</div>`;

console.log("success")

}
} catch (error) {
    console.log("error", error);
    cocktailInput.innerHTML = error;
}
finally {
    console.log ("finally");
}
}
getCocktailData();


