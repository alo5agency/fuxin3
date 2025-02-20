//Navigation

var app = function () {
  var body = undefined;
  var menu = undefined;
  var menuItems = undefined;
  var init = function init() {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav__list-item');
    applyListeners();
  };
  var applyListeners = function applyListeners() {
    menu.addEventListener('click', function () {
      return toggleClass(body, 'nav-active');
    });
  };
  var toggleClass = function toggleClass(element, stringClass) {
    if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
  };
  init();
}();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
});

// hover

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

// 

document.querySelector("#form-modal button").addEventListener("click", (value) => {
  value.preventDefault()
  sendRequest(`#form-modal input[name="name"]`, `#form-modal input[name="phone"]`)
});

MicroModal.init({
  openTrigger: 'data-custom-open',
  closeTrigger: 'data-custom-close',
  disableScroll: true,
  disableFocus: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true
});
$('[data-custom-open]').click(function () {
  $('.modal [name=form]').val($(this).data('form'))
});
$('[data-custom-close]').click(function () {
  $('.modal [name=form]').val('')
});

function sendRequest(nameSelector, phoneSelector) {
  let name = document.querySelector(nameSelector).value;
  let phone = document.querySelector(phoneSelector).value;
  let requestText = encodeURI(`<b>Заявка</b>\nИмя: ${name}\nНомер: ${phone}`)
  fetch(`https://api.telegram.org/bot7849947542:AAGEXY5TpjdJfTrRTIiIF6k0SC0-LjfDFZg/sendMessage?text=${requestText}&chat_id=-1002309385088&parse_mode=HTML`)
}

document.querySelector(".feature-consultation-form button").addEventListener("click", (value) => {
  value.preventDefault()
  sendRequest(`.feature-consultation-form input[name="name"]`, `.feature-consultation-form input[name="phone"]`);
  location.reload();
});



