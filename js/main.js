setTimeout(() => {
  document.querySelector("body").style.opacity = "1";
}, 500);

//open links menu
let menu = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".header .links");
let overlay = document.querySelector(".overlay");

menu.onclick = function (e) {
  //stop propogation
  e.stopPropagation();
  tlinks.classList.toggle("active");
  overlay.classList.toggle("active");
  for (const child of menu.children) {
    child.classList.toggle("active");
  }
};

//select new links
let newLink = document.querySelectorAll(".new-item a");

newLink.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
  });
});
//click on button
let button = document.querySelector(".content .txt a");
button.onclick = (e) => {
  e.target.classList.toggle("active");
};
//click on catagoriesLink
let catagoriesLink = document.querySelectorAll(".catagories-content a");
catagoriesLink.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
  });
});

// click in anywhere
document.addEventListener("click", (ele) => {
  // for menu links
  if (ele.target !== menu && ele.target !== tlinks) {
    if (tlinks.classList.contains("active")) {
      tlinks.classList.remove("active");
      overlay.classList.remove("active");
      for (const child of menu.children) {
        child.classList.remove("active");
      }
    }
  }
  //for links in new
  newLink.forEach((e) => {
    if (ele.target !== e) {
      if (e.classList.contains("active")) {
        e.classList.remove("active");
      }
    }
  });
  //for button
  if (ele.target !== button) {
    if (button.classList.contains("active")) button.classList.remove("active");
  }
  // for catagories links
  catagoriesLink.forEach((e) => {
    if (ele.target !== e) {
      if (e.classList.contains("active")) {
        e.classList.remove("active");
      }
    }
  });
});
//stop propagation on links
tlinks.onclick = function (e) {
  //stop propogation
  e.stopPropagation();
};
