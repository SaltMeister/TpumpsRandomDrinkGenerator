
async function DisplayRecentDrinks() {
  const drinkArray = await GetAllDrinksFromDb();

  const containerRef = document.getElementById("history-container");
  for (const drink of drinkArray) {
    const drinkContainerRef = document.createElement("div");
    containerRef.appendChild(drinkContainerRef);

    drinkContainerRef.classList.add("drink-container");

    // Milk Setting And Blend Setting Missing From Airtable if False
    const milkSetting = "isAddMilk" in drink.fields ? "Yes" : "No";
    const blendSetting = "isBlended" in drink.fields ? "Yes" : "No";
    const flavorArray = drink.fields.flavors.split(' ');

    let flavorHTMLString = "";

    for (const flavor of flavorArray) {
      //console.log(flavor)
      // Ignore Space From Array Split
      if (flavor.length <= 1) 
        continue;


      flavorHTMLString +=`<p class="title2">${flavor}</p>`
    }


    const htmlToAdd = `
      <div class="flavor-box">
        ${flavorHTMLString}
      </div>
      <div>
        <p>Sugar: ${drink.fields.sugarSetting}</p>
        <p>Ice: ${drink.fields.iceSetting}</p>
        <p>Has Milk: ${milkSetting}</p>
        <p>Is Blended: ${blendSetting}</p>
        <p>Tea: ${drink.fields.teaSetting}</p>
      </div>
    `

    drinkContainerRef.innerHTML += htmlToAdd;

  }
}

DisplayRecentDrinks();