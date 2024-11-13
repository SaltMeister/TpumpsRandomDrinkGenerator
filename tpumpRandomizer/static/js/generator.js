let sugarInput = "100";
let iceInput = "100";

let milkInput = "random"
let teaInput = "random"
let blended = "no blend"

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
  const setting = sugar.split('-')[1];

  ref.addEventListener('click', () => {
    
    ref.classList.remove("selected");
    sugarInput = setting
    console.log("set sugar to ", setting)
    ref.classList.add("selected");

  })
};

for (const ice of iceOptions) {
  const ref = document.getElementById(ice);
  const setting = ice.split('-')[1];

  ref.addEventListener('click', () => {
    ref.classList.remove("selected");
    iceInput = setting
    console.log("set ice to ", setting)
    ref.classList.add("selected");
  })
};

for (const milk of milkOptions) {
  const ref = document.getElementById(milk);

  ref.addEventListener('click', () => {
    milkInput = milk
    console.log("set milk to ", milk)
  })
};

for (const tea of teOptions) {
  const ref = document.getElementById(tea);

  ref.addEventListener('click', () => {
    teaInput = tea
    console.log("set tea to ", tea)
  })
};

for (const blend of blendOptions) {
  const ref = document.getElementById(blend);

  ref.addEventListener('click', () => {
    blendInput = blend
    console.log("set blend to ", blend)
  })
};



function HighlightOption(id) {
  const ref = document.getElementById(id);



}