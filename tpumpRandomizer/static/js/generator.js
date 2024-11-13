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



for (const sugar of sugarOptions) {
  const ref = document.getElementById(sugar);

  ref.addEventListener('click', () => {
    document.getElementById(sugarInput).classList.remove("selected")
    if(sugar === sugarInput) {
      sugarInput = ""
      return
    }
    sugarInput = sugar
    
    console.log("set sugar to ", sugar)
    ref.classList.add("selected");

  })
};

for (const ice of iceOptions) {
  const ref = document.getElementById(ice);

  ref.addEventListener('click', () => {
    document.getElementById(iceInput).classList.remove("selected")

    if(ice === iceInput) {
      iceInput = ""
      return
    }

    iceInput = ice
    console.log("set ice to ", ice)
    ref.classList.add("selected");
  })
};

for (const milk of milkOptions) {
  const ref = document.getElementById(milk);

  ref.addEventListener('click', () => {
    document.getElementById(milkInput).classList.remove("selected")

    if(milk === milkInput) {
      milkInput = ""
      return
    }

    milkInput = milk
    console.log("set milk to ", milk)
    ref.classList.add("selected");
  })
};

for (const tea of teaOptions) {
  const ref = document.getElementById(tea);

  ref.addEventListener('click', () => {
    document.getElementById(teaInput).classList.remove("selected")

    if(tea === teaInput) {
      teaInput = ""
      return
    }

    teaInput = tea
    console.log("set tea to ", tea)
    ref.classList.add("selected");
  })
};

for (const blend of blendOptions) {
  const ref = document.getElementById(blend);

  ref.addEventListener('click', () => {
    document.getElementById(blendInput).classList.remove("selected")

    if(blend === blendInput) {
      blendInput = ""
      return
    }

    blendInput = blend
    console.log("set blend to ", blend)
    ref.classList.add("selected");
  })
};



function GenerateRandomDrink() {
  
}