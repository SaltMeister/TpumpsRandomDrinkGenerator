let selectedFlavors = []

const flavorOptionsContainerRef = document.getElementById("flavor-options");

// Create All Flavors onto page

// Loop Through Each Key in Flavor Dict
Object.keys(flavors).forEach( key => {
    let itemContainerRef = document.createElement("div");
    // Highlight Flavors that cost extra
    if(flavors[key].extraPrice > 0) 
      itemContainerRef.classList.add("extra-cost");
    
    itemContainerRef.classList.add("flavor-button", "selectable");
    itemContainerRef.id = key

    let itemNameRef = document.createElement("p");
    itemNameRef.textContent = flavors[key].name

    itemContainerRef.appendChild(itemNameRef);
    flavorOptionsContainerRef.appendChild(itemContainerRef)



    itemContainerRef.addEventListener('click', () => {
      SelectFlavor(key)
      HighLightSelectedFlavors();
    })

})


function SelectFlavor(flavorId) {
  // If already selected remove from array
  if (selectedFlavors.includes(flavorId)) {
    DeselectFlavor(flavorId);
    return
  }

  // Add Element to queue
  selectedFlavors.unshift(flavorId);
}
function DeselectFlavor(flavorId) {
  // Filter Out Removed Index
  RemoveHighLight(flavorId);
  selectedFlavors = selectedFlavors.filter(x => x != flavorId);
}

// Highlight all selected flavors in array
function HighLightSelectedFlavors() {
  if (document.getElementById("clear-filter-button") === null) {
    CreateClearFilterButton();
  }
    

  for (const flavorId of selectedFlavors) {
    // Grab Element
    // Highlight
    const flavorRef = document.getElementById(flavorId);

    if (flavorRef.classList.contains("extra-cost"))
        flavorRef.classList.add("extra-selected");
      else
        flavorRef.classList.add("selected");
  }
}

// Remove Selected Class From Flavor
function RemoveHighLight(flavorId) {
  if (selectedFlavors.length <= 0)
    RemoveClearFilterButton();

  const flavorRef = document.getElementById(flavorId);

  if (flavorRef.classList.contains("extra-cost"))
    flavorRef.classList.remove("extra-selected");
  else
    flavorRef.classList.remove("selected");
}
