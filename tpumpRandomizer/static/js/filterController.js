let selectedFilter = 'All';

const flavorFiltersContainerRef = document.getElementById("flavor-filters");

for(const filterName of filterList) {
  
  let filterContainerRef = document.createElement("div");

  filterContainerRef.classList.add("flavor-filter-button", "selectable");
  filterContainerRef.id = filterName.toLowerCase(); // Make Sure lower case

  let filterNameRef = document.createElement("p");
  filterNameRef.textContent = filterName

  filterContainerRef.appendChild(filterNameRef);
  flavorFiltersContainerRef.appendChild(filterContainerRef);


  filterContainerRef.addEventListener('click', () => {
    console.log("Clicked Filter", filterName);
    
  })
}  

// Set 'All' Filter Active
document.getElementById("all").classList.add("selected");


// Perform Highlighting 