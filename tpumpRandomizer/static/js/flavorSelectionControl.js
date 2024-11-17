console.log(flavors)

let selectedFlavors = []

const flavorOptionsContainerRef = document.getElementById("flavor-options");

// Create All Flavors onto page

Object.keys(flavors).forEach( key => {
    let itemContainerRef = document.createElement("div");

    itemContainerRef.classList.add("flavor-button", "selectable");
    itemContainerRef.id = key

    let itemNameRef = document.createElement("p");
    itemNameRef.textContent = flavors[key].name

    itemContainerRef.appendChild(itemNameRef);
    flavorOptionsContainerRef.appendChild(itemContainerRef)

    itemContainerRef.addEventListener('click', () => {
      console.log("Clicked", key);
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
  console.log(document.getElementById("clear-filter-button"))
  if (document.getElementById("clear-filter-button") === null) {
    CreateClearFilterButton();
    console.log("Creating Filter Button")
  }
    

  for (const flavorId of selectedFlavors) {
    // Grab Element
    // Highlight
    const flavorRef = document.getElementById(`${flavorId}`);

    flavorRef.classList.add("selected");
  }
}

// Remove Selected Class From Flavor
function RemoveHighLight(flavorId) {
  if (selectedFlavors.length <= 0)
    RemoveClearFilterButton();

  const flavorRef = document.getElementById(flavorId);

  flavorRef.classList.remove("selected");
}
