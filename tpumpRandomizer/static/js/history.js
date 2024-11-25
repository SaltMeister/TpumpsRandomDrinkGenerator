
async function DisplayRecentDrinks() {
  const drinkArray = await GetAllDrinksFromDb();
  console.log("Drinks Array To Place", drinkArray);
  //TODO Loop and create html elements
}

DisplayRecentDrinks();