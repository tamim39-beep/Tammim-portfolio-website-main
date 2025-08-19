/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (window.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => modal(i));
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => mv.classList.remove("active-modal"));
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixer = mixitup(".work__container", {
  selectors: { target: ".work__card" },
  animation: { duration: 300 },
});

/*=============== ACTIVE WORK LINK ===============*/
const workLinks = document.querySelectorAll(".work__item");

function activeWork(workLink) {
  workLinks.forEach((wl) => wl.classList.remove("active-work"));
  workLink.classList.add("active-work");
}

workLinks.forEach((wl) => {
  wl.addEventListener("click", () => activeWork(wl));
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: { slidesPerView: 2 },
    768: { slidesPerView: 2, spaceBetween: 48 },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");

    const link = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link?.classList.add("active-link");
    } else {
      link?.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// --- PERBAIKAN TOGGLE TEMA DI SINI ---
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme"; // Nama kelas untuk tema terang pada body

// Ikon untuk tema terang dan gelap
const moonIcon = "bx-moon";
const sunIcon = "bx-sun";

// Fungsi untuk mendapatkan tema dan ikon saat ini
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "light" : "dark";

const getCurrentIconClass = () =>
  themeButton.classList.contains(moonIcon) ? moonIcon : sunIcon; // Mengembalikan kelas ikon yang sedang aktif

// Simpan tema saat ini di localStorage (optional)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon"); // Ini akan menyimpan "bx-moon" atau "bx-sun"

// Jika user sebelumnya memilih tema, terapkan
if (selectedTheme) {
  document.body.classList[selectedTheme === "light" ? "add" : "remove"](
    lightTheme
  );
  // Pastikan ikon juga sesuai dengan tema yang disimpan
  if (selectedTheme === "light") {
    themeButton.classList.remove(moonIcon);
    themeButton.classList.add(sunIcon);
  } else {
    themeButton.classList.remove(sunIcon);
    themeButton.classList.add(moonIcon);
  }
}


// Klik tombol untuk toggle tema
themeButton.addEventListener("click", () => {
  // Toggle kelas 'light-theme' pada body
  document.body.classList.toggle(lightTheme);

  // Ganti ikon bulan menjadi matahari atau sebaliknya
  if (themeButton.classList.contains(moonIcon)) {
    themeButton.classList.remove(moonIcon);
    themeButton.classList.add(sunIcon);
  } else {
    themeButton.classList.remove(sunIcon);
    themeButton.classList.add(moonIcon);
  }

  // Simpan pengaturan tema dan ikon ke localStorage
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIconClass());
});

// --- AKHIR PERBAIKAN TOGGLE TEMA ---

/*=============== LOADING SCREEN ===============*/
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
    }, 2000); // 2 detik
  }
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.nav__menu`, { delay: 100, origin: "bottom", distance: "300px" });
sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, { delay: 100 });
sr.reveal(`.home__social, .home__scroll`, { delay: 100, origin: "bottom" });
sr.reveal(`.about__img`, { delay: 100, origin: "left", distance: "30px" });
sr.reveal(`.about__data, .about__description, .about__button-contact`, {
  delay: 100,
  origin: "right",
  distance: "30px",
});
sr.reveal(`.skills__content`, {
  delay: 100,
  origin: "bottom",
  distance: "30px",
});
sr.reveal(`.services__title, .services__button`, {
  delay: 100,
  origin: "top",
  distance: "30px",
});
sr.reveal(`.work__card`, {
  delay: 100,
  origin: "bottom",
  distance: "30px",
});
sr.reveal(`.testimonial__container`, {
  delay: 100,
  origin: "bottom",
  distance: "30px",
});
sr.reveal(`.contact__info, .contact__title-info`, {
  delay: 100,
  origin: "left",
  distance: "30px",
});
sr.reveal(`.contact__form, .contact__title-form`, {
  delay: 100,
  origin: "right",
  distance: "30px",
});
sr.reveal(`.footer, .footer__container`, {
  delay: 100,
  origin: "bottom",
  distance: "30px",
});