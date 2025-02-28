// Funcion expression to select elements
/* const selectElement = (s) => document.querySelector(s); */

//Open menu on click
document.addEventListener("DOMContentLoaded", function () {
  // Verificar si el ancho de la ventana es mayor que 992px (ajusta según sea necesario)
  if (window.innerWidth > 992) {
    var dropdowns = document.querySelectorAll(".navbar-nav .nav-item.dropdown");

    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener("mouseenter", function () {
        this.querySelector(".dropdown-menu").classList.add("show");
      });

      dropdown.addEventListener("mouseleave", function () {
        this.querySelector(".dropdown-menu").classList.remove("show");
      });
    });
  }
});

selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});
//Close menu on click
selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});

//Scroll reveal

window.sr = new ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1100,
  distance: "25rem",
  delay: 60,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1100,
  distance: "25rem",
  delay: 60,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "8rem",
  delay: 40,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "10rem",
  delay: 45,
});

//How we do it rotate function
(function ($) {
  "use strict";

  // navbarDropdown
  if ($(window).width() < 992) {
    $(".navigation .dropdown-toggle").on("click", function () {
      $(this).siblings(".dropdown-menu").animate(
        {
          height: "toggle",
        },
        300
      );
    });
  }

  $(window).on("scroll", function () {
    counter();
  });

  // Shuffle js filter and masonry
  if ($(".shuffle-wrapper").length !== 0) {
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector(".shuffle-wrapper"), {
      itemSelector: ".shuffle-item",
      buffer: 1,
    });
    jQuery('input[name="shuffle-filter"]').on("change", function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }

  //hero end services tabs
})(jQuery);

let customSlideIndex = 1;
showCustomSlide(customSlideIndex);

function changeCustomSlide(n) {
  showCustomSlide((customSlideIndex += n));
}

function showCustomSlide(n) {
  let customSlides = document.getElementsByClassName("custom-carousel-slide");
  if (n > customSlides.length) {
    customSlideIndex = 1;
  }
  if (n < 1) {
    customSlideIndex = customSlides.length;
  }
  for (let i = 0; i < customSlides.length; i++) {
    customSlides[i].style.display = "none";
  }
  customSlides[customSlideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  var video = document.querySelector(".hero-video-commercial");

  // Agrega la ruta local del video al src
  video.src = "images/video/videoOficial.mp4"; // Cambia la ruta a tu video local
  video.src = "images/video/videoOficial.ogg"; // Cambia la ruta a tu video local
  video.src = "images/video/videoOficial.webm"; // Cambia la ruta a tu video local

  // Escuchar el evento "canplaythrough" para saber cuando el video está completamente cargado
  video.addEventListener("canplaythrough", function () {
    // Comienza a reproducir el video automáticamente
    video.play();
  });
});

/* SEASON CHRISTMAS */
function toggleImages(xmast, show) {
  const images = document.querySelectorAll(`.${xmast}`);

  images.forEach(image => {
      if (show) {
          image.classList.remove('hidden');
      } else {
          image.classList.add('hidden');
      }
  });
}

/* SEASON CHRISTMAS */


/* BLOG POST */
document.addEventListener("DOMContentLoaded", function () {
  setInterval(() => {
      let heart = document.createElement("div");
      heart.innerHTML = "❤️";
      Object.assign(heart.style, {
          position: "fixed",
          left: Math.random() * innerWidth + "px",
          top: "-10px",
          fontSize: Math.random() * 20 + 20 + "px",
          opacity: Math.random() * 0.8 + 0.2,
          transition: "all 4s linear",
          zIndex: "9999"
      });
      document.body.appendChild(heart);
      setTimeout(() => heart.style.transform = "translateY(" + innerHeight + "px)", 50);
      setTimeout(() => heart.remove(), 4000);
  }, 300);
});
