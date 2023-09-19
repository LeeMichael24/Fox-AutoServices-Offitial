// Funcion expression to select elements
const selectElement = (s) => document.querySelector(s);

//Open menu on click
selectElement(".open").addEventListener("click", () => {
    selectElement(".nav-list").classList.add("active");
})
//Close menu on click
selectElement(".close").addEventListener("click", () => {
    selectElement(".nav-list").classList.remove("active");
})

//Scroll reveal

window.sr = new ScrollReveal();

sr.reveal(".animate-left", {
    origin: "left",
    duration: 1100,
    distance: "25rem",
    delay: 60
});

sr.reveal(".animate-right", {
    origin: "right",
    duration: 1100,
    distance: "25rem",
    delay: 60
});

sr.reveal(".animate-top", {
    origin: "top",
    duration: 1000,
    distance: "8rem",
    delay: 40
});

sr.reveal(".animate-bottom", {
    origin: "bottom",
    duration: 1000,
    distance: "10rem",
    delay: 45
});


//How we do it rotate function
var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");
var iconBx = document.querySelectorAll(".iconBx");
var contentBx = document.querySelectorAll(".contentBx");
var one = selectElement(".one");
var two = selectElement(".two");
var three = selectElement(".three");
var four = selectElement(".four");
var featureNum = 1;

if (circle != null) {
    var rotateValue = circle.style.transform;
    var rotateSum;

    selectElement("#upBtn").addEventListener("click", () => {
        rotateSum = rotateValue + "rotate(-90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;
        if (featureNum == 1) {
            featureNum = 4;
        } else {
            featureNum--;
        }
        switch (featureNum) {
            case 1:
                one.style.display = "inline";
                two.style.display = "none";
                three.style.display = "none";
                four.style.display = "none";
                break;
            case 2:
                one.style.display = "none";
                two.style.display = "inline";
                three.style.display = "none";
                four.style.display = "none";
                break;
            case 3:
                one.style.display = "none";
                two.style.display = "none";
                three.style.display = "inline";
                four.style.display = "none";
                break;
            case 4:
                one.style.display = "none";
                two.style.display = "none";
                three.style.display = "none";
                four.style.display = "inline";
                break;

            default:
                one.style.display = "inline";
                two.style.display = "none";
                three.style.display = "none";
                four.style.display = "none";
                break;
        }
    })

    selectElement("#downBtn").addEventListener("click", () => {
        rotateSum = rotateValue + "rotate(+90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;
        if (featureNum == 4) {
            featureNum = 1;
        } else {
            featureNum++;
        }
        switch (featureNum) {
            case 1:
                one.style.display = "inline";
                two.style.display = "none";
                three.style.display = "none";
                four.style.display = "none";
                break;
            case 2:
                one.style.display = "none";
                two.style.display = "inline";
                three.style.display = "none";
                four.style.display = "none";
                break;
            case 3:
                one.style.display = "none";
                two.style.display = "none";
                three.style.display = "inline";
                four.style.display = "none";
                break;
            case 4:
                one.style.display = "none";
                two.style.display = "none";
                three.style.display = "none";
                four.style.display = "inline";
                break;

            default:
                one.style.display = "inline";
                two.style.display = "none";
                three.style.display = "none";
                four.style.display = "none";
                break;
        }
    })
}


for (var i = 0; i < iconBx.length; i++) {
	"use strict"
    iconBx[i].addEventListener("mouseover", function () {
        for (var i = 0; i < contentBx.length; i++) {
            contentBx[i].className = "contentBx";
        }
        document.getElementById(this.dataset.id).className = "contentBx active";

        for (var i = 0; i < iconBx.length; i++) {
            iconBx[i].className = "iconBx";
        }
        this.className = "iconBx active";
    })
}

(function ($) {
	"use strict";

	// navbarDropdown
	if ($(window).width() < 992) {
		$(".navigation .dropdown-toggle").on("click", function () {
			$(this).siblings(".dropdown-menu").animate({
				height: "toggle"
			}, 300);
		});
  }

	// scroll to top button
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 70) {
			$(".backtop").addClass("reveal");
		} else {
			$(".backtop").removeClass("reveal");
		}
	});
	// scroll-to-top
  $(".scroll-top-to").on("click", function () {
    $("body,html").animate({
      scrollTop: 0
    }, 500);
    return false;
  });

	$(".portfolio-single-slider").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$(".clients-logo").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplaySpeed: 6000,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}

		]
	});

	$(".testimonial-wrap").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		vertical: true,
		verticalSwiping: true,
		autoplaySpeed: 6000,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});

	$(".testimonial-wrap-2").slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});


	// counter
	function counter() {
		var oTop;
		if ($(".counter").length !== 0) {
			oTop = $(".counter").offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$(".counter").each(function () {
				var $this = $(this),
					countTo = $this.attr("data-count");
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 500,
					easing: "swing",
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
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
			buffer: 1
		});
		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}


  // testimonial-wrap
  if ($(".testimonial-wrap").length !== 0) {
    $(".testimonial-wrap").slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }


// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Inicializa el carrusel de testimonios utilizando Slick Carousel
    $('.testimonial-carousel').slick({
        autoplay: true, // Reproducción automática
        autoplaySpeed: 5000, // Velocidad de reproducción automática (en milisegundos)
        dots: true, // Muestra los indicadores de paginación
        arrows: false, // Oculta las flechas de navegación
        infinite: true // Habilita el bucle infinito
    });
});


  document.addEventListener('DOMContentLoaded', function () {
	const mobileDropdownMenu = document.querySelector('.mobile-dropdown-menu');
	const customTabs = document.querySelector('.custom-tabs');
  
	mobileDropdownMenu.addEventListener('click', () => {
	  customTabs.classList.toggle('active');
	});
  });
  
	




  //hero start services tabs
  document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.custom-tabs');
    const tabContents = document.querySelectorAll('.service-box');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    const tabLinks = document.querySelectorAll('.custom-tabs a');
    tabLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const selectedService = event.target.getAttribute('href');
            tabContents.forEach(content => {
                content.classList.remove('show', 'active');
            });
            document.querySelector(selectedService).classList.add('show', 'active');
            menu.classList.remove('active');
        });
    });
    
    // Mostrar el primer servicio por defecto al cargar la página
    document.querySelector('#Service1').classList.add('show', 'active');
});

  //hero end services tabs

})(jQuery);



let customSlideIndex = 1;
showCustomSlide(customSlideIndex);

function changeCustomSlide(n) {
  showCustomSlide(customSlideIndex += n);
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









document.addEventListener("DOMContentLoaded", function() {
  var video = document.querySelector(".hero-video-commercial");

  // Agrega la ruta local del video al src
  video.src = "https://raw.githubusercontent.com/LeeMichael24/Fox-multiMedia/main/Videos/HeroVideoCommercial720.mp4?token=GHSAT0AAAAAACHZP4XCQBF7RVT6N7WGNOUSZIJ2XFQ"; // Cambia la ruta a tu video local

  // Escuchar el evento "canplaythrough" para saber cuando el video está completamente cargado
  video.addEventListener("canplaythrough", function() {
      // Comienza a reproducir el video automáticamente
      video.play();
  });
});

