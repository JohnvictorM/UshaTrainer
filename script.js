document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navbar = document.getElementById("navbar");
  const body = document.body;

  // SAFETY CHECK
  if (!menuToggle || !navMenu) return;

  /* =====================
     MOBILE MENU TOGGLE
  ====================== */
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  // Close menu on link click
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
      body.classList.remove("menu-open");
    });
  });

  // Close menu on outside click
  document.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
      body.classList.remove("menu-open");
    }
  });

  /* =====================
     NAVBAR SCROLL EFFECT
  ====================== */
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  /* =====================
     SMOOTH SCROLL
  ====================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = 120;
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: "smooth"
        });
      }
    });
  });

  /* =====================
     FORM SUBMIT
  ====================== */
  const bookingForm = document.querySelector(".booking-form form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your booking request! We will contact you shortly.");
      bookingForm.reset();
    });
  }

});
