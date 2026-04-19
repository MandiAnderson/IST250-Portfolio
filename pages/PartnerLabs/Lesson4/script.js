function setHeights(activeId) {
  const ids = ["species", "conservation", "cta"];

  
  if (window.matchMedia("(max-width: 700px)").matches) {
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.height = "auto";
    });
    return;
  }

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.height = (id === activeId) ? "33vh" : "50px";
    }
  });
}

function mouseEnterSpecies() { setHeights("species"); }
function mouseEnterConservation() { setHeights("conservation"); }
function mouseEnterCTA() { setHeights("cta"); }

function restoreActive() {
  const active = document.querySelector(".menu a.active");
  if (active) setHeights(active.id);
}

function mouseLeaveSpecies() { restoreActive(); }
function mouseLeaveConservation() { restoreActive(); }
function mouseLeaveCTA() { restoreActive(); }

window.addEventListener("DOMContentLoaded", restoreActive);
window.addEventListener("resize", restoreActive);
