const flavorFiltersContainerRef = document.getElementById("flavor-filters");

for(const filterName of filterList) {
  
  let filterContainerRef = document.createElement("div");

  filterContainerRef.classList.add("flavor-filter-button", "selectable");
  filterContainerRef.id = filterName.toLowerCase(); // Make Sure lower case

  let filterNameRef = document.createElement("p");
  filterNameRef.textContent = filterName

  filterContainerRef.appendChild(filterNameRef);
  flavorFiltersContainerRef.appendChild(filterContainerRef);

  // HighLight filter
  // Auto Select All Flavors
  filterContainerRef.addEventListener('click', () => {
    CreateClearFilterButton();
    console.log("Clicked Filter", filterName);
    //const ref = document.getElementById(filterName.toLowerCase());
    
    // // Filter Deselecting
    // if (ref.classList.contains(selected)) {
    //   filterContainerRef.classList.remove("selected");
    //   return
    // }


    filterContainerRef.classList.add("selected");

    if(filterName.toLowerCase() === "all")
      HighlightAllFlavors();
    else
      HighlightFilterFlavors(filterName)
  })
}  

// Highlight all flavor boxes that match filter
// Adjust Selected List accrdingly
function HighlightFilterFlavors(filterName) {
  const objArray = Object.values(flavors);
  filterName = filterName.toLowerCase();


  const filteredList = objArray.filter(flavor => flavor.themes.includes(filterName));

  for(const item of filteredList) {
    const ref = document.getElementById(item.id);
    selectedFlavors.push(item.id);
    ref.classList.add("selected");
  }
}

function HighlightAllFlavors() {
  selectedFlavors.length = 0;

  const flavorButtonRefs = document.getElementsByClassName("flavor-button");
  for(const flavor of flavorButtonRefs) {
    flavor.classList.add("selected");
    selectedFlavors.push(flavor.id)
  }
  console.log(selectedFlavors);
}

function ClearAllFilterHighlights() {
  console.log("CLEARING ALL Selections")
  for(const filterName of filterList) {
    const ref = document.getElementById(filterName.toLowerCase())

    ref.classList.remove("selected");
  }
  ClearFlavorHighlights()
  RemoveClearFilterButton();
}

// CLEAR all highlights for all selected flavors
// Clear Selected Flavor List
function ClearFlavorHighlights() {
  const flavorButtonRefs = document.getElementsByClassName("flavor-button");
  for(const flavor of flavorButtonRefs) {
    flavor.classList.remove("selected");    
  }

  // Empty Selected Flavor Array
  selectedFlavors.length = 0;
}

function CreateClearFilterButton() {
  console.log(document.getElementById("clear-filter-button"))
  if(document.getElementById("clear-filter-button") !== null)
    return; 

  const clearDivRef = document.createElement("div")
  clearDivRef.classList.add("clear-filter-button", "selectable");
  clearDivRef.id = "clear-filter-button";
  clearDivRef.onclick = ClearAllFilterHighlights;
  
  const clearPRef = document.createElement("p");
  clearPRef.innerText = "Clear";

  clearDivRef.appendChild(clearPRef);
  flavorFiltersContainerRef.appendChild(clearDivRef);

}

function RemoveClearFilterButton() {
  document.getElementById("clear-filter-button").remove()
}