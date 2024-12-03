function getCookie(name) {
  const value = `; ${document.cookie}`; // Get All Cookies
  const parts = value.split(`; ${name}=`); // Get Cookie From Name
  
  const cookie = parts.pop();

  return cookie.split(`=`).pop();
}

async function AddDrinkToDb(drinkData) {
  const csrfToken = getCookie("csrfToken");
  console.log(drinkData)
  const url = "drink";
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
  console.log(csrfToken)
  const url = "drink";
  const headers = {
    method: "GET",
    headers: {
      "X-CSRFToken": csrfToken // Token for Django to prevent CSRF Attacks
    },
  }

  return await fetch(url, headers)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    return data.body    
  })
}