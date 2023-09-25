const nameInp = document.querySelector(".name");
const emailInp = document.querySelector(".email");
const websiteInp = document.querySelector(".website");
const body = document.querySelector("body");
const nextBtn = document.querySelector(".next");
const lastBtn = document.querySelector(".last");
const editBtn = document.querySelector(".edit");

const pName = document.createElement("p");
const pEmail = document.createElement("p");
const pWebsite = document.createElement("p");
const card = document.createElement("div");

body.append(card);
card.classList = "card";
card.append(pName, pEmail, pWebsite, lastBtn, nextBtn);
let entpoint = 1;
let url = "https://jsonplaceholder.typicode.com/users";
let url2;

fetchData();
async function fetchData() {
  url = `${url}/${entpoint}`;
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData);
  createCard(jsonData);
}

function createCard(jsonData) {
  pName.innerText = `Name: ${jsonData.name}`;
  nameInp.value = "";

  pEmail.innerText = `Email: ${jsonData.email}`;
  emailInp.value = "";

  pWebsite.innerText = `Website: ${jsonData.website}`;
  websiteInp.value = "";
  let url = "https://jsonplaceholder.typicode.com/users";
  url2 = `${url}?id=${jsonData.id}`;
  console.log(url2);
  return url2;
}

nextBtn.addEventListener("click", async () => {
  let url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const jsonData = await response.json();
  const objLength = jsonData.length;
  if (entpoint >= objLength) entpoint = 0;
  const url_1 = (url = `${url}/${++entpoint}`);
  fetch(url_1)
    .then((response_1) => response_1.json())
    .then((jsonData_1) => {
      // console.log(jsonData);
      createCard(jsonData_1);
    });
});

lastBtn.addEventListener("click", async () => {
  let url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const jsonData = await response.json();
  const objLength = jsonData.length;
  if (entpoint < 1) {
    entpoint = objLength;
  } else if (entpoint === 1) {
    entpoint = objLength + 1;
  }
  url = `${url}/${--entpoint}`;
  const url_1 = url;
  fetch(url_1)
    .then((response_1) => response_1.json())
    .then((jsonData_1) => {
      // console.log(jsonData);
      return createCard(jsonData_1);
    });
});

editBtn.addEventListener("click", () => {
  const newData = {
    name: nameInp.value,
    email: emailInp.value,
    website: websiteInp.value,
  };

  // fetch(url2, {
  //   method: "PUT",
  //   body: JSON.stringify(newData),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // });
  console.log(newData);
  createCard(newData);
});
