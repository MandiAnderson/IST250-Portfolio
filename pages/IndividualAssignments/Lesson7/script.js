function openPage(pageName, elmnt) {
  var i, pageSection, navButton;
  pageSection = document.getElementsByClassName("PageSection");
  navButton = document.getElementsByClassName("NavButton");
    for (i = 0; i < pageSection.length; i++) {
        pageSection[i].style.display = "none";
    }
    for (i = 0; i < navButton.length; i++) {
        navButton[i].classList.remove("active");
    }
    elmnt.classList.add("active");

    var backgroundImg = document.getElementById("PageContent");
    if (pageName === "Home") backgroundImg.style.backgroundImage = "url('images/Interior1-1.jpeg')";
    if (pageName === "Menu") backgroundImg.style.backgroundImage = "url('images/cozara1.jpg')";
    if (pageName === "About") backgroundImg.style.backgroundImage = "url('images/Interior4.jpg')";
    if (pageName === "Contact") backgroundImg.style.backgroundImage = "url('images/Interior3.jpg')";

    document.getElementById(pageName).style.display = "block";
}

document.getElementById("defaultOpen").click();
window.scrollTo(0, 0);



var modal = document.getElementById("Modal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var btn = document.querySelectorAll('.modalButton');

var images = document.querySelectorAll(".menuItemImage img");

images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
});

btn.forEach(function(button) {
    button.onclick = function() {
        modal.style.display = "block";
        var img = this.closest("li").querySelector("img");
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    };
});

function closeModal() {
    modal.style.display = "none";
}