// Make mobile navigation work

// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headerEl = document.querySelector(".header");

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });

function decode(a) {
    return a.replace(/[a-zA-Z]/g, function(c){
    return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    })
    }; 
    function openMailer(element) {
    var y = decode("znvygb:eftlqr@zgh.rqh");
    element.setAttribute("href", y);
    element.setAttribute("onclick", "");
    // element.firstChild.nodeValue = "Open email software";
    };
    