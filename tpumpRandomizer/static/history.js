
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
      // Ignore Space From Array Split
      if (flavor.length <= 1) 
        continue;
      
      const flavorName = flavor.trim().replaceAll("_", " ");
      const flavorColor = Object.values(flavors).filter(x => {
        console.log(x.name, flavorName)
        return x.name === flavorName
      })[0]["color"];

      console.log(flavorName, flavorColor);
      flavorHTMLString +=`<p class="title2 strong" style="color: ${flavorColor}">${flavorName}</p>`
    }


    const htmlToAdd = `
      <div class="flavor-box">
        ${flavorHTMLString}
      </div>
      <div>
        <p><span class="strong">Sugar:</span> ${drink.fields.sugarSetting}</p>
        <p><span class="strong">Ice:</span> ${drink.fields.iceSetting}</p>
        <p><span class="strong">Has Milk:</span> ${milkSetting}</p>
        <p><span class="strong">Is Blended:</span> ${blendSetting}</p>
        <p><span class="strong">Tea:</span> ${drink.fields.teaSetting}</p>
      </div>
    `

    drinkContainerRef.innerHTML += htmlToAdd;

  }
}

DisplayRecentDrinks();