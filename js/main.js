const searchEl = document.querySelector('.search'); //class가 search인 요소를 검색
const searchInputEl = searchEl.querySelector('input'); //const searchInputEl = document.querySelector('.search input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused') // focused라는 이름의 class내용추가 
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function(){ //focus가 사라지면
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
    console.log('window.scrollY');
    if (window.scrollY > 500){
        // 배지 숨기기
        //gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        // 버튼 보이기
        gsap.to('#to-top', .2, {
            x: 0
        });
    }
    else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        // 버튼 숨기기
        gsap.to('#to-top', .2, {
            x: 100
        });
    }
}, 300));
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl , index){
    gsap.to(fadeEl, 1, {
        delay: (index+1)*.7,  //0.7, 1.4, 2.1, 2.8
        opacity: 1
    });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true // 반복 재생 여부
  })
  
new Swiper('.promotion .swiper-container' , {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000 //5초
    },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});
new Swiper ('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});



const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        promotionEl.classList.add('hide')
      // 요소가 보여야 하면,
    } else {
        promotionEl.classList.remove('hide')
    }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEl = document.querySelectorAll('section.scroll-spy');
spyEl.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();