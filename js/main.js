$('.trustsec_mainpage_content_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots: false,
  infinite: true,
  variableWidth: false,
  dots: true,
  speed: 1000,
  prevArrow: $('.trustsec_mainpage_content_slider_buttons_leftbtn'),
  nextArrow: $('.trustsec_mainpage_content_slider_buttons_rightbtn'),
  responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                variableWidth: true
            }
        },
    ]
});







if (document.querySelector('.mapsec_contactspage_map')) {

function init() {
    const coords = [55.721189, 37.652301];

    const map = new ymaps.Map('map', {
        center: coords,
        zoom: 17,
        controls: [
          'zoomControl',
    'geolocationControl',
    'fullscreenControl',
    'typeSelector'
        ] // отключаем стандартные контролы
    }, {
        suppressMapOpenBlock: true
    });

    var svgIcon = `
        <svg width="55" height="69" viewBox="0 0 55 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1671 27.315C16.1671 30.3931 17.4132 33.1822 19.4327 35.1978C21.4483 37.2134 24.2374 38.4634 27.3155 38.4634C30.3936 38.4634 33.1788 37.2173 35.1983 35.1978C37.2139 33.1822 38.4639 30.3931 38.4639 27.315C38.4639 24.2369 37.2178 21.4517 35.1983 19.4322C33.1827 17.4166 30.3936 16.1666 27.3155 16.1666C24.2374 16.1666 21.4483 17.4127 19.4327 19.4322C17.4171 21.4478 16.1671 24.2369 16.1671 27.315ZM45.8974 49.925C51.0029 42.9562 54.624 35.292 54.624 27.312C54.624 19.7729 51.5654 12.945 46.624 8C41.6826 3.0586 34.854 0 27.312 0C19.7729 0 12.945 3.0586 8 8C3.0547 12.9414 0 19.77 0 27.312C0 35.2925 3.6211 42.957 8.7266 49.925C13.6836 56.6867 20.0466 62.8 25.7886 67.866C26.6402 68.6277 27.9448 68.6472 28.8238 67.8738C34.5621 62.8074 40.9328 56.6938 45.8898 49.9288L45.8974 49.925ZM38.4404 38.437C35.5927 41.2847 31.6592 43.0464 27.3154 43.0464C22.9716 43.0464 19.0381 41.2847 16.1904 38.437C13.3427 35.5893 11.581 31.6558 11.581 27.312C11.581 22.9682 13.3427 19.0347 16.1904 16.187C19.0381 13.3393 22.9716 11.5776 27.3154 11.5776C31.6592 11.5776 35.5927 13.3393 38.4404 16.187C41.2881 19.0347 43.0498 22.9682 43.0498 27.312C43.0498 31.6558 41.2881 35.5893 38.4404 38.437Z" fill="#CB3D35"/>
</svg>
    `;

    var placemark = new ymaps.Placemark(
        coords,
        {
            
        },
        {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svgIcon),
            iconImageSize: [54, 68],
            iconImageOffset: [-17.5, -45],
            iconContentOffset: [135, 5],
            iconContentLayout: ymaps.templateLayoutFactory.createClass(
                '<div style="\
                    display:inline-block;\
                    background:#ffffff;\
                    padding:6px 10px;\
                    border-radius:6px;\
                    font-size:13px;\
                    font-weight:500;\
                    white-space:nowrap;\
                    box-shadow:0 2px 6px rgba(0,0,0,0.2);\
                    border:1px solid rgba(0,0,0,0.1);\
                    transform:translateX(-50%);\
                ">\
                    $[properties.iconContent]\
                </div>'
            )
        }
    );

    map.geoObjects.add(placemark);

    
}

ymaps.ready(init);


/*
let resizeTimeout;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.map) {
            map.container.fitToViewport();
        }
    }, 200);
});
*/

}


















const textarea = document.getElementById('comment');

textarea.addEventListener('click', () => {
    const length = textarea.value.length;
    textarea.setSelectionRange(length, length);
});

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});










/*==========МОДАЛКА ОСТАВИТЬ ЗАЯВКУ================*/


document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('orderModal');
    const overlay = modal.querySelector('.order-modal__overlay');
    const closeButton = modal.querySelector('.order-modal__close');
    const orderButtons = document.querySelectorAll('.order');
    function openModal() {
        modal.classList.add('is-open');
        document.body.classList.add('modal-open');
    }
    function closeModal() {
        modal.classList.remove('is-open');
        document.body.classList.remove('modal-open');
    }
    orderButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            openModal();
        });
    });
    closeButton.addEventListener('click', function () {
        closeModal();
    });
    overlay.addEventListener('click', function () {
        closeModal();
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});



/*==========МОДАЛКА ТОВАРНЫЕ СТАНКИ================*/


document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("machineModal");
    const overlay = modal.querySelector(".machine-modal__overlay");
    const closeButton = modal.querySelector(".machine-modal__close");
    const cancelButton = modal.querySelector(".machine-modal__cancel");
    const openButtons = document.querySelectorAll(".machinetools");

    function openModal() {
        modal.classList.add("is-open");
        document.body.classList.add("modal-open");
    }

    function closeModal() {
        modal.classList.remove("is-open");
        document.body.classList.remove("modal-open");
    }

    openButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            openModal();
        });
    });

    closeButton.addEventListener("click", function () {
        closeModal();
    });

    cancelButton.addEventListener("click", function () {
        closeModal();
    });

    overlay.addEventListener("click", function () {
        closeModal();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && modal.classList.contains("is-open")) {
            closeModal();
        }
    });
});