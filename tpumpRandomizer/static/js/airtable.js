function getCookie(name) {
  const value = `; ${document.cookie}`; // Get All Cookies
  const parts = value.split(`; ${name}=`); // Get Cookie From Name
  console.log(value, parts);
  
  const cookie = parts.pop();

  return cookie.split(`=`).pop();
}

async function AddDrinkToDb(drinkData) {
  const csrfToken = getCookie("csrfToken");
  console.log(drinkData)
  const url = "drink/create";
  const headers = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrfToken // Token for Django to prevent CSRF Attacks
    },
    body: JSON.stringify({body: drinkData}),
  }
  //JSON.stringify(drinkData)

  await fetch(url, headers)
  .then(response => response.json())
  .then(data => console.log(data))

}

async function GetAllDrinksFromDb() {
  const csrfToken = getCookie("csrfToken");
}