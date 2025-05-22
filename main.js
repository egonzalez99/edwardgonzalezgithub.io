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