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

//light and dark mode

let btn = document.querySelector(".button");
btn.addEventListener("click", (ele) => {
  if (ele.target.classList.contains("dark")) {
    ele.target.classList.toggle("dark");
    //so we in dark mode
    theToggle(document.querySelector("body"));
    if (document.querySelector(".container").classList.contains("sticky")) {
      document.querySelector(".container").classList.remove("dark");
    }

    theToggle(document.querySelector(".logo img"));
    theToggle(document.querySelector(".links-container .links"));
    document.querySelectorAll(".toggle-menu span").forEach((e) => theToggle(e));
    document
      .querySelectorAll(".links-container .links li a")
      .forEach((e) => theToggle(e));
    theToggle(document.querySelector(".content .title h1"));
    theToggle(document.querySelector(".content .txt p"));
    theToggle(document.querySelector(".content .txt a"));
    theToggle(document.querySelector(".content .news"));
    theToggle(document.querySelector(".content .news h1"));
    document
      .querySelectorAll(".content .news .new-item a")
      .forEach((e) => theToggle(e));
    document
      .querySelectorAll(".content .news .new-item p")
      .forEach((e) => theToggle(e));

    document
      .querySelectorAll("footer .categories .catagories-content h1")
      .forEach((e) => theToggle(e));
    document
      .querySelectorAll("footer .categories .catagories-content a")
      .forEach((e) => theToggle(e));
    document
      .querySelectorAll("footer .categories .catagories-content p")
      .forEach((e) => theToggle(e));
  } else {
    ele.target.classList.toggle("dark");
    //we in light mode
    theToggle(document.querySelector("body"));
    if (document.querySelector(".container").classList.contains("sticky")) {
      document.querySelector(".container").classList.add("dark");
    }
    theToggle(document.querySelector(".logo img"));
    theToggle(document.querySelector(".links-container .links"));
    document.querySelectorAll(".toggle-menu span").forEach((e) => theToggle(e));
    document
      .querySelectorAll(".links-container .links li a")
      .forEach((e) => theToggle(e));
    theToggle(document.querySelector(".content .title h1"));
    theToggle(document.querySelector(".content .txt p"));
    theToggle(document.querySelector(".content .txt a"));
    theToggle(document.querySelector(".content .news"));
    theToggle(document.querySelector(".content .news h1"));
    document
      .querySelectorAll(".content .news .new-item a")
      .forEach((e) => theToggle(e));
    document
      .querySelectorAll(".content .news .new-item p")
      .forEach((e) => theToggle(e));

    document
      .querySelectorAll("footer .categories .catagories-content h1")
      .forEach((e) => theToggle(e));
    document
      .querySelectorAll("footer .categories .catagories-content a")
      .forEach((e) => theToggle(e));
    document
      .querySelectorAll("footer .categories .catagories-content p")
      .forEach((e) => theToggle(e));
  }
});

function theToggle(ele) {
  return ele.classList.toggle("dark");
}

//scroll
window.onscroll = function () {
  myFunction();
};
let header = document.querySelector(".header");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    if (tlinks.classList.contains("active")) {
      header.classList.remove("sticky");
      header.parentElement.classList.remove("sticky");
    } else {
      header.classList.add("sticky");
      header.parentElement.classList.add("sticky");
    }
  } else {
    header.classList.remove("sticky");
    header.parentElement.classList.remove("sticky");
  }
}
