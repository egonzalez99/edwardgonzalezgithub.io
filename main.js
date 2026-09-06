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

const carPos = { coding: 0, editing: 0, photo: 0 };

// Matches the breakpoint in style.css where .car-track .box-desc switches
// to flex: 0 0 100%. Keeping this in sync means the "1 card visible" math
// below matches what's actually on screen.
function getVisibleCount() {
    return window.innerWidth <= 900 ? 1 : 3;
}

function slide(section, dir) {
    const track = document.getElementById(section + '-track');
    const cards = track.querySelectorAll('.box-desc');
    const total = cards.length;
    const visible = getVisibleCount();
    const maxPos = Math.max(total - visible, 0);

    // loop around cards
    carPos[section] = (carPos[section] + dir + (maxPos + 1)) % (maxPos + 1);

    // card width + gap
    const cardWidth = track.querySelector('.box-desc').offsetWidth + 16;
    track.style.transform = `translateX(-${carPos[section] * cardWidth}px)`;
}

// Rotating the device or resizing the window changes how many cards fit
// per "page", so a stale carPos would translateX() the track too far and
// leave blank space. Debounced so it only recalculates once you stop
// resizing, instead of on every pixel (which is what makes resize handlers
// feel laggy).
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        Object.keys(carPos).forEach(section => {
            const track = document.getElementById(section + '-track');
            if (!track) return;
            carPos[section] = 0;
            track.style.transform = 'translateX(0)';
        });
    }, 150);
});

function openPhoto(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('open');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
}

// close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

function openVideo(src) {
    document.getElementById('lightbox-video').src = src + '?autoplay=1';
    document.getElementById('video-lightbox').classList.add('open');
}

function closeVideo() {
    document.getElementById('lightbox-video').src = ''; // stops video playing
    document.getElementById('video-lightbox').classList.remove('open');
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideo();
});