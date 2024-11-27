
async function DisplayRecentDrinks() {
  const drinkArray = await GetAllDrinksFromDb();
  console.log("Drinks Array To Place", drinkArray);
  //TODO Loop and create html elements

  const containerRef = document.getElementById("history-container");
  for (const drink of drinkArray) {
    const drinkContainerRef = document.createElement("div");
    containerRef.appendChild(drinkContainerRef);

    drinkContainerRef.classList.add("drink-container");

    // Milk Setting And Blend Setting Missing From Airtable if False
    const milkSetting = "isAddMilk" in drink.fields ? "Yes" : "No";
    const blendSetting = "isBlended" in drink.fields ? "Yes" : "No";

    const htmlToAdd = `
      <div class="flavor-box">
        
      </div>
      <div>
        <p>Sugar: ${drink.fields.sugarSetting}</p>
        <p>Ice: ${drink.fields.iceSetting}</p>
        <p>Has Milk: ${milkSetting}</p>
        <p>Is Blended: ${blendSetting}</p>
        <p>Tea: ${drink.fields.teaSetting}</p>
      </div>


    `

    drinkContainerRef.innerHTML = htmlToAdd;

  }
}

DisplayRecentDrinks();