//-----------Проект в процессе---------------

const nameInp = document.querySelector(".name");
const emailInp = document.querySelector(".email");
const websiteInp = document.querySelector(".website");
const body = document.querySelector("body");
// const inputs = document.querySelectorAll("input");

const nextBtn = document.querySelector(".next");
const lastBtn = document.querySelector(".last");
const pName = document.createElement("p");
const pEmail = document.createElement("p");
const pWebsite = document.createElement("p");
const card = document.createElement("div");

body.append(card);
card.classList = "card";
card.append(pName, pEmail, pWebsite, lastBtn, nextBtn);

let entpoint = 1;
let url = "https://jsonplaceholder.typicode.com/users";
url = `${url}/${entpoint}`;
fetchData();

function fetchData() {
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      return createCard(jsonData);
    });
}

function createCard(jsonData) {
  nameInp.value = jsonData.name;
  pName.innerText = `Name: ${jsonData.name}`;
  emailInp.value = jsonData.email;
  pEmail.innerText = `Email: ${jsonData.email}`;
  websiteInp.value = jsonData.website;
  pWebsite.innerText = `Website: ${jsonData.website}`;
}

nextBtn.addEventListener("click", () => {
  let url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      return jsonData;
    })
    .then((jsonData) => {
      const objLength = Object.keys(jsonData).length;
      // console.log(objLength);
      return objLength;
    })
    .then((objLength) => {
      if (entpoint >= objLength) entpoint = 0;

      return (url = `${url}/${++entpoint}`);
    })
    .then((url) => {
      fetch(url)
        .then((response) => response.json())
        .then((jsonData) => {
          console.log(jsonData);
          return createCard(jsonData);
        });
    });
});
lastBtn.addEventListener("click", () => {
  let url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      return jsonData;
    })
    .then((jsonData) => {
      const objLength = Object.keys(jsonData).length;
      // console.log(objLength);
      return objLength;
    })
    .then((objLength) => {
      if (entpoint < 1) entpoint = objLength;

      return (url = `${url}/${entpoint--}`);
    })
    .then((url) => {
      fetch(url)
        .then((response) => response.json())
        .then((jsonData) => {
          console.log(jsonData);
          return createCard(jsonData);
        });
    });
});

//---------заготовки------------------------

// .then((jsonData) => {
//   nameInp.value = jsonData.name;
//   pName.innerText = `Name: ${jsonData.name}`;
//   return jsonData;
// })
// .then((jsonData) => {
//   emailInp.value = jsonData.email;
//   pEmail.innerText = `Email: ${jsonData.email}`;
//   return jsonData;
// })
// .then((jsonData) => {
//   websiteInp.value = jsonData.website;
//   pWebsite.innerText = `Website: ${jsonData.website}`;
//   return jsonData;
// })
// .then((jsonData)=>{
// })
// }

//----------------------------------------------------------
// const objLength = Object.keys(jsonData).length;
// console.log(objLength);
//----------------------------------------------------------

// let entpoint = 1;
// let url = "https://jsonplaceholder.typicode.com/users";
// url = `${url}/${entpoint}`;
// // fetchData();

// // function fetchData() {
// fetch(url)
//   .then((response) => response.json())
//   .then((jsonData) => {
//     return jsonData;
//   })
//   .then((jsonData) => {
//     nameInp.value = jsonData.name;
//     return jsonData;
//   })
//   .then((jsonData) => {
//     emailInp.value = jsonData.email;
//     return jsonData;
//   })
//   .then((jsonData) => {
//     websiteInp.value = jsonData.website;
//     //   console.log(jsonData);
//     //   return jsonData;
//   })
//   .then(() => {
//     nextBtn.addEventListener("click", () => {
//       let url = "https://jsonplaceholder.typicode.com/users";
//       url = `${url}/${++entpoint}`;

//       if (entpoint >= 10) {
//         entpoint = 0;
//       }
//       fetch(url)
//         .then((response) => response.json())
//         .then((jsonData) => {
//           return jsonData;
//         })
//         .then((jsonData) => {
//           nameInp.value = jsonData.name;
//           return jsonData;
//         })
//         .then((jsonData) => {
//           emailInp.value = jsonData.email;
//           return jsonData;
//         })
//         .then((jsonData) => {
//           websiteInp.value = jsonData.website;
//           //   console.log(jsonData);
//           return jsonData;
//         })
//         .then((jsonData) => {
//           console.log(jsonData);
//         });
//     });
//   })
//   .then(() => {
//     lastBtn.addEventListener("click", () => {
//       let url = "https://jsonplaceholder.typicode.com/users";
//       if (entpoint <= 0) entpoint = 10;
//       url = `${url}/${entpoint--}`;

//       fetch(url)
//         .then((response) => response.json())
//         .then((jsonData) => {
//           return jsonData;
//         })
//         .then((jsonData) => {
//           nameInp.value = jsonData.name;
//           return jsonData;
//         })
//         .then((jsonData) => {
//           emailInp.value = jsonData.email;
//           return jsonData;
//         })
//         .then((jsonData) => {
//           websiteInp.value = jsonData.website;
//           //   console.log(jsonData);
//           return jsonData;
//         })
//         .then((jsonData) => {
//           console.log(jsonData);
//         });
//     });
//   });
// // }
