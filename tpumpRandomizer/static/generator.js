let sugarInput = "sugar-100";
let iceInput = "ice-100";

let milkInput = "milk-random"
let teaInput = "tea-random"
let blendInput = "no-blend"

const sugarOptions = ["sugar-100", "sugar-75", "sugar-50", "sugar-25", "sugar-0", "sugar-random"]
const iceOptions = ["ice-100", "ice-75", "ice-50", "ice-25", "ice-0", "ice-random"]

const milkOptions = ["milk", "no-milk", "milk-random"]
const teaOptions = ["tea-black", "tea-green", "tea-random"]
const blendOptions = ["blend", "no-blend", "blend-random"]
// Set default highlights
// Set default highlights
document.getElementById("sugar-100").classList.add("selected")
document.getElementById("ice-100").classList.add("selected")
document.getElementById("milk-random").classList.add("selected")
document.getElementById("no-blend").classList.add("selected")
document.getElementById("tea-random").classList.add("selected")


document.getElementById("generate-button").addEventListener('click', () => {
  GenerateRandomDrink();
})


for (const sugar of sugarOptions) {
  const ref = document.getElementById(sugar);

  ref.addEventListener('click', () => {
    if(sugar === sugarInput) {
      return
    }

    document.getElementById(sugarInput).classList.remove("selected")
    sugarInput = sugar
    
    ref.classList.add("selected");

  })
};

for (const ice of iceOptions) {
  const ref = document.getElementById(ice);

  ref.addEventListener('click', () => {
    if(ice === iceInput) {
      return
    }

    document.getElementById(iceInput).classList.remove("selected")
    iceInput = ice

    ref.classList.add("selected");
  })
};

for (const milk of milkOptions) {
  const ref = document.getElementById(milk);

  ref.addEventListener('click', () => {
    if(milk === milkInput) {
      return
    }

    document.getElementById(milkInput).classList.remove("selected")
    milkInput = milk

    ref.classList.add("selected");
  })
};

for (const tea of teaOptions) {
  const ref = document.getElementById(tea);

  ref.addEventListener('click', () => {
    if(tea === teaInput) {
      return
    }

    document.getElementById(teaInput).classList.remove("selected")
    teaInput = tea

    ref.classList.add("selected");
  })
};

for (const blend of blendOptions) {
  const ref = document.getElementById(blend);

  ref.addEventListener('click', () => {
    if(blend === blendInput) {
      return
    }

    document.getElementById(blendInput).classList.remove("selected")
    blendInput = blend
    
    ref.classList.add("selected");
  })
};



function GenerateRandomDrink() {
  // Automatically Select All Flavors if none selected
  if (selectedFlavors.length <= 0) {
    const allFlavors = document.getElementsByClassName("flavor-button");

    for(const flavor of allFlavors)
      selectedFlavors.push(flavor.id);
  }

  const generatedData = {
    flavors: GetRandomFlavors(),
    sugarSetting: GetSugarSetting(),
    iceSetting: GetIceSetting(),
    teaSetting: GetTeaSetting(),
    milkSetting: GetMilKSetting(),
    blendSetting: GetBlendSetting(),
  }
  
  CreateModal(generatedData);
  AddDrinkToDb(generatedData);
}

// Handle input decisions
// Return Array
function GetRandomFlavors() {
  let pickedFlavors = []

  // Handle Less Than 3 flavors selected
  if(selectedFlavors.length <= 3) {
    for(const flavorId of selectedFlavors) 
      pickedFlavors.push(flavors[flavorId].name.replaceAll(" ", "_"));
    return pickedFlavors;
  }
  
  // Select Non Duplicate Flavors from Selected Flavor List
  let pickedIdHistory = new Set();
  while(pickedFlavors.length < 3) {
    // Generate Random Number
    const randIndex = Math.floor(Math.random() * (selectedFlavors.length - 1))
    const randSelect = selectedFlavors[randIndex];

    if(pickedIdHistory.has(randSelect))
      continue;

    pickedFlavors.push(flavors[randSelect].name.replaceAll(" ", "_"));
    pickedIdHistory.add(randSelect)
  }


  return pickedFlavors;
}

function GetSugarSetting() {
  if (sugarInput !== "sugar-random")
    return sugarInput.replace('-', ' ');

  // Generate Random Number
  const randSelect = Math.floor(Math.random() * (sugarOptions.length - 1))
  return sugarOptions[randSelect].replace('-', ' ');
}

function GetIceSetting() {
  if (iceInput !== "ice-random")
    return iceInput.replace('-', ' ');

  // Generate Random Number
  const randSelect = Math.floor(Math.random() * (iceOptions.length - 1))
  return iceOptions[randSelect].replace('-', ' ');
}

function GetMilKSetting() {
  if (milkInput !== "milk-random")
    return milkInput.replace('-', ' ');

  // Generate Random Number
  const randSelect = Math.floor(Math.random() * (milkOptions.length - 1))
  return milkOptions[randSelect].replace('-', ' ');
}

function GetTeaSetting() {
  if (teaInput === "tea-random") {
    const rand = Math.floor(Math.random() * 100);
    return rand % 2 === 1 ? "Green Tea" : "Black Tea";
  }
  
  const ref = document.getElementById(teaInput);
  return ref.innerText;
}

function GetBlendSetting() {
  if (blendInput !== "blend-random")
    return blendInput.replace('-', ' ');

  // Generate Random Number
  const randSelect = Math.floor(Math.random() * (blendOptions.length - 1))
  return blendOptions[randSelect].replace('-', ' ');
}

