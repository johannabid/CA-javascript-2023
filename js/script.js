
// to fetch an array of results
// to fetch a single result using an id, name, or other property

export const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

// const corsEnabledUrl = "https://noroffcors.onrender.com/" + url;
// // const response2 = await fetch(corsEnabledUrl);

async function getCocktailData () {

    const response = await fetch (url);

    const results = await response.json ();

    const cocktailData = results.array; 

     console.log(results.drinks);

    for (let i = 0; i < getCocktailData.length; i++) {
        // console.log (cocktailData[i].drinks);
        console.log (getCocktailData [i].drinks);

    }

}

getCocktailData(); 




