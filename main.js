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
    document.querySelectorAll('.sub-section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.sub-tab').forEach(b => b.classList.remove('active'));
    document.getElementById(id).style.display = 'block';
    btn.classList.add('active');
    // reset carousel position when switching tabs
    carPos[id] = 0;
    document.getElementById(id + '-track').style.transform = 'translateX(0)';
}

const carPos = { coding: 0, editing: 0 };

function slide(section, dir) {
    const track = document.getElementById(section + '-track');
    const cards = track.querySelectorAll('.box-desc');
    const total = cards.length;
    const visible = 3;
    const maxPos = total - visible;

    // loop around cards
    carPos[section] = (carPos[section] + dir + (maxPos + 1)) % (maxPos + 1);

    // card width + gap
    const cardWidth = track.querySelector('.box-desc').offsetWidth + 16;
    track.style.transform = `translateX(-${carPos[section] * cardWidth}px)`;
}

