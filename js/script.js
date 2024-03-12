// Make mobile navigation work

// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headerEl = document.querySelector(".header");

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });


//https://css-tricks.com/how-to-safely-share-your-email-address-on-a-website/
var encEmail = "cnNneWRlQG10dS5lZHU=";
const form = document.getElementById("contactEmail");

form.setAttribute("href", "mailto:".concat(atob(encEmail)));
// if(form!=null)
// {
//     // form.setAttribute("href", "mailto: rsgyde@mtu.edu");
//     System.out.println("20 is greater than 18");
// }
    