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


  // Remove Oldest Element
  // Add Newest Element
  if (selectedFlavors.length >= 3 && !selectedFlavors.includes(flavorId)) {
    const removeId = selectedFlavors.pop()
    DeselectFlavor(removeId)
  }

  // If already selected remove from array
  if (selectedFlavors.includes(flavorId)) {
    console.log("Already Selected")
    DeselectFlavor(flavorId);
    console.log(selectedFlavors, flavorId)
    return
  }

  // Add Element to queue
  selectedFlavors.unshift(flavorId);
  console.log(selectedFlavors, flavorId)
}
function DeselectFlavor(flavorId) {
  // Filter Out Removed Index
  RemoveHighLight(flavorId);
  selectedFlavors = selectedFlavors.filter(x => x != flavorId);
}

// Highlight all selected flavors in array
function HighLightSelectedFlavors() {
  console.log("Selecting");
  for (const flavorId of selectedFlavors) {
    // Grab Element
    // Highlight
    const flavorRef = document.getElementById(`${flavorId}`);

    flavorRef.classList.add("selected");
  }
}

// Remove Selected Class From Flavor
function RemoveHighLight(flavorId) {
  const flavorRef = document.getElementById(flavorId);

  flavorRef.classList.toggle("selected");
}
