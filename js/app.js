//all the links elements
const workLink = document.getElementById("work-link");
const blogLink = document.getElementById("blog-link");
const aboutLink = document.getElementById("about-link");

//all the page elements
const workPageDiv = document.getElementById("work-page");
const blogPageDiv = document.getElementById("blog-page");
const aboutPageDiv = document.getElementById("about-page");

workLink.addEventListener("click", e => {
  e.preventDefault();
  workPageDiv.scrollIntoView();
});

blogLink.addEventListener("click", e => {
  e.preventDefault();
  blogPageDiv.scrollIntoView();
});

aboutLink.addEventListener("click", e => {
  e.preventDefault();
  aboutPageDiv.scrollIntoView();
});

let scroll_change;
let negative_accumulated_change;
let prevScrollPos = window.pageYOffset;

//onscroll fn is going to executed
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  scroll_change = currentScrollPos - prevScrollPos;
  //changing accumulated_change
  if (scroll_change < 0) {
    negative_accumulated_change += scroll_change;
  } else {
    negative_accumulated_change = 0;
  }
  //if scroll down then value positive so hide
  if (scroll_change > 0) {
    navbar.classList.add("d-none");
  }
  //if scroll up then value negative so show
  if (negative_accumulated_change < -250) {
    navbar.classList.remove("d-none");
  }
  prevScrollPos = currentScrollPos;
};
