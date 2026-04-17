// will be use for interactive elements of the tabs
  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".side-tabs .tab");
    const sections = document.querySelectorAll(".tab-section");

    tabs.forEach(tab => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();
        const identifier = tab.getAttribute("href").substring(1);
        const identifierSections = document.getElementById(identifier);

        // Hide all sections
        sections.forEach(section => {
          section.classList.remove("on");
          section.style.zIndex = 0;
        });

        // Show the targeted one
        document.getElementById(identifier).classList.add("on");
        
      });
    });
  });

  // sub tabs on project section page
function showSubTab(id, btn) {

    // hide sub-sections 
    document.querySelectorAll(".sub-section").forEach(s => {
        s.style.display = "none";
    });

    document.querySelectorAll(".sub-tab").forEach(b => {
        b.classList.remove("active");
    });

    document.getElementById(id).style.display = "block";

    // set active on clicked
    btn.classList.add("active-sub");
}

  // button for projects to show more 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex = slideIndex + n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let 
}