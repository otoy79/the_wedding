(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('❌navbar').addClass('sticky-top shadow-sm');
        } else {
            $('❌navbar').removeClass('sticky-top shadow-sm');
        }
    });

 // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 2000,
        dots: false,
        loop: true,
        nav : false,
        navText : [
              '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

   

    // International carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

'use strict';

const illustrations = {
    mail: {
        heading: 'Bismillahirrohmanirrohim',
        button1: ' ',
        button2: '  <div onmousedown="bleep1.play()" class="text">📩  Open Invitation</div> ',
        img: `
            <div class="mail">
                <div class="envelope-top"></div>
                <div class="envelope-back"></div>
                <div class="letter">
                    <div class="face">
                        <div class="eye-left"></div>
                        <div class="eye-right"></div>
                        <div class="mouth"></div>
                    </div>
                </div>
                <div class="envelope">
                    <div class="envelope-left"></div>
                    <div class="envelope-right"></div>
                    <div class="envelope-bottom"></div>
                </div>
            </div>
    `},
    cookie: {
        heading: 'We use Cookies',
        button1: 'Settings',
        button2: 'Fine',
        img: `
            <div class="cookie">
                <div class="cookie-body">
                    <div class="chocolate-chip"></div>
                    <div class="face">
                        <div class="eye-left"></div>
                        <div class="eye-right"></div>
                        <div class="mouth"></div>
                    </div>
                </div>
                <div class="cookie-bite"></div>
            </div>
    `},
    exclamation: {
        heading: 'Important Info!',
        button1: 'Don\'t care',
        button2: 'Whatever',
        img: `
            <div class="exclamation">
                <div class="exclamation-shadow"></div>
                <div class="exclamation-main"></div>
                <div class="exclamation-dot"></div>
                <div class="face">
                    <div class="eye-left"></div>
                    <div class="eye-right"></div>
                    <div class="mouth"></div>
                </div>
            </div>
    `},
    medal: {
        heading: 'Good job!',
        button1: 'Cancel',
        button2: 'Great!',
        img: `
            <div class="medal">
                <div class="medal-ribbon-shadow"></div>
                <div class="medal-ribbon"></div>
                <div class="medal-body">
                    <div class="face">
                        <div class="eye-left"></div>
                        <div class="eye-right"></div>
                        <div class="mouth"></div>
                    </div>
                </div>
                <div class="medal-star"></div>
            </div>
        `
    }
}



const btnContainer = document.querySelector('.buttons');
const popupContainer = document.querySelector('#popupContainer');

btnContainer.addEventListener('click', function(e) {
    const btn = e.target.closest('.popup-btn');
    if(!btn) return;
    const type = btn.dataset.popup;
    createPopup(type);
});

popupContainer.addEventListener('click', function(e) {
    if(!e.target.closest('button') && !e.target.closest('.popup-close') && !e.target.classList.contains('popup')) return;
    hidePopup();
})

function createPopup(type = 'mail') {
    const html = `
        <div class="popup popup-${type}">
            <div class="popup-content">
                <div class="popup-close"> </div>
                <div class="popup-header" style="display: none;">
                    ${illustrations[type].img}
                </div>
                <div class="popup-text">
                    <h5>${illustrations[type].heading}</h5>
  
   <div class="word">💕</div>
                  <p>  The Wedding Of  </p>

                    <button>${illustrations[type].button2}</button>
                </div>
            </div>
        </div>
    `;

    popupContainer.insertAdjacentHTML('afterbegin', html);
}

function hidePopup() {
    const popup = document.querySelector('.popup');
    const popupContent = popup.querySelector('.popup-content');
    
    popupContent.style.animation = 'hide .6s linear forwards';
    popupContent.addEventListener('animationend', function() {
        popupContainer.innerHTML = '';
    });
}

createPopup('mail');

var words = ['Assalamu `alaikum warohmatullah'  ],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 105,
    speed = 90;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function () {
  let input = copyText.querySelector("input.text");
  input.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText.classList.remove("active");
  }, 3500);
});

let copyText2 = document.querySelector(".copy-text2");
copyText2.querySelector("button").addEventListener("click", function () {
  let input = copyText2.querySelector("input.text2");
  input.select();
  document.execCommand("copy");
  copyText2.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText2.classList.remove("active");
  }, 3500);
});




const countdownEls = document.querySelectorAll(".countdown")
countdownEls.forEach(countdownEl => createCountdown(countdownEl))

function createCountdown(countdownEl){
  const target = new Date(new Date(countdownEl.dataset.targetDate).toLocaleString('en', ))
  const parts = {
    days: {text: ["days","day"], dots: 30},
    hours: {text: ["hours","hour"], dots: 24},
    minutes: {text: ["minutes","minute"], dots: 60},
    seconds: {text: ["seconds","second"], dots: 60},
  }

  Object.entries(parts).forEach(([key, value])=>{
    const partEl = document.createElement("div");
    partEl.classList.add("part", key);
    partEl.style.setProperty("--dots", value.dots);
    value.element = partEl;

    const remainingEl = document.createElement("div");
    remainingEl.classList.add("remaining");
    remainingEl.innerHTML = `
      <span class="number"></span>
      <span class="text"></span>
    `
    partEl.append(remainingEl);
    for(let i = 0; i < value.dots; i++){
      const dotContainerEl = document.createElement("div");
      dotContainerEl.style.setProperty("--dot-idx", i);
      dotContainerEl.classList.add("dot-container")
      const dotEl = document.createElement("div");
      dotEl.classList.add("dot")
      dotContainerEl.append(dotEl);
      partEl.append(dotContainerEl);
    }
    countdownEl.append(partEl);
  })
  getRemainingTime(target, parts)
}


  // EDIT JAM  Acount  DOWN
function getRemainingTime(target, parts, first=true){
  const now = new Date()
  if(first) console.log({target, now})
  const remaining = {}
  let seconds = Math.floor((target - (now))/1000);
  let minutes = Math.floor(seconds/60);
  let hours = Math.floor(minutes/60);
  let days = Math.floor(hours/24);
  hours = hours-(days*24);
  minutes = minutes-(days*24*60)-(hours*60);
  seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
  Object.entries({days, hours, minutes, seconds}).forEach(([key, value])=>{
    const remaining = parts[key].element.querySelector(".number");
    const text = parts[key].element.querySelector(".text");
    remaining.innerText = value;
    text.innerText = parts[key].text[Number(value==1)]
    const dots = parts[key].element.querySelectorAll(".dot")
    dots.forEach((dot, idx)=>{
      dot.dataset.active = idx <= value;
      dot.dataset.lastactive = idx == value;
    })
  })
  if(now <= target){
    window.requestAnimationFrame(()=>{
      getRemainingTime(target, parts, false)
    });
  }
}



  // BG MUSIK 
var bleep1 = new Audio(); bleep1.src ='mp3/Christina_Perri.mp3';
 bleep1.loop = true;

